/**
 * Post 서비스
 * @author 김동현
 */

import { apiClient } from '../apiClient';
import type {
    TBoardType,
    TPostRequestDto,
    TPostResponseDto,
    TPageResponseDto,
    TGetResponse,
} from './types';

/**
 * 게시글 목록 조회
 * GET /boards/{boardType}/posts
 * @author 김동현
 */
export const getPostList = async (
    boardType: TBoardType,
    pageNum: number = 0,
    size: number = 10
): Promise<TGetResponse<TPageResponseDto<TPostResponseDto>>> => {
    const response = await apiClient.get<TGetResponse<TPageResponseDto<TPostResponseDto>>>(
        `/boards/${boardType}/posts`,
        { params: { pageNum, size } }
    );
    return response.data;
};

/**
 * 게시글 단건 조회
 * GET /boards/{boardType}/posts/{postId}/{userId}
 * @author 김동현
 */
export const getPost = async (
    boardType: TBoardType,
    postId: number,
    userId: number
): Promise<TGetResponse<TPostResponseDto>> => {
    const response = await apiClient.get<TGetResponse<TPostResponseDto>>(
        `/boards/${boardType}/posts/${postId}/${userId}`
    );
    return response.data;
};

/**
 * 게시글 작성
 * POST /boards/{boardType}/posts
 * @author 김동현
 */
export const createPost = async (
    boardType: TBoardType,
    data: TPostRequestDto
): Promise<TGetResponse<number>> => {
    const response = await apiClient.post<TGetResponse<number>>(
        `/boards/${boardType}/posts`,
        data
    );
    return response.data;
};

/**
 * 게시글 수정
 * PUT /boards/{boardType}/posts/{postId}
 * @author 김동현
 */
export const updatePost = async (
    boardType: TBoardType,
    postId: number,
    data: TPostRequestDto
): Promise<TGetResponse<number>> => {
    const response = await apiClient.put<TGetResponse<number>>(
        `/boards/${boardType}/posts/${postId}`,
        data
    );
    return response.data;
};

/**
 * 게시글 삭제
 * DELETE /boards/{boardType}/posts/{postId}/{userId}
 * @author 김동현
 */
export const deletePost = async (
    boardType: TBoardType,
    postId: number,
    userId: number
): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.delete<TGetResponse<boolean>>(
        `/boards/${boardType}/posts/${postId}/${userId}`
    );
    return response.data;
};

/**
 * 게시글 좋아요
 * POST /boards/{boardType}/posts/{postId}/like/{userId}
 * @author 김동현
 */
export const likePost = async (
    boardType: TBoardType,
    postId: number,
    userId: number
): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.post<TGetResponse<boolean>>(
        `/boards/${boardType}/posts/${postId}/like/${userId}`
    );
    return response.data;
};

/**
 * 게시글 좋아요 취소
 * DELETE /boards/{boardType}/posts/{postId}/like/{userId}
 * @author 김동현
 */
export const unlikePost = async (
    boardType: TBoardType,
    postId: number,
    userId: number
): Promise<TGetResponse<boolean>> => {
    const response = await apiClient.delete<TGetResponse<boolean>>(
        `/boards/${boardType}/posts/${postId}/like/${userId}`
    );
    return response.data;
};
