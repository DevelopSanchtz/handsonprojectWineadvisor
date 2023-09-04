import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import useUsers from '../hooks/useUsers'
import UserListCard from './UserListCard';
import AnimatedCard from './AnimatedCard';

const UserList = () => {
    const { userState, isLoading, loadMore, hasMore } = useUsers()

    return (
        <FlatList
            data = {userState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <AnimatedCard 
                  key={item.id}
                  user = {item}
              />
            )}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5} 
            ListFooterComponent={() => (isLoading && hasMore) ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            showsVerticalScrollIndicator = {false}
        />
    )
}

export default UserList