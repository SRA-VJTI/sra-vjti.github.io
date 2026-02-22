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
    link: '/alumni',
  },
  {
    name: 'Startups',
    link: '/startups',
  },
  {
    name: 'Opensource',
    link: '/opensource',
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
];

export default NavbarData;
