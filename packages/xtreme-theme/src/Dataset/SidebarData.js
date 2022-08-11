import { connect } from 'frontity'
import React from 'react';
import iconOpen from '../Icons/menuicons/expand_more_white_24dp.svg';
import iconClose from '../Icons/menuicons/expand_less_white_24dp.svg';

const IconClose = () => {
  return (
    <img src={ iconOpen} />
  )
}
const IconOpen = () => {
  return (
    <img src={ iconClose} />
  )
}
const SidebarData = [
  {
    title: 'Inca Trail',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen/>,
    subNav:[
      {
        title: 'Short Inca Trail',
        path: '/short-inca-trail-machu-picchu/',
      },
      {
        title: 'Inca Trail to Machu Picchu 4 Days',
        path:'/inca-trail-trek-machu-picchu-4days',
      },
      {
        title: 'Salkantay Trek - Inca Trail Machu Picchu 6 Days',
        path:'/salkantay-trekking-inca-trail-hike-machu-picchu-6day/',
      },
    ],
  },
  {
    title: 'Alternative Treks',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen/>,
    subNav: [
      {},
      {},
      {},
      {},
      {},
    ],
  },
  {
    title: 'Dayli Tours',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen/>,
    subNav: [
      {
        title: 'Humantay Lake',
        path: '/humantay-lake-1-day/',
      },
      {
        title: 'The Rainbow Mountain',
        path:'/rainbow-mountain-vinicunca/',
      },
      {
        title: 'Sacred Valley Tour Full Day',
        path:'/sacred-valley-tour/',
      },
      {
        title: 'Qeswachaka Inca Bridge',
        path:'/inca-bridge-qeswachaka/',
      },
      {
        title: 'Waqrapukara',
        path:'/waqrapukara-trek/',
      },
      {
        title: 'Machu Picchu Full Day Tour',
        path:'/machu-picchu-full-day-tour/',
      },
      {
        title: 'Machu Picchu With Overnight',
        path: '/machu-picchu-with-overnight/',
      },
      {
        title: 'Machu Picchu and Sacred Valley 2 Days',
        path:'/machu-picchu-and-sacred-valley-tours/'
      },
    ],
  },
  {
    title: 'Vacation Tours',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen/>,
    subNav: [
      {
        title: 'Cusco Traditional 6 Days',
        path:'#'
      },
      {
        title: 'Cusco Aventure 5 Days',
        path:'#',
      },
      {
        title: 'Cusco Puno Traditional 8 Days',
        path: '/cusco-puno-8-days/',
      },
      {
        title: 'Arequipa Puno Cusco 9 Days',
        path:'#',
      },
      {
        title: 'Peru Complete 13 Days',
        path:'#',
      },
      {
        title: 'Arequipa Colca Canyon',
        path:'#'
      },
    ],
  },
  {
    title: 'Manu',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen/>,
    subNav: [
      {
      },
      {},
      {},
    ],
  },
  {
    title: 'About Us',
    iconClosed: <IconClose/>,
    iconOpened: <IconOpen />,
    subNav: [
      {},
      {},
      {},
    ]
  },
]
export default SidebarData;