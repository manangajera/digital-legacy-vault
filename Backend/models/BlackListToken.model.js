import mongoose from 'mongoose';

const BlackListTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    index: { expires: '7d' }, // TTL index will delete this document after "expiresAt"
  },
}, {
  timestamps: true,
});

const BlackListToken = mongoose.model('BlackListToken', BlackListTokenSchema);
export default BlackListToken;