const TalksList = [
  {
    year: '2022',
    talks: [
      {
        photo: '/static/images/talks/rtos.png',
        title: 'Session on RTOS',
        author: 'Gautam Agrawal',
        content: require('./SRA-talks/2022/2022_gautam_rtos.md').default,
      },
      {
        photo: '/static/images/talks/nilay.jpeg',
        title: 'Talk on Robotics, Embedded, Automotive Systems',
        author: 'Nilay Sheth',
        content: require('./SRA-talks/2022/2022_nilay_session.md').default,
      },
      {
        photo: '/static/images/talks/fpga.png',
        title: 'Session on FPGA and Basics of Verilog',
        author: 'Premraj Jadhav, Om sheladia, Siddesh Patil',
        content: require('./SRA-talks/2022/2022_premraj_fpga.md').default,
      },
      {
        photo: '/static/images/talks/ml.jpg',
        title: 'Intro to(ML,DL,RL) and their applications in Robotics',
        author: 'Neel Shah and Himanshu Chougule',
        content: require('./SRA-talks/2022/2022_neel_himanshu_ml.md').default,
      },
      {
        photo: '/static/images/blog/OmkarB.jpg',
        title: 'Session on GSOC experience with Beagleboard',
        author: 'Omkar Bhilare',
        content: require('./SRA-talks/2022/2022_omkar_beagleboard.md').default,
      },
      {
        photo: '/static/images/talks/nerf.png',
        title: 'Session on Neural Radiance Fields',
        author: 'Saurabh Nair',
        content: require('./SRA-talks/2022/2022_saurabh_neural_fields.md')
          .default,
      },
      {
        photo: '/static/images/blog/Vedant.jpg',
        title: 'Session on GSOC experience with Libcamera',
        author: 'Vedant Paranjape',
        content: require('./SRA-talks/2022/2022_vedant_libcamera.md').default,
      },
      {
        photo: '/static/images/Team/Abhinav.jpg',
        title: 'Talk on Leaf Classification(Image processing ML framework)',
        author: 'Abhinav Venkatadri',
        content: require('./SRA-talks/2022/2022_vedant_libcamera.md').default,
      },
    ],
  },
];
export default TalksList;
