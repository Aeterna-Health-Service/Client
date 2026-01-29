import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleProp,
    StyleSheet,
    ViewStyle,
    Keyboard,
    Pressable,
} from 'react-native';
import { SafeAreaView, Edges } from 'react-native-safe-area-context';
import { COLORS } from '@/styles';

export type ScreenLayoutProps = {
    children: React.ReactNode;
    /**
     * 스크롤 가능 여부 (기본값: false)
     */
    scrollable?: boolean;
    /**
     * 적용할 SafeAreaView Edges (기본값: ['top', 'left', 'right'])
     * bottom은 탭바가 있는 경우 제외하는 것이 일반적입니다.
     */
    edges?: Edges;
    /**
     * 컨테이너 스타일
     */
    style?: StyleProp<ViewStyle>;
    /**
     * ScrollView 컨텐츠 컨테이너 스타일 (scrollable이 true일 때만 적용)
     */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
     * KeyboardAvoidingView behavior (기본값: 플랫폼별 최적값 auto)
     */
    keyboardBehavior?: 'padding' | 'height' | 'position';
    /**
     * 키보드 외부 터치 시 키보드 닫기 여부 (기본값: true)
     */
    dismissKeyboardOnPress?: boolean;
    /**
     * 배경색 (기본값: COLORS.white)
     */
    backgroundColor?: string;
};

/**
 * 화면의 기본 레이아웃을 잡아주는 컴포넌트입니다.
 * SafeAreaView, KeyboardAvoidingView, ScrollView 등을 통합하여 관리합니다.
 * @author AI Assistant
 */
export const ScreenLayout = ({
    children,
    scrollable = false,
    edges = ['top', 'left', 'right'],
    style,
    contentContainerStyle,
    keyboardBehavior,
    dismissKeyboardOnPress = true,
    backgroundColor = COLORS.white,
}: ScreenLayoutProps) => {
    const Container = dismissKeyboardOnPress ? Pressable : React.Fragment;
    const containerProps = dismissKeyboardOnPress ? { onPress: Keyboard.dismiss, style: { flex: 1 } } : {};

    const content = scrollable ? (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={[
                styles.scrollContent,
                contentContainerStyle,
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            {dismissKeyboardOnPress ? (
                <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
                    {children}
                </Pressable>
            ) : (
                children
            )}
        </ScrollView>
    ) : (
        <>{children}</>
    );

    // If dismissKeyboardOnPress is true and NOT scrollable, wrap content in Pressable to dismiss keyboard
    const wrappedContent = !scrollable && dismissKeyboardOnPress ? (
        <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            {content}
        </Pressable>
    ) : (
        content
    );

    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor },
                style
            ]}
            edges={edges}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={keyboardBehavior ?? (Platform.OS === 'ios' ? 'padding' : undefined)}
            >
                {wrappedContent}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
});
