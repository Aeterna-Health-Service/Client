/**
 * Comment Query 훅
 * @author 김동현
 */

import { useQuery } from '@tanstack/react-query';
import { getComments } from './index';

/**
 * Comment Query Keys 팩토리
 * @author 김동현
 */
export const commentKeys = {
    all: ['comments'] as const,
    lists: () => [...commentKeys.all, 'list'] as const,
    list: (postId: number, pageNum?: number, size?: number) =>
        [...commentKeys.lists(), { postId, pageNum, size }] as const,
};

/**
 * 댓글 목록 조회 쿼리
 * @author 김동현
 */
export const useGetCommentsQuery = (
    postId: number,
    pageNum: number = 0,
    size: number = 10
) => {
    return useQuery({
        queryKey: commentKeys.list(postId, pageNum, size),
        queryFn: () => getComments(postId, pageNum, size),
        enabled: !!postId,
    });
};
