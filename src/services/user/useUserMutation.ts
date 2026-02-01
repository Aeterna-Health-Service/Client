/**
 * 사용자 서비스 - TanStack Mutation 훅
 * @author 김동현
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser, updateUser } from './index';
import { userKeys } from './useUserQuery';
import type { TUserRequestDto } from './types';

/**
 * 회원 가입 뮤테이션
 * @author 김동현
 */
export const useRegisterUserMutation = () => {
    return useMutation({
        mutationFn: registerUser,
    });
};

/**
 * 사용자 정보 수정 뮤테이션
 * @author 김동현
 */
export const useUpdateUserMutation = (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: TUserRequestDto) => updateUser(userId, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: userKeys.detail(userId) });
        },
    });
};
