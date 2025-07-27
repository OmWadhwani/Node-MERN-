import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
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
    content: {
      type: String,
      required: true,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment', // for replies
      default: null,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model('Comment', commentSchema);
