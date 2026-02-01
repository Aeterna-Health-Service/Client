import React, { useState } from 'react';
import { View, ScrollView, Pressable, TextInput } from 'react-native';
import { useAtomValue } from 'jotai';
import { Text, ScreenLayout } from '../../components';
import { styles } from './CreatePostScreen.styles';
import type { CommunityStackScreenProps, ProfileStackScreenProps } from '../../navigation/types';
import { useCreatePostMutation, useUpdatePostMutation } from '../../services/post/usePostMutation';
import { categoryToBoardType, type TFrontendCategory } from '../../services/post/utils';
import type { TBoardType } from '../../services/post/types';
import { userIdAtom } from '../../store/authAtom';

export type CreatePostScreenProps =
    | CommunityStackScreenProps<'CreatePost'>
    | ProfileStackScreenProps<'EditPost'>;

type TPostCategory = '운동꿀팁' | '식단추천' | '자유게시판';
const POST_CATEGORIES: TPostCategory[] = ['운동꿀팁', '식단추천', '자유게시판'];

/**
 * 새 게시글 작성 화면
 * @author 김동현
 */
export const CreatePostScreen = ({ navigation, route }: CreatePostScreenProps) => {
    const initialCategory = route.params?.category as TPostCategory | undefined;
    const initialContent = (route.params as any)?.initialContent;
    const mode = (route.params as any)?.mode;
    const editPostId = (route.params as any)?.postId;
    const isEditMode = mode === 'edit';

    const userId = useAtomValue(userIdAtom);

    const [category, setCategory] = useState<TPostCategory | null>(
        initialCategory && POST_CATEGORIES.includes(initialCategory as TPostCategory)
            ? (initialCategory as TPostCategory)
            : null
    );
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(initialContent || '');

    const createMutation = useCreatePostMutation();
    const updateMutation = useUpdatePostMutation();

    const isValid = category !== null && title.trim().length > 0 && content.trim().length > 0;
    const isSubmitting = createMutation.isPending || updateMutation.isPending;

    const handleSubmit = () => {
        if (!isValid || !userId) return;

        const boardType = categoryToBoardType(category as TFrontendCategory) as TBoardType;

        if (isEditMode && editPostId) {
            updateMutation.mutate(
                {
                    boardType,
                    postId: Number(editPostId),
                    data: {
                        userId,
                        title: title.trim(),
                        content: content.trim(),
                    },
                },
                {
                    onSuccess: () => {
                        navigation.goBack();
                    },
                }
            );
        } else {
            createMutation.mutate(
                {
                    boardType,
                    data: {
                        userId,
                        title: title.trim(),
                        content: content.trim(),
                    },
                },
                {
                    onSuccess: () => {
                        navigation.goBack();
                    },
                }
            );
        }
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
                    style={[styles.submitButton, (!isValid || isSubmitting) && styles.submitButtonDisabled]}
                    onPress={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    <Text
                        style={[
                            styles.submitButtonText,
                            (!isValid || isSubmitting) && styles.submitButtonTextDisabled,
                        ]}
                    >
                        {isSubmitting ? '...' : isEditMode ? '수정' : '등록'}
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

                    {/* Title Input */}
                    <View style={styles.inputSection}>
                        <Text variant="labelLarge" style={styles.label}>
                            제목
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="제목을 입력하세요..."
                            value={title}
                            onChangeText={setTitle}
                            maxLength={100}
                        />
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
