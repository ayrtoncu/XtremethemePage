import { connect } from 'frontity'
import React from 'react';
import iconOpen from '../Icons/menuicons/expand_more_white_24dp.svg';
import iconClose from '../Icons/menuicons/expand_less_white_24dp.svg';
const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    // icon: <AiIcons.AiFillHome />,
    iconClosed: <iconClose/>,
    iconOpened: <iconOpen/>,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    // icon: <IoIcons.IoIosPaper />,
    iconClosed: <iconClose/>,
    iconOpened: <iconOpen/>,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    // icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/team',
    // icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    // icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <iconClose/>,
    iconOpened: <iconOpen/>,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />
  }
]
export default SidebarData;