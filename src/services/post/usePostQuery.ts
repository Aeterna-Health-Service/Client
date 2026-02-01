/**
 * Post Query 훅
 * @author 김동현
 */

import { useQuery } from '@tanstack/react-query';
import { getPostList, getPost } from './index';
import type { TBoardType } from './types';

/**
 * Post Query Keys 팩토리
 * @author 김동현
 */
export const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (boardType: TBoardType, pageNum?: number, size?: number) =>
        [...postKeys.lists(), { boardType, pageNum, size }] as const,
    details: () => [...postKeys.all, 'detail'] as const,
    detail: (boardType: TBoardType, postId: number, userId: number) =>
        [...postKeys.details(), { boardType, postId, userId }] as const,
};

/**
 * 게시글 목록 조회 쿼리
 * @author 김동현
 */
export const useGetPostListQuery = (
    boardType: TBoardType,
    pageNum: number = 0,
    size: number = 10
) => {
    return useQuery({
        queryKey: postKeys.list(boardType, pageNum, size),
        queryFn: () => getPostList(boardType, pageNum, size),
    });
};

/**
 * 게시글 단건 조회 쿼리
 * @author 김동현
 */
export const useGetPostQuery = (
    boardType: TBoardType,
    postId: number,
    userId: number
) => {
    return useQuery({
        queryKey: postKeys.detail(boardType, postId, userId),
        queryFn: () => getPost(boardType, postId, userId),
        enabled: !!postId && !!userId,
    });
};
