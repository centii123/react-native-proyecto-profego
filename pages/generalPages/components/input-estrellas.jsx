import React, { useState } from 'react';
import { View, Text } from 'react-native';

const StarInput = ({ onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleStarPress = (puntuacion) => {
        setRating(puntuacion);
        onRatingChange(puntuacion);
    };

    return (
        <View className="flex-row items-center mt-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <Text
                    className="text-yellow-500 text-4xl cursor-pointer"
                    key={star}
                    onPress={() => handleStarPress(star)}
                >
                    {star <= rating ? '★' : '☆'}
                </Text>
            ))}
            <Text className="text-green-700 text-sm ml-2">{rating}.0</Text>
        </View>
    );
};

export default StarInput;