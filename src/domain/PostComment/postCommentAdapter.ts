import {PostComment, PostCommentAPI} from './postCommentTypes';

/**
 * @description Adapta o PostCommentAPI para o modelo de PostComment
 */
function toPostComment(postCommnetAPI: PostCommentAPI): PostComment {
  return {
    id: postCommnetAPI.id,
    message: postCommnetAPI.message,
    createdAt: postCommnetAPI.created_at,
    author: {
      id: postCommnetAPI.user.id,
      profileURL: postCommnetAPI.user.profile_url,
      name: postCommnetAPI.user.full_name,
      userName: postCommnetAPI.user.username,
    },
  };
}

export const postCommentAdapter = {toPostComment};
