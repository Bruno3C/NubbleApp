import {PostComment, postCommentService} from '@domain';
import {usePaginatedList} from 'src/domain/hooks/usePaginatedList';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
