import mongoose, { Schema } from 'mongoose';

const likeSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

likeSchema.index({ video: 1, owner: 1 }, { unique: true }); // Prevent multiple likes from same user

export const Like = mongoose.model('Like', likeSchema);
