/**
 * Comment 서비스 타입 정의
 * @author 김동현
 */

export type {
    TCommentRequestDto,
    TCommentResponseDto,
    TPageResponseDto,
    TGetResponse,
} from '../post/types';

/**
 * 댓글 목록 조회 필터
 */
export type TCommentFilters = {
    postId: number;
    pageNum?: number;
    size?: number;
};
