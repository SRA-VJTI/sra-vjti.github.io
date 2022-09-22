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
        photo: '/static/images/talks/omkar.jpeg',
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
        photo: '/static/images/talks/vedant.png',
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
      {
        photo: '/static/images/talks/shreyas.png',
        title: 'Session on experience with Wasmedge Organisation',
        author: 'Shreyas Atre',
        content: require('./SRA-talks/2022/2022_shreyas_wasmedge.md').default,
      },
      {
        photo: '/static/images/talks/chinmay.png',
        title: 'Session on PCB Design',
        author: 'Chinmay Lonkar',
        content: require('./SRA-talks/2022/2022_chinmay_pcb_design.md').default,
      },
      {
        photo: '/static/images/talks/chinmay.png',
        title: 'Session on BioAmp EXG',
        author: 'Chinmay Lonkar, Moteen Shah',
        content: require('./SRA-talks/2022/2022_chinmay_moteen_bioamp.md').default,
      },
      {
        photo: '/static/images/talks/anushree_epfl.png',
        title: 'Neuromechanical simulation of human locomotion',
        author: 'Anushree Sabnis',
        content: require('./SRA-talks/2022/2022_anushree_epfl.md').default,
      },
    ],
  },
];
export default TalksList;
