---
# Events page — Eklavya, Seminars, Workshops, SAC.
#
# To add an event:           append an entry to `events:`.
# To change section order:   reorder `categoryOrder:` below.
# To swap an event image:    drop the new image in public/events/
#                            and update the `image:` field.
#
# Valid `category:` values: Eklavya, Seminar, Workshop, SAC.
# To introduce a new category, also add it to `categoryOrder:`.
#
# Link fields (github, notion, youtube, blog) are all optional.

eyebrow: Activities
title: Events
desc: 'The programs, workshops, and competitions that define the SRA experience.'
categoryOrder:
  - Eklavya
  - Seminar
  - Workshop
  - SAC
events:
  - name: Eklavya
    category: Eklavya
    image: /events/eklavya.png
    notion: 'https://deadpan-relative-1b8.notion.site/SRA-VJTI-Eklavya-2025-26a5fe657207813d9cf0d550490cff64'
    blog: 'https://eklavya.sravjti.in/'
    order: 1
    description: >-
      SRA's premier selection process to become a core member. Two rounds: a coding challenge testing technical depth, and an interview evaluating passion for robotics. Selected members work on real
      projects over 2 months, growing as full-fledged SRA members.
  - name: Open Door
    category: Eklavya
    image: /events/open-door.png
    order: 2
    description: >-
      Annual showcase where second-year students present their projects to incoming first-years. An introduction to SRA culture, welcoming new members and providing insight into the innovation and
      hands-on engineering that defines the community.
  - name: Inception
    category: Seminar
    image: /events/inception.png
    notion: 'https://drive.google.com/drive/folders/1_NKatYnyHZbBHTQoK_7MMWsWR7rIZ8mP'
    order: 3
    description: >-
      SRA's flagship introductory seminar for first-year students. Covers Electronics, IoT, and Mechanics with practical insights into real-world robotic systems. Builds essential prerequisite
      knowledge for workshops and hands-on projects.
  - name: Pixels
    category: Seminar
    image: /events/pixels.jpg
    github: 'https://github.com/SRA-VJTI/Pixels'
    order: 4
    description: >-
      Deep dive into Computer Vision. Learn C++, git, and OpenCV. Design blob detection algorithms to track objects in videos and live camera feeds. Theory meets hands-on implementation for practical
      robotics skills.
  - name: Wall-E
    category: Workshop
    image: /events/wall-e.jpg
    github: 'https://github.com/SRA-VJTI/Wall-E'
    youtube: 'https://www.youtube.com/watch?v=-AbwiFBjHl0&t=36s'
    order: 5
    description: >-
      Line-following and self-balancing with ESP32. Learn PID Control, Communication Protocols, PWM, and RTOS. Build and tune a real robot, applying theory to hardware.
  - name: MARIO
    category: Workshop
    image: /events/mario.jpg
    github: 'https://github.com/SRA-VJTI/MARIO'
    youtube: 'https://www.youtube.com/watch?v=qkdTsRB-te4'
    order: 6
    description: >-
      Three-day flagship workshop. Build a ROS-based 3-DOF robotic manipulator. Learn kinematics, actuator control, and real-time hardware-simulation communication with Gazebo and RViz.
  - name: SAC — SRA Autosim Challenge
    category: SAC
    image: /events/sac.png
    order: 7
    description: >-
      Exclusive maze-solving competition for second-year students. Navigate obstacles including colorblind paths and object detection. Use all sensors and push software-hardware integration to the
      limits.
---
