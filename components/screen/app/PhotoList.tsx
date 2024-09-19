import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PhotoItem from './PhotoItem.tsx';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoList: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }: { item: Photo }) => (
    <PhotoItem title={item.title} thumbnailUrl={item.thumbnailUrl} />
  );

  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
  },
});

export default PhotoList;
