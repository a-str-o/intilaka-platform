import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'
import LanguageChangePopup from './LanguageChangePopup.js'; 


export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/intilaka_marrakech?fbclid=IwAR0VCTN1An8wqsAc_pj584L_gMH1HxLHHTOVTGa13WDrhZhvCtNZJDt6kuo',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@associationintilaka1377',
    icon: '/images/icons/youtube.svg',
  },
  {
    name: 'Twitter',
    link: 'https://web.facebook.com/association.intilaka.marrakech',
    icon: '/images/icons/twitter.svg',
  }
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'secondary.main',
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + 'icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <LanguageChangePopup />

    <Box
      component="ul"
      sx={{
        display: 'flex',
        m: 0,
        p: 0,
        lineHeight: 0,
        borderRadius: 3,
        listStyle: 'none',
        ml: -1, 
      }}
    >
     
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />
        })}
      </Box>
    </Box>
  )
}

export default SocialLinks
