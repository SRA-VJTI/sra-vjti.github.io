const NavbarData = [
  {
    name: 'About Us',
    link: '/#About-us',
  },
  {
    name: 'Activities',
    link: '/activities',
  },
  {
    name: 'Blogs',
    link: 'https://blog.sravjti.in/',
  },
  {
    name: 'Webring',
    link: 'https://sravjti.in/webring/',
  },
  {
    name: 'Projects',
    link: '/projects',
    subMenu: [
      {
        name: 'Eklavya',
        link: '/projects/eklavya/',
      },
      {
        name: 'Ongoing',
        link: '/projects/ongoing/',
      },
    ],
  },
  {
    name: 'Publications',
    link: '/publications',
  },
  {
    name: 'Alumni',
    link: '/teams/alumni',
  },
  {
    name: 'Opensource',
    link: '/teams/opensource',
  },
  {
    name: 'Achievements',
    link: '/achievements',
  },
  {
    name: 'Support Us',
    link: '/sponsors',
    subMenu: [
      {
        name: 'CSR',
        link: '/corporateSupport/',
      },
      {
        name: 'Sponsor us',
        link: '/sponsors',
      },
    ],
  },
  {
    name: 'Startups',
    link: '/startups',
  },
];

export default NavbarData;
