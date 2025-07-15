import User from "../models/User.model.js";
import { getBufferFromCloudinaryUrl } from "../utils/cloudinary.js";
import {
  decryptFileBuffer,
  decryptWithMasterKey,
  verifyDownloadToken,
} from "../utils/cryptoUtils.js";
import archiver from "archiver";
import UserFile from "../models/UserFile.model.js";

export const downloadAndDecryptFilesForNominee = async (req, res) => {
  try {
    const { userId, token } = req.params;

    // const { nomineeEmail } = verifyDownloadToken(token);

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const encryptionKey = decryptWithMasterKey(user.encryptionKey);
    const files = await UserFile.find({ userId });

    const archive = archiver("zip", { zlib: { level: 9 } });
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${user.fullName}_AfterMe.zip"`
    );
    archive.pipe(res);

    for (const file of files) {
      const encryptedBuffer = await getBufferFromCloudinaryUrl(
        file.cloudinaryUrl
      );
      const decryptedBuffer = decryptFileBuffer(encryptedBuffer, encryptionKey);

      archive.append(decryptedBuffer, { name: file.originalName });
    }
    await archive.finalize();
  } catch (err) {
    console.error("❌ Download error:", err.message);
    res.status(400).json({ message: "Invalid or expired link" });
  }
};
