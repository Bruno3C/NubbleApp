import {PostComment, postCommentService} from '@domain';
import {usePaginatedList} from '@domain';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
