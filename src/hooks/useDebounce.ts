import { useState, useEffect } from 'react';

/**
 * useDebounce 훅
 * 값 변경 후 지정된 시간(ms) 동안 추가 변경이 없으면 값을 반환합니다.
 * @author 김동현
 */
export const useDebounce = <T>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};
