const ActivitiesList = [
  {
    name: 'Eklavya',
    cards: [
      {
        imgName: 'activity_eklavya.png',
        name: 'Eklavya',
        sub: "Eklavya is SRA's premier selection process — the gateway to becoming a core member of the committee. The journey unfolds in two rigorous rounds: a task-based coding challenge that tests your technical depth and problem-solving instincts, followed by a personal interview to evaluate your curiosity, passion, and commitment to robotics. Selected participants are allocated real ongoing projects, and the 2-month Eklavya journey begins — where you work, learn, build, and grow as full-fledged members of the SRA ecosystem. It is more than a recruitment drive; it is the beginning of your journey with SRA.",
        notionLink: 'https://deadpan-relative-1b8.notion.site/SRA-VJTI-Eklavya-2025-26a5fe657207813d9cf0d550490cff64',
        blogLink: 'https://eklavya.sravjti.in/',
      },
      {
        imgName: 'activity_opendoor.png',
        name: 'Open Door',
        sub: "Every year, SRA hosts Open Door — an annual showcase where second-year students present the projects they have built over the past two months to the incoming first-year batch. The event serves as an introduction to the culture of robotics and automation at SRA, formally welcoming the new cohort into the community. Open to all, it provides students an opportunity to explore ongoing projects, interact with teams, and gain firsthand insight into the kind of innovation and hands-on engineering that defines life at SRA. It is a celebration of growth, ingenuity, and the talent that fuels our community.",
      },
    ],
  },
  {
    name: 'Seminars',
    cards: [
      {
        imgName: 'activity_inception.png',
        name: 'Inception',
        sub: "Inception is SRA's flagship introductory seminar designed to equip first-year students with a strong foundation in robotics and automation. The session covers core concepts in Electronics, IoT, and Mechanics, along with practical insights into how these domains integrate within real-world robotic systems. Serving as a structured onboarding experience, Inception builds the essential prerequisite knowledge required for upcoming workshops and hands-on projects — ensuring students are confident, curious, and well-prepared to dive into advanced technical work at SRA.",
        notionLink: 'https://drive.google.com/drive/folders/1_NKatYnyHZbBHTQoK_7MMWsWR7rIZ8mP',
      },
      {
        imgName: 'pixels.jpg',
        name: 'Pixels',
        sub: "Pixels is a deep dive into the field of Computer Vision. The workshop gives participants a foundational understanding of vision-based systems and their real-world applications. Students begin with the basics of C++ and git, then progressively move into image processing and computer vision using the OpenCV library. The highlight of the workshop is designing their own blob detection algorithm — enabling them to track objects in videos and live camera feeds. Pixels bridges theory with hands-on implementation, giving students practical skills that directly feed into robotics and automation work.",
        githubLink: 'https://github.com/SRA-VJTI/Pixels-Seminar',
      },
    ],
  },
  {
    name: 'Workshops',
    cards: [
      {
        imgName: 'activity_walle.png',
        name: 'Wall-E',
        sub: "Wall-E focuses on line-following and self-balancing using the ESP32 — a powerful microcontroller with built-in Wi-Fi and BLE support, widely applied in IoT, RF, and embedded systems. The workshop covers essential concepts including PID Control, Embedded Communication Protocols, PWM, Filters, and RTOS. First-year students gain hands-on experience building and tuning a real robot, developing a solid foundational understanding of control systems and embedded hardware. Wall-E is where theory meets hardware for the very first time.",
        githubLink: 'https://github.com/SRA-VJTI/Wall-E',
        youtubeLink: 'https://www.youtube.com/watch?v=-AbwiFBjHl0&t=36s',
      },
      {
        imgName: 'mario_bot.jpg',
        name: 'Mario',
        sub: "MARIO is a three-day flagship workshop and the final technical workshop for first-year students at SRA. Participants build and control a ROS-based 3-DOF robotic manipulator, integrating embedded systems with ROS2 workflows. Students gain practical exposure to forward and inverse kinematics, actuator control, and real-time communication between hardware and simulation environments like Gazebo and RViz. MARIO serves as a culmination of foundational training, bridging theory with real-world robotic system implementation and giving students a taste of professional-grade robotics development.",
        githubLink: 'https://github.com/SRA-VJTI/MARIO',
        youtubeLink: 'https://www.youtube.com/watch?v=qkdTsRB-te4',
      },
    ],
  },
  {
    name: 'SAC SRA Autosim Challenge',
    shortName: 'SAC',
    imgName: 'activity_sac.png',
    sub: "SRA introduces its exclusive maze-solving competition tailored for second-year students, presenting them with a distinctive and challenging maze to navigate and conquer. The maze encompasses a variety of obstacles including colorblind paths, object detection challenges, and intricate junctions that demand strategic, algorithmic thinking. Each challenge requires a well-reasoned approach for successful resolution. The robot commences its journey from a designated starting point, navigating through diverse junctions and tackling twists and turns strategically tuned to the bot's capabilities. Participants are encouraged to leverage the full suite of available sensors and push the limits of their software and hardware integration skills.",
  },
  {
    name: 'Competitions',
    cards: [
      {
        imgNames: ['sih_hexadecimals.png', 'sih_benzene.png', 'sih_thomas.png'],
        name: 'Smart India Hackathon',
        sub: "SRA teams have consistently excelled at the Smart India Hackathon. Team Hexadecimals (Winners, SIH 2024) designed a privacy-first encryption architecture for large-scale face recognition systems, deploying true end-to-end encryption across biometric pipelines under a zero-trust security model — earning internship offers from UIDAI and the Aadhaar Department. Team Benzene (Finalist, SIH 2025) built a functional Anti-Drone System prototype using SDR-based signal detection and ESP32-powered Wi-Fi jamming and GNSS spoofing countermeasures. Team Thomas and Friends (Finalist, SIH 2025) replaced destructive gold assay testing with a non-destructive electrochemical method, using voltage sweep curves as metal fingerprints to accurately estimate gold purity without damaging the sample.",
        githubLink: 'https://github.com/badboy1606/anti_drone',
        blogLink: 'https://blog.sravjti.in/2025/12/16/24-karat-magic.html',
      },
      {
        name: 'Hardware Hackathon 2.0',
        sub: "At Hardware Hackathon 2.0, the challenge was to design integrated hardware systems transforming a basic Martian outpost into a sustainable, livable habitat — addressing life support, environmental monitoring, and safety for long-duration missions on Mars. SRA's team developed a multi-sensor autonomous rover designed for exploration and monitoring in Martian-like environments. The system integrates custom PCB design, ESP32-C3 firmware with OTA updates and wireless communication, and 3D-printed mechanical components to deliver terrain awareness, obstacle detection, and environmental sensing. The solution showcases robust hardware architecture and firmware coordination optimized for extreme, resource-constrained conditions.",
      },
      {
        imgName: 'hackfusion.jpg',
        name: 'Other Hackathons',
        sub: "The SRA Club is an active and innovation-driven student community that has consistently participated in prestigious intercollegiate hackathons across Mumbai, including SPIT HackFusion, the KJ Somaiya Hackathon, and VJTI's COC-organized HackXlerate. Demonstrating strong technical expertise, creative problem-solving, and outstanding teamwork, our club proudly secured a win at HackXlerate — showcasing our commitment to building impactful solutions under pressure and competing at the highest levels of student innovation.",
      },
    ],
  },
];

export default ActivitiesList;
