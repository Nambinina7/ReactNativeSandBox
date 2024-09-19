import React from 'react';
import {PhotoItemTitle, Item} from "../../stylesComponents/TextScreenStyles";
import {Thumbnail} from "../../stylesComponents/ImageScreenStyles";

interface PhotoItemProps {
  title: string;
  thumbnailUrl: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ title, thumbnailUrl }) => {
  return (
      <Item>
        <Thumbnail source={{ uri: thumbnailUrl }} />
        <PhotoItemTitle>{title}</PhotoItemTitle>
      </Item>
  );
};

export default PhotoItem;


