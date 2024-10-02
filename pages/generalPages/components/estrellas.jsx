import React from 'react';
import { View, Text } from 'react-native';

const RatingStars = ({ rating }) => {
  return (
    <View style={{ marginTop: 4 }} className="flex-row items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Text key={star} className='text-yellow-500 text-lg'>
          {star <= rating ? '★' : '☆'}
        </Text>
      ))}
      <Text className="text-green-700 text-sm ml-1">{ rating }.0</Text>
    </View>
  );
};

export default RatingStars;