/**
 * 날짜 포맷팅 유틸리티
 * @author 김동현
 */

/**
 * Date 객체를 YYYY-MM-DD 형식으로 변환합니다.
 * @param date - 변환할 Date 객체
 * @returns YYYY-MM-DD 형식의 문자열
 */
export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 * Date 객체를 YYYY-MM-DD HH:mm 형식으로 변환합니다.
 * @param date - 변환할 Date 객체
 * @returns YYYY-MM-DD HH:mm 형식의 문자열
 */
export const formatDateTime = (date: Date): string => {
    const dateStr = formatDate(date);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${dateStr} ${hours}:${minutes}`;
};

/**
 * 상대 시간을 반환합니다. (예: "5분 전", "2시간 전")
 * @param date - 비교할 Date 객체
 * @returns 상대 시간 문자열
 */
export const formatRelativeTime = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return '방금 전';
    } else if (minutes < 60) {
        return `${minutes}분 전`;
    } else if (hours < 24) {
        return `${hours}시간 전`;
    } else if (days < 7) {
        return `${days}일 전`;
    } else {
        return formatDate(date);
    }
};
