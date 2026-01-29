import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../styles';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * 전역 에러 바운더리
 * 앱 런타임 중 발생하는 치명적인 에러를 포착하여 보여줍니다.
 * @author 김동현
 */
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    private handleRetry = () => {
        // 에러 상태 초기화 (재시도)
        this.setState({ hasError: false, error: null });
    };

    public render() {
        if (this.state.hasError) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>앗! 오류가 발생했습니다 😢</Text>
                    <Text style={styles.message}>
                        앱을 실행하는 도중 문제가 생겼습니다.{'\n'}
                        잠시 후 다시 시도해 주세요.
                    </Text>

                    {/* 개발 모드에서만 상세 에러 표시 */}
                    {__DEV__ && this.state.error && (
                        <View style={styles.errorBox}>
                            <Text style={styles.errorText}>{this.state.error.toString()}</Text>
                        </View>
                    )}

                    <Pressable style={styles.button} onPress={this.handleRetry}>
                        <Text style={styles.buttonText}>다시 시도하기</Text>
                    </Pressable>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: COLORS.gray[900],
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        color: COLORS.gray[600],
        lineHeight: 24,
    },
    errorBox: {
        padding: 12,
        backgroundColor: COLORS.gray[100],
        borderRadius: 8,
        marginBottom: 32,
        width: '100%',
    },
    errorText: {
        fontSize: 12,
        color: COLORS.error.main,
        fontFamily: 'monospace',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: COLORS.primary[500],
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
