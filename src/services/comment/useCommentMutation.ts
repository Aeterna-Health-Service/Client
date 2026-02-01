/**
 * Comment Mutation 훅
 * @author 김동현
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment, deleteComment } from './index';
import { commentKeys } from './useCommentQuery';
import { postKeys } from '../post/usePostQuery';
import type { TCommentRequestDto } from './types';

/**
 * 댓글 작성 Mutation
 * @author 김동현
 */
export const useCreateCommentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ postId, data }: { postId: number; data: TCommentRequestDto }) =>
            createComment(postId, data),
        onSuccess: (_, variables) => {
            // 댓글 목록 갱신
            queryClient.invalidateQueries({
                queryKey: commentKeys.list(variables.postId),
            });
            // 게시글의 commentCount 갱신을 위해
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
};

/**
 * 댓글 삭제 Mutation
 * @author 김동현
 */
export const useDeleteCommentMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            postId,
            commentId,
            userId,
        }: {
            postId: number;
            commentId: number;
            userId: number;
        }) => deleteComment(postId, commentId, userId),
        onSuccess: (_, variables) => {
            // 댓글 목록 갱신
            queryClient.invalidateQueries({
                queryKey: commentKeys.list(variables.postId),
            });
            // 게시글의 commentCount 갱신을 위해
            queryClient.invalidateQueries({ queryKey: postKeys.all });
        },
    });
};
