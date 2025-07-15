import cron from 'node-cron';
import User from '../models/User.model.js';
import { sendAliveEmail, notifyNominees } from '../utils/emailService.js';
import logger from '../utils/logger.js'; // Make sure you have a logger configured

const getDaysDiff = (from, to) =>
  Math.floor((to - from) / (1000 * 60 * 60 * 24));

// 🔁 Alive Check + Inactivity Logic
export const handleAliveChecks = async () => {
  const now = new Date();

  const users = await User.find({
    $or: [
      { aliveStatus: 'active' },
      { aliveStatus: 'unresponsive' },
    ]
  }).select('_id email fullName aliveStatus alivePhase lastAliveResponse createdAt nominees');

  for (const user of users) {
    const referenceDate = user.lastAliveResponse || user.createdAt;
    const daysSinceLastResponse = getDaysDiff(referenceDate, now);

    if (user.aliveStatus === 'active') {
      if (user.alivePhase === 'initial' && daysSinceLastResponse >= 90) {
        user.lastAliveCheck = now;
        user.alivePhase = 'reminder';
        await sendAliveEmail(user, 'initial');
        logger.info(`📩 [90d] Alive check sent to ${user.email}`);
      }

      else if (user.alivePhase === 'reminder' && daysSinceLastResponse >= 120) {
        user.lastAliveCheck = now;
        user.alivePhase = 'final';
        await sendAliveEmail(user, 'reminder');
        logger.info(`📩 [120d] Reminder sent to ${user.email}`);
      }

      else if (user.alivePhase === 'final' && daysSinceLastResponse >= 150) {
        user.aliveStatus = 'unresponsive';
        await sendAliveEmail(user, 'final');
        logger.warn(`⚠️ [150d] Marked ${user.email} as unresponsive`);
      }
    }

    if (user.aliveStatus === 'unresponsive' && daysSinceLastResponse >= 170) {
      await notifyNominees(user, user.nominees || []);
      logger.info(`📤 [170d] Data shared with nominees of ${user.email}`);
    }

    await user.save();
  }
};

// Cron - Daily 1 AM → Alive check emails
cron.schedule('0 1 * * *', async () => {
  logger.info('🕐 [Cron] Daily check for alive status...');
  try {
    await handleAliveChecks();
    logger.info('✅ Alive check completed');
  } catch (err) {
    logger.error(`❌ Cron error: ${err.message}`);
  }
});
