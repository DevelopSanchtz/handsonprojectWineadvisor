import React, { useEffect } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import UserListCard from './UserListCard';
import { User } from '../interface/userInterface';

interface Props {
    user: User;
}

const AnimatedCard = ({ user }: Props) => {
    const { opacity, position, enterAnimation } = useAnimation();

    useEffect(() => {
        enterAnimation();
    }, []);

    return (
        <Animated.View
            style={{
                opacity,
                transform: [{ translateY: position }],
            }}
        >
            <UserListCard user={user} />
        </Animated.View>
    );
};

export default AnimatedCard;