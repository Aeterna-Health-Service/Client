/**
 * 사용자 서비스 - TanStack Query 훅
 * @author 김동현
 */

import { useQuery } from '@tanstack/react-query';
import { getUser } from './index';

/**
 * Query Keys 팩토리
 */
export const userKeys = {
    all: ['users'] as const,
    details: () => [...userKeys.all, 'detail'] as const,
    detail: (userId: number) => [...userKeys.details(), userId] as const,
};

/**
 * 사용자 조회 쿼리
 * @author 김동현
 */
export const useGetUserQuery = (userId: number) => {
    return useQuery({
        queryKey: userKeys.detail(userId),
        queryFn: () => getUser(userId),
        enabled: !!userId,
    });
};
