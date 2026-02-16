const NavbarData = [
  {
    name: 'Our Lab',
    link: '/', // Corporate page will be added
    subMenu: [
      {
        name: 'About Us',
        link: '/#About-us',
      },
      {
        name: 'Activities',
        link: '/activities',
      },
      // {
      //   name: 'Exhibition',
      //   link: '/', // Coming Up Soon
      // },
      {
        name: 'Internship Diaries',
        link: '/internships',
      },
      {
        name: 'Blogs',
        link: 'https://blog.sravjti.in/',
      },
    ],
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
    name: 'Teams',
    link: '/teams',
    subMenu: [
      {
        name: 'Faculty Incharge',
        link: '/teams/teacherincharge/',
      },
      {
        name: 'Current',
        link: '/teams/current/',
      },
      {
        name: 'Alumni',
        link: '/teams/alumni/',
      },
    ],
  },
  {
    name: 'Achievements',
    link: '/achievements',
  },
  {
    name: 'Support Us',
    link: '/sponsors', // A new page with two sections will be presented soon
    subMenu: [
      {
        name: 'CSR',
        link: '/corporateSupport/', // CSR links will be added soon
      },
      {
        name: 'Sponsor us',
        link: '/sponsors',
      },
    ],
  },
  {
    name: 'Contact Us',
    link: '/contactus',
  },
  {
    name: 'Startups',
    link: '/startups',
  },
];

export default NavbarData;
