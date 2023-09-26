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

  const openFullImage = (index: number): void => {
    setFullImageView(index);
  };

  const closeFullImage = (): void => {
    setFullImageView(null);
  };

  const navigateToNextImage = (): void => {
    if (fullImageView !== null && fullImageView < images.length - 1) {
      setFullImageView(fullImageView + 1);
    }
  };

  const navigateToPrevImage = (): void => {
    if (fullImageView !== null && fullImageView > 0) {
      setFullImageView(fullImageView - 1);
    }
  };

  return (
    <Box mt={8}>
      <div
        style={{
          width: '97%',
          backgroundColor: '#000',
          maxWidth: '1200px',
          margin: '0 auto',
          borderRadius: '15px',
          padding: '16px', // Add some spacing on smaller screens
        }}
      >
        <Carousel swipeable={true} showThumbs={false} showArrows={true}>
          {images.map((imageUrl, index) => (
            <div
              key={index}
              onClick={() => openFullImage(index)}
              style={{
                cursor: 'pointer',
              }}
            >
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                style={{
                  width: '100%',
                  cursor: 'pointer',
                  height: '100%', // Adjust the max height as needed
                  maxHeight:'400px',
                  maxWidth:'400px',
                }}
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
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            height: '500px', // Default height for mobile and laptop
            width: '500px', // Default width for mobile and laptop
          }}
        >
          <img
            src={fullImageView !== null ? images[fullImageView] : ''}
            alt="Full Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <IconButton
            onClick={closeFullImage}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: 'red',
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={navigateToPrevImage}
            style={{
              position: 'absolute',
              top: '50%',
              left: '16px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              color: 'white',
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            onClick={navigateToNextImage}
            style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              color: 'white',
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default ImageCarousel;
