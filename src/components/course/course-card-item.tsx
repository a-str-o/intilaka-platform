import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import { Course } from '@/interfaces/course'
import Link from 'next/link';
import Button from '@mui/material/Button';

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          
          <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5"
           sx={{ mb: 2, height: 30, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              {item.description}
          </Typography>
          
          {/* <Link href={`/courses/${item.id}`} passHref >
            <Button variant="contained" color="primary"  sx={{ mb: 2, height: 30, marginTop:'10px',fontSize: '1rem' }}>
              View More
            </Button>
          </Link> */}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-course" value={5} max={5}
             sx={{ color: '#ffce31', mr: 1 }} readOnly />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CourseCardItem
