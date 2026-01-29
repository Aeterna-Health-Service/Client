/**
 * StatsScreen 관련 타입 정의
 * @author 김동현
 */

/** 기간 타입 */
export type TPeriod = 'day' | 'week' | 'month';

/** 차트 유형 */
export type TChartType = 'intake' | 'burned' | 'weight';

/** 단일 데이터 포인트 */
export interface TDataPoint {
    label: string;
    intake: number;
    burned: number;
    weight: number;
}

/** 일간 데이터 (요일별) */
export interface TDailyData {
    period: 'day';
    data: TDataPoint[]; // 7개: 월~일
}

/** 주간 데이터 (주차별) */
export interface TWeeklyData {
    period: 'week';
    data: TDataPoint[]; // 4개: 1주~4주
}

/** 월간 데이터 (월별) */
export interface TMonthlyData {
    period: 'month';
    data: TDataPoint[]; // 6~12개: 1월~12월
}

/** 통합 기간 데이터 */
export type TPeriodData = TDailyData | TWeeklyData | TMonthlyData;

/** 통계 요약 정보 */
export interface TStatsSummary {
    avgIntake: number;
    avgBurned: number;
    startWeight: number;
    currentWeight: number;
    weightChange: number;
}

/** 차트 선택 상태 */
export interface TChartSelection {
    intake: boolean;
    burned: boolean;
    weight: boolean;
}
