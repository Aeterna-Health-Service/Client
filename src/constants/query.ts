/**
 * TanStack Query 기본 옵션
 * @author 김동현
 */
export const DEFAULT_QUERY_OPTIONS = {
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    retry: 1,
} as const;
