import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput } from 'react-native';
import { Text, ScreenLayout } from '../../components';
import { styles } from './CreatePostScreen.styles';
import type { CommunityStackScreenProps, ProfileStackScreenProps } from '../../navigation/types';
import type { TCategory } from './components';

export type CreatePostScreenProps =
    | CommunityStackScreenProps<'CreatePost'>
    | ProfileStackScreenProps<'EditPost'>;

const POST_CATEGORIES: Exclude<TCategory, '전체'>[] = ['운동꿀팁', '식단추천', '자유게시판'];

/**
 * 새 게시글 작성 화면
 * @author 김동현
 */
export const CreatePostScreen = ({ navigation, route }: CreatePostScreenProps) => {
    const initialCategory = route.params?.category as TCategory | undefined;
    const initialContent = (route.params as any)?.initialContent;
    const mode = (route.params as any)?.mode;
    const isEditMode = mode === 'edit';

    const [category, setCategory] = useState<Exclude<TCategory, '전체'> | null>(
        initialCategory && initialCategory !== '전체' ? initialCategory : null
    );
    const [content, setContent] = useState(initialContent || '');

    const isValid = category !== null && content.trim().length > 0;

    const handleSubmit = () => {
        if (!isValid) return;

        // TODO: API 호출하여 게시글 저장
        if (isEditMode) {
            console.log('Updating post:', { category, content });
        } else {
            console.log('Creating post:', { category, content });
        }

        // 목록으로 돌아가기
        navigation.goBack();
    };

    return (
        <ScreenLayout style={styles.container} edges={['top']}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>←</Text>
                </Pressable>
                <Text variant="h2" style={styles.headerTitle}>
                    {isEditMode ? '게시글 수정' : '새 글 작성'}
                </Text>
                <Pressable
                    style={[styles.submitButton, !isValid && styles.submitButtonDisabled]}
                    onPress={handleSubmit}
                    disabled={!isValid}
                >
                    <Text
                        style={[
                            styles.submitButtonText,
                            !isValid && styles.submitButtonTextDisabled,
                        ]}
                    >
                        {isEditMode ? '수정' : '등록'}
                    </Text>
                </Pressable>
            </View>

            <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
                <View style={styles.content}>
                    {/* Category Selection */}
                    <View style={styles.categorySection}>
                        <Text variant="labelLarge" style={styles.label}>
                            카테고리
                        </Text>
                        <View style={styles.categoryOptions}>
                            {POST_CATEGORIES.map((cat) => (
                                <Pressable
                                    key={cat}
                                    style={[
                                        styles.categoryOption,
                                        category === cat && styles.categoryOptionActive,
                                    ]}
                                    onPress={() => setCategory(cat)}
                                >
                                    <Text
                                        variant="labelMedium"
                                        style={[
                                            styles.categoryOptionText,
                                            category === cat && styles.categoryOptionTextActive,
                                        ]}
                                    >
                                        {cat}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                    {/* Content Input */}
                    <View style={styles.inputSection}>
                        <Text variant="labelLarge" style={styles.label}>
                            내용
                        </Text>
                        <TextInput
                            style={[styles.textInput, styles.contentInput]}
                            placeholder="내용을 입력하세요..."
                            value={content}
                            onChangeText={setContent}
                            multiline
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            </ScrollView>
        </ScreenLayout>
    );
};
