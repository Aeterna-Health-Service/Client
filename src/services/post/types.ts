/**
 * Post 서비스 타입 정의
 * @author 김동현
 */

import type { TGetResponse } from '../user/types';

/**
 * 게시판 타입
 */
export type TBoardType = 'TIP' | 'ROUTINE' | 'MEAL' | 'FREE';

/**
 * 게시글 타입 (콘텐츠 분류)
 */
export type TPostType = 'MEAL' | 'WORKOUT' | 'BODY' | 'DAILY';

/**
 * 게시글 생성/수정 요청 DTO
 */
export type TPostRequestDto = {
    /** 작성자 사용자 ID */
    userId: number;
    /** 게시글 타입 */
    postType?: TPostType;
    /** 제목 */
    title: string;
    /** 내용 */
    content: string;
};

/**
 * 게시글 응답 DTO
 */
export type TPostResponseDto = {
    /** 게시글 ID */
    id: number;
    /** 작성자 사용자 ID */
    userId: number;
    /** 작성자 이름 */
    userName: string;
    /** 게시글 타입 */
    postType: TPostType;
    /** 제목 */
    title: string;
    /** 내용 */
    content: string;
    /** 조회수 */
    viewCount: number;
    /** 좋아요 수 */
    likeCount: number;
    /** 댓글 수 */
    commentCount: number;
    /** 현재 사용자의 좋아요 여부 */
    isLiked: boolean;
    /** 작성 일시 */
    createdAt: string;
};

/**
 * 댓글 생성 요청 DTO
 */
export type TCommentRequestDto = {
    /** 댓글 작성자 사용자 ID */
    userId: number;
    /** 댓글 내용 */
    content: string;
};

/**
 * 댓글 응답 DTO
 */
export type TCommentResponseDto = {
    /** 댓글 ID */
    id: number;
    /** 작성자 사용자 ID */
    userId: number;
    /** 댓글 내용 */
    content: string;
    /** 작성 일시 */
    createdAt: string;
};

/**
 * 페이지네이션 응답 DTO
 */
export type TPageResponseDto<T> = {
    /** 조회된 데이터 목록 */
    content: T[];
    /** 현재 페이지 번호 (0부터 시작) */
    pageNum: number;
    /** 페이지 크기 */
    size: number;
    /** 전체 데이터 수 */
    totalElements: number;
    /** 전체 페이지 수 */
    totalPages: number;
    /** 첫 페이지 여부 */
    first: boolean;
    /** 마지막 페이지 여부 */
    last: boolean;
    /** 다음 페이지 존재 여부 */
    hasNext: boolean;
    /** 이전 페이지 존재 여부 */
    hasPrevious: boolean;
};

/**
 * 게시글 목록 조회 필터
 */
export type TPostFilters = {
    boardType: TBoardType;
    pageNum?: number;
    size?: number;
};

export type { TGetResponse };
