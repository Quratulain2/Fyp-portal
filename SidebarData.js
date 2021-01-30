import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Upload Record',
    path: '/upload',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/project',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Assignment',
    path: '/assignment',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Grade',
    path: '/grade',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Maintenance',
    path: '/maintenance',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
// import * as RiIcons from 'react-icons/ri';

// export const SidebarData = [
//   {
//     title: 'Profile',
//     path: '/Profile',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Upload Record',
//         path: '/Upload',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Grade',
//         path: '/Grade',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Maintenance',
//     path: '/Change_pwd',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Products',
//     path: '/products',
//     icon: <FaIcons.FaCartPlus />
//   },
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />
//   }
// ];