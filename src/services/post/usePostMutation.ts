/**
 * Post Mutation 훅
 * @author 김동현
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, updatePost, deletePost, likePost, unlikePost } from './index';
import { postKeys } from './usePostQuery';
import type { TBoardType, TPostRequestDto } from './types';

/**
 * 게시글 작성 Mutation
 * @author 김동현
 */
export const useCreatePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ boardType, data }: { boardType: TBoardType; data: TPostRequestDto }) =>
            createPost(boardType, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: postKeys.lists() });
        },
    });
};

/**
 * 게시글 수정 Mutation
 * @author 김동현
 */
export const useUpdatePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            boardType,
            postId,
            data,
        }: {
            boardType: TBoardType;
            postId: number;
            data: TPostRequestDto;
        }) => updatePost(boardType, postId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
};

/**
 * 게시글 삭제 Mutation
 * @author 김동현
 */
export const useDeletePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            boardType,
            postId,
            userId,
        }: {
            boardType: TBoardType;
            postId: number;
            userId: number;
        }) => deletePost(boardType, postId, userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: postKeys.lists() });
        },
    });
};

/**
 * 게시글 좋아요 Mutation
 * @author 김동현
 */
export const useLikePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            boardType,
            postId,
            userId,
        }: {
            boardType: TBoardType;
            postId: number;
            userId: number;
        }) => likePost(boardType, postId, userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
};

/**
 * 게시글 좋아요 취소 Mutation
 * @author 김동현
 */
export const useUnlikePostMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            boardType,
            postId,
            userId,
        }: {
            boardType: TBoardType;
            postId: number;
            userId: number;
        }) => unlikePost(boardType, postId, userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
};
