const ActivitiesList = [
  {
    name: 'Eklavya',
    cards: [
      {
        imgName: 'activity_eklavya.png',
        name: 'Eklavya',
        sub: "SRA's premier selection process to become a core member. Two rounds: a coding challenge testing technical depth, and an interview evaluating passion for robotics. Selected members work on real projects over 2 months, growing as full-fledged SRA members.",
        blogLink: 'https://eklavya.sravjti.in/',
      },
      {
        imgName: 'activity_opendoor.png',
        name: 'Open Door',
        sub: 'Annual showcase where second-year students present their projects to incoming first-years. An introduction to SRA culture, welcoming new members and providing insight into the innovation and hands-on engineering that defines the community.',
        notionLink:
          'https://deadpan-relative-1b8.notion.site/SRA-VJTI-Eklavya-2025-26a5fe657207813d9cf0d550490cff64',
      },
    ],
  },
  {
    name: 'Seminars',
    cards: [
      {
        imgName: 'activity_inception.png',
        name: 'Inception',
        sub: "SRA's flagship introductory seminar for first-year students. Covers Electronics, IoT, and Mechanics with practical insights into real-world robotic systems. Builds essential prerequisite knowledge for workshops and hands-on projects.",
        notionLink:
          'https://drive.google.com/drive/folders/1_NKatYnyHZbBHTQoK_7MMWsWR7rIZ8mP',
      },
      {
        imgName: 'pixels.jpg',
        name: 'Pixels',
        sub: 'Deep dive into Computer Vision. Learn C++, git, and OpenCV. Design blob detection algorithms to track objects in videos and live camera feeds. Theory meets hands-on implementation for practical robotics skills.',
        githubLink: 'https://github.com/SRA-VJTI/Pixels',
      },
    ],
  },
  {
    name: 'Workshops',
    cards: [
      {
        imgName: 'activity_walle.png',
        name: 'Wall-E',
        sub: 'Line-following and self-balancing with ESP32. Learn PID Control, Communication Protocols, PWM, and RTOS. Build and tune a real robot, applying theory to hardware.',
        githubLink: 'https://github.com/SRA-VJTI/Wall-E',
        youtubeLink: 'https://www.youtube.com/watch?v=-AbwiFBjHl0&t=36s',
      },
      {
        imgName: 'mario_bot.jpg',
        name: 'Mario',
        sub: 'Three-day flagship workshop. Build a ROS-based 3-DOF robotic manipulator. Learn kinematics, actuator control, and real-time hardware-simulation communication with Gazebo and RViz.',
        githubLink: 'https://github.com/SRA-VJTI/MARIO',
        youtubeLink: 'https://www.youtube.com/watch?v=qkdTsRB-te4',
      },
    ],
  },
  {
    name: 'SAC SRA Autosim Challenge',
    shortName: 'SAC',
    imgName: 'activity_sac.png',
    sub: "Exclusive maze-solving competition for second-year students. Navigate obstacles including colorblind paths and object detection. Use all sensors and push software-hardware integration to the limits.",
  },
  {
    name: 'Competitions',
    cards: [
      {
        imgNames: ['sih_hexadecimals.png', 'sih_benzene.png', 'sih_thomas.png'],
        name: 'Smart India Hackathon',
        sub: 'SRA teams excel at SIH. Hexadecimals (Winners, 2024): privacy-first encryption for face recognition. Benzene (Finalist, 2025): Anti-Drone System with signal detection. Thomas (Finalist, 2025): Non-destructive gold assay testing.',
        githubLink: 'https://github.com/badboy1606/anti_drone',
        blogLink: 'https://blog.sravjti.in/2025/12/16/24-karat-magic.html',
      },
      {
        name: 'Hardware Hackathon 2.0',
        sub: "Design sustainable Martian habitat systems. SRA built a multi-sensor rover with custom PCB, ESP32-C3 firmware, and 3D-printed components. Terrain awareness, obstacle detection, and environmental sensing for extreme conditions.",
      },
      {
        imgName: 'hackfusion.jpg',
        name: 'Other Hackathons',
        sub: "Active in prestigious hackathons: HackFusion, KJ Somaiya, HackXlerate. Strong technical expertise and teamwork. Won HackXlerate, showcasing commitment to building impactful solutions.",
      },
    ],
  },
];

export default ActivitiesList;
