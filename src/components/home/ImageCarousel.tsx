import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Modal, Button, Backdrop, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [fullImageView, setFullImageView] = useState<number | null>(null);

  // Define CSS styles for the Carousel and Images
  const carouselContainerStyles = {
    width: '97%',
    backgroundColor: '#000',
    maxWidth: '1200px', // Set the maximum width as per your design
    margin: '0 auto', // Center the Carousel
    borderRadius: '15px',
  };

  const imageStyles = {
    maxHeight: '600px', // Set the maximum height for the images
    width: 'auto', // Allow the width to adjust to maintain aspect ratio
    cursor: 'pointer', // Add a pointer cursor to indicate clickability
  };

  // Responsive styles for smaller screens (e.g., mobile devices)
  const responsiveCarouselContainerStyles = {
    ...carouselContainerStyles,
    padding: '16px', // Add some spacing on smaller screens
  };

  const responsiveImageStyles = {
    ...imageStyles,
    maxHeight: '300px', // Reduce the image height on smaller screens
  };

  const openFullImage = (index: number) : void => {
    setFullImageView(index);
  };

  const closeFullImage = () : void => {
    setFullImageView(null);
  };

  const navigateToNextImage = () : void => {
    if (fullImageView !== null && fullImageView < images.length - 1) {
      setFullImageView(fullImageView + 1);
    }
  };

  const navigateToPrevImage = () : void => {
    if (fullImageView !== null && fullImageView > 0) {
      setFullImageView(fullImageView - 1);
    }
  };

  return (
    <Box mt={8}>
      <div style={responsiveCarouselContainerStyles}>
        <Carousel swipeable={true} showThumbs={false} showArrows={true}>
          {images.map((imageUrl, index) => (
            <div key={index} onClick={() => openFullImage(index)}>
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                style={responsiveImageStyles}
                
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Modal
        open={fullImageView !== null}
        onClose={closeFullImage}
        aria-labelledby="full-image-modal"
        BackdropComponent={Backdrop}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            maxHeight: '900px',
          }}
        >
          <img
            src={fullImageView !== null ? images[fullImageView] : ''}
            alt="Full Image"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <IconButton
            onClick={closeFullImage}
            sx={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'red' }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={navigateToPrevImage}
            sx={{ position: 'absolute', top: '50%', left: '16px', backgroundColor: 'rgba(0, 0, 0,1)',color:'white' }}    >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={navigateToNextImage}
            sx={{ position: 'absolute', top: '50%', right: '16px', backgroundColor: 'rgba(0, 0, 0, 1)',color:'white' }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageCarousel;
