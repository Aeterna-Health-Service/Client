/**
 * 전역 타입 정의
 * @author 김동현
 */

// API 타입
export type TGetResponse<T> = {
    status: number;
    message: string;
    data: T;
};

export type TPaginatedResponse<T> = {
    status: number;
    message: string;
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};

export type TApiError = {
    status: number;
    code: string;
    message: string;
};

// Domain 타입
export * from './user';
export * from './diet';
export * from './exercise';
