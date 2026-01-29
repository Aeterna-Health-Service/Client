import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as JotaiProvider } from 'jotai';
import { RootNavigator } from './src/navigation';
import { ErrorBoundary } from './src/components';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 10, // 10분
      retry: 1,
    },
  },
});

/**
 * App 컴포넌트
 * 앱의 루트 컴포넌트입니다.
 * @author 김동현
 */
const App = () => {
  return (
    <ErrorBoundary>
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </QueryClientProvider>
      </JotaiProvider>
    </ErrorBoundary>
  );
};

export default App;
