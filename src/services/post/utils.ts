/**
 * Post 서비스 유틸리티
 * @author 김동현
 */

import type { TBoardType } from './types';

/**
 * 프론트엔드 카테고리 타입
 */
export type TFrontendCategory = '전체' | '운동꿀팁' | '식단추천' | '자유게시판' | '스토리';

/**
 * 프론트엔드 카테고리 → 백엔드 boardType 변환
 * @author 김동현
 */
export const categoryToBoardType = (category: TFrontendCategory): TBoardType | null => {
    const mapping: Record<TFrontendCategory, TBoardType | null> = {
        '전체': null, // 전체는 별도 처리 필요
        '운동꿀팁': 'TIP',
        '식단추천': 'MEAL',
        '자유게시판': 'FREE',
        '스토리': null, // 스토리는 별도 API
    };
    return mapping[category];
};

/**
 * 백엔드 boardType → 프론트엔드 카테고리 변환
 * @author 김동현
 */
export const boardTypeToCategory = (boardType: TBoardType): TFrontendCategory => {
    const mapping: Record<TBoardType, TFrontendCategory> = {
        TIP: '운동꿀팁',
        MEAL: '식단추천',
        FREE: '자유게시판',
        ROUTINE: '운동꿀팁', // ROUTINE은 운동꿀팁으로 매핑
    };
    return mapping[boardType];
};

/**
 * 게시글 작성 가능한 카테고리 목록
 */
export const POST_BOARD_TYPES: TBoardType[] = ['TIP', 'MEAL', 'FREE'];

/**
 * 카테고리별 색상
 */
export const CATEGORY_COLORS: Record<TFrontendCategory, string> = {
    '전체': '#333333',
    '운동꿀팁': '#2196F3',
    '식단추천': '#4CAF50',
    '자유게시판': '#FF9800',
    '스토리': '#9C27B0',
};
