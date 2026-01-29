import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../components';
import { styles } from './ChallengeChips.styles';

type ChallengeChipsProps = {
    challenges: string[];
    onChipPress?: (challenge: string) => void;
};

/**
 * 챌린지 해시태그 칩 컴포넌트
 * @author 김동현
 */
export const ChallengeChips = ({ challenges, onChipPress }: ChallengeChipsProps) => {
    return (
        <View style={styles.challengeRow}>
            {challenges.map((challenge) => (
                <Pressable
                    key={challenge}
                    style={styles.challengeChip}
                    onPress={() => onChipPress?.(challenge)}
                >
                    <Text variant="labelMedium">{challenge}</Text>
                </Pressable>
            ))}
        </View>
    );
};
