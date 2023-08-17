/* eslint-disable react/prop-types */

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery =({images=[]}) =>{
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={4} rowHeight={250}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'item.title'}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ImageGallery;

