import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

/**
 * 인증 스택 파라미터
 * @author 김동현
 */
export type AuthStackParamList = {
    Splash: undefined;
    Login: undefined;
    Onboarding: undefined;
};

/**
 * 커뮤니티 스택 파라미터
 * @author 김동현
 */
export type CommunityStackParamList = {
    CommunityList: undefined;
    PostDetail: { postId: string };
    CreatePost: { category?: string; postId?: string };
};

/**
 * 프로필 스택 파라미터
 * @author 김동현
 */
export type ProfileStackParamList = {
    ProfileMain: undefined;
    FollowList: { type: 'followers' | 'following' };
    MyPosts: undefined;
    AddStory: undefined;


    EditPost: {
        postId: string;
        category?: string;
        initialContent?: string;
        mode: 'edit';
    };
    Settings: undefined;
    EditGoal: undefined;
    Shop: undefined;
};

import type { Meal, Workout } from '../screens/home/types';

/**
 * 홈 스택 파라미터
 * @author 김동현
 */
export type HomeStackParamList = {
    HomeMain: undefined;
    DietUpload: { mode?: 'photo' | 'manual'; date?: string; initialData?: Meal };
    ExerciseUpload: { mode?: 'sync' | 'manual'; date?: string; initialData?: Workout };
};

/**
 * 메인 탭 파라미터
 * @author 김동현
 */
export type MainTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;
    Stats: undefined;
    Community: NavigatorScreenParams<CommunityStackParamList>;
    Profile: NavigatorScreenParams<ProfileStackParamList>;
};

/**
 * 루트 스택 파라미터
 * @author 김동현
 */
export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    Main: NavigatorScreenParams<MainTabParamList>;
    StoryDetail: {
        storyId: string;
        imageUrl: string;
        userName?: string;
        userAvatar?: string;
    };
    UserStory: {
        userId: string;
        userName?: string;
        userAvatar?: string;
    };
};

/**
 * 인증 스택 화면 Props
 */
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, T>;

/**
 * 메인 탭 화면 Props
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
>;

/**
 * 커뮤니티 스택 화면 Props
 */
export type CommunityStackScreenProps<T extends keyof CommunityStackParamList> = CompositeScreenProps<
    NativeStackScreenProps<CommunityStackParamList, T>,
    CompositeScreenProps<
        BottomTabScreenProps<MainTabParamList>,
        NativeStackScreenProps<RootStackParamList>
    >
>;

/**
 * 프로필 스택 화면 Props
 */
export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
    NativeStackScreenProps<ProfileStackParamList, T>,
    CompositeScreenProps<
        BottomTabScreenProps<MainTabParamList>,
        NativeStackScreenProps<RootStackParamList>
    >
>;

/**
 * 루트 스택 화면 Props
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

// 전역 타입 선언
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
