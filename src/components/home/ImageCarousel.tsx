import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  // Define CSS styles for the Carousel and Images
  const carouselContainerStyles = {
    width: '100%',
    backgroundColor:'#000',
    maxWidth: '1200px', // Set the maximum width as per your design
    margin: '0 auto', // Center the Carousel
  };

  const imageStyles = {
    maxHeight: '600px', // Set the maximum height for the images
    width: 'auto', // Allow the width to adjust to maintain aspect ratio
  };

  return (
    <Box mt={8} >
      <div style={carouselContainerStyles}>
        <Carousel swipeable={true} showThumbs={false} showArrows={true} >
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                style={imageStyles}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default ImageCarousel;
