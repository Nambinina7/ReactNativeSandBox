import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface PhotoItemProps {
  title: string;
  thumbnailUrl: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ title, thumbnailUrl }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.thumbnail} source={{ uri: thumbnailUrl }} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
  },
});

export default PhotoItem;
