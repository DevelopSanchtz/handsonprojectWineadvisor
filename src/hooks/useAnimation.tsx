import { useRef } from 'react';
import { Animated } from 'react-native';

const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;

    const enterAnimation = (initPosition: number = -100, duration: number = 300) => {
        opacity.setValue(0);
        position.setValue(initPosition);
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration,
                useNativeDriver: true,
            }),
            Animated.timing(position, {
                toValue: 0,
                duration,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return {
        opacity,
        position,
        enterAnimation,
    };
};

export default useAnimation;