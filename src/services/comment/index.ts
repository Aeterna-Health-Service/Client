/**
 * Comment 서비스
 * @author 김동현
 */

import { apiClient } from '../apiClient';
import type {
    TCommentRequestDto,
    TCommentResponseDto,
    TPageResponseDto,
    TGetResponse,
} from './types';

/**
 * 댓글 목록 조회
 * GET /posts/{postId}/comments
 * @author 김동현
 */
export const getComments = async (
    postId: number,
    pageNum: number = 0,
    size: number = 10
): Promise<TGetResponse<TPageResponseDto<TCommentResponseDto>>> => {
    const response = await apiClient.get<TGetResponse<TPageResponseDto<TCommentResponseDto>>>(
        `/posts/${postId}/comments`,
        { params: { pageNum, size } }
    );
    return response.data;
};

/**
 * 댓글 작성
 * POST /posts/{postId}/comments
 * @author 김동현
 */
export const createComment = async (
    postId: number,
    data: TCommentRequestDto
): Promise<TGetResponse<number>> => {
    const response = await apiClient.post<TGetResponse<number>>(
        `/posts/${postId}/comments`,
        data
    );
    return response.data;
};

/**
 * 댓글 삭제
 * DELETE /posts/{postId}/comments/{commentId}/{userId}
 * @author 김동현
 */
export const deleteComment = async (
    postId: number,
    commentId: number,
    userId: number
): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.delete<TGetResponse<boolean>>(
        `/posts/${postId}/comments/${commentId}/${userId}`
    );
    return response.data;
};
