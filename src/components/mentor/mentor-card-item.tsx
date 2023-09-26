import React, { FC, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Mentor } from '@/interfaces/mentor';

interface Props {
  item: Mentor;
}

const MentorCardItem: FC<Props> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyles = {
    filter: isHovered ? 'none' : 'grayscale(100%)', // Apply grayscale filter when not hovered
    transition: 'filter 0.3s',
  };

  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          boxShadow: isHovered ? '2px 2px 5px rgba(0, 0, 0, 0.2)' : 'none', // Apply box shadow when hovered
          transition: 'box-shadow 0.3s',
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={600} height={427} alt={'Mentor ' + item.id} style={imageStyles} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={item.company?.logo} alt={item.company?.name + ' logo'} style={{ height: 40, verticalAlign: 'middle' }} />
            <Typography sx={{ ml: 1, color: 'text.secondary' }}>{item.category}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MentorCardItem;
