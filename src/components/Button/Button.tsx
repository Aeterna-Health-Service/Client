import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Text } from '../Text';
import { styles, variantStyles, sizeStyles } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large' | 'fullWidth';

export type ButtonProps = Omit<PressableProps, 'style'> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
};

/**
 * Button 컴포넌트
 * 다양한 variant와 size를 지원하는 버튼 컴포넌트입니다.
 * @author 김동현
 */
export const Button = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    style,
    textStyle,
    children,
    ...props
}: ButtonProps) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                variantStyles[variant].container,
                sizeStyles[size].container,
                pressed && variantStyles[variant].pressed,
                disabled && styles.disabled,
                style,
            ]}
            disabled={disabled}
            {...props}
        >
            {typeof children === 'string' ? (
                <Text
                    style={[
                        variantStyles[variant].text,
                        sizeStyles[size].text,
                        textStyle,
                    ]}
                >
                    {children}
                </Text>
            ) : (
                children
            )}
        </Pressable>
    );
};
