import React from 'react';
import { View, FlatList, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../../components';
import { styles } from './MyPostsScreen.styles';
import type { ProfileStackScreenProps } from '../../navigation/types';

export type MyPostsScreenProps = ProfileStackScreenProps<'MyPosts'>;

// 내 게시글 타입
type TMyPost = {
    id: string;
    type: string;
    category: string;
    content: string;
    likes: number;
    comments: number;
    time: string;
};

// Mock 데이터
const mockMyPosts: TMyPost[] = [
    {
        id: '1',
        type: '오운완',
        category: '운동꿀팁',
        content: '오늘 가슴 운동 완료! 💪 벤치프레스 5세트 해냈습니다.',
        likes: 24,
        comments: 3,
        time: '2시간 전',
    },
    {
        id: '2',
        type: '식단공유',
        category: '식단추천',
        content: '다이어트 2주차 식단 공유합니다! 고단백 저탄수화물 위주로 진행 중이에요.',
        likes: 45,
        comments: 12,
        time: '1일 전',
    },
    {
        id: '3',
        type: '질문',
        category: '자유게시판',
        content: '런닝머신 vs 야외 러닝 어떤게 더 효과적일까요?',
        likes: 18,
        comments: 22,
        time: '3일 전',
    },
];

/**
 * 내가 작성한 게시글 화면
 * 게시글 목록 + 수정/삭제 기능
 * @author 김동현
 */
export const MyPostsScreen = ({ navigation }: MyPostsScreenProps) => {
    const [posts, setPosts] = React.useState<TMyPost[]>(mockMyPosts);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleEditPost = (postId: string) => {
        // 현재 포스트 정보 찾기
        const post = posts.find(p => p.id === postId);

        // 프로필 스택의 EditPost로 이동 (편집 모드)
        navigation.navigate('EditPost', {
            postId,
            category: post?.category,
            initialContent: post?.content,
            mode: 'edit'
        });
    };

    const handleDeletePost = (postId: string) => {
        Alert.alert(
            '게시글 삭제',
            '정말 이 게시글을 삭제하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                {
                    text: '삭제',
                    style: 'destructive',
                    onPress: () => {
                        setPosts((prev) => prev.filter((post) => post.id !== postId));
                    },
                },
            ]
        );
    };

    const renderPost = ({ item }: { item: TMyPost }) => (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <View style={styles.postBadge}>
                    <Text style={styles.postBadgeText}>{item.type}</Text>
                </View>
                <Text style={styles.postCategory}>{item.category}</Text>
                <Text style={styles.postTime}>{item.time}</Text>
            </View>

            <Text style={styles.postContent} numberOfLines={2}>
                {item.content}
            </Text>

            <View style={styles.postFooter}>
                <View style={styles.postStats}>
                    <Text style={styles.postStat}>❤️ {item.likes}</Text>
                    <Text style={styles.postStat}>💬 {item.comments}</Text>
                </View>

                <View style={styles.postActions}>
                    <Pressable
                        style={styles.actionBtn}
                        onPress={() => handleEditPost(item.id)}
                    >
                        <Text style={styles.editBtnText}>수정</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.actionBtn, styles.deleteBtnStyle]}
                        onPress={() => handleDeletePost(item.id)}
                    >
                        <Text style={styles.deleteBtnText}>삭제</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={handleGoBack} style={styles.backButton}>
                    <Text style={styles.backText}>← 뒤로</Text>
                </Pressable>
                <Text variant="h2" style={styles.headerTitle}>
                    내가 작성한 게시글
                </Text>
                <View style={styles.headerSpacer} />
            </View>

            {/* Post List */}
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>작성한 게시글이 없습니다.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};
