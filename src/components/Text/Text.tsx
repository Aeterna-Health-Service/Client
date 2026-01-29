import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleProp, TextStyle } from 'react-native';
import { variantStyles } from './Text.styles';

export type TextVariant =
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall';

export type TextProps = RNTextProps & {
    variant?: TextVariant;
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
};

/**
 * Text 컴포넌트
 * 다양한 타이포그래피 variant를 지원하는 텍스트 컴포넌트입니다.
 * @author 김동현
 */
export const Text = ({
    variant = 'bodyMedium',
    style,
    children,
    ...props
}: TextProps) => {
    return (
        <RNText style={[variantStyles[variant].text, style]} {...props}>
            {children}
        </RNText>
    );
};
