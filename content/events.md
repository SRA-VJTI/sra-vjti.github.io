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
      SRA's premier selection process — the gateway to becoming a core member of the committee. Two rigorous rounds: a task-based coding challenge, followed by a personal interview. Selected
      participants are allocated real ongoing projects and begin a 2-month mentorship journey as full-fledged members of the SRA ecosystem.
  - name: Open Door
    category: Eklavya
    image: /events/open-door.png
    order: 2
    description: >-
      An annual showcase where second-year students present the projects they have built over the past two months to the incoming first-year batch. Open to all — it provides students an opportunity to
      explore ongoing projects, interact with teams, and gain firsthand insight into the kind of innovation that defines life at SRA.
  - name: Inception
    category: Seminar
    image: /events/inception.png
    notion: 'https://drive.google.com/drive/folders/1_NKatYnyHZbBHTQoK_7MMWsWR7rIZ8mP'
    order: 3
    description: >-
      SRA's flagship introductory seminar for first-year students. Covers core concepts in Electronics, IoT, and Mechanics — building the essential prerequisite knowledge required for upcoming
      workshops and hands-on projects.
  - name: Pixels
    category: Seminar
    image: /events/pixels.jpg
    github: 'https://github.com/SRA-VJTI/Pixels-Seminar'
    order: 4
    description: >-
      A deep dive into Computer Vision. Students progress from C++ and Git basics into image processing with OpenCV, culminating in building their own blob detection algorithm to track objects in live
      camera feeds.
  - name: Wall-E
    category: Workshop
    image: /events/wall-e.jpg
    github: 'https://github.com/SRA-VJTI/Wall-E'
    youtube: 'https://www.youtube.com/watch?v=-AbwiFBjHl0&t=36s'
    order: 5
    description: >-
      Line-following and self-balancing using the ESP32. Covers PID Control, Embedded Communication Protocols, PWM, Filters, and RTOS. First-year students build and tune a real robot — where theory
      meets hardware for the very first time.
  - name: MARIO
    category: Workshop
    image: /events/mario.jpg
    github: 'https://github.com/SRA-VJTI/MARIO'
    youtube: 'https://www.youtube.com/watch?v=qkdTsRB-te4'
    order: 6
    description: >-
      A three-day flagship workshop and the final technical workshop for first-year students. Participants build and control a ROS-based 3-DOF robotic manipulator, gaining hands-on exposure to forward
      and inverse kinematics, actuator control, and real-time communication with Gazebo and RViz.
  - name: SAC — SRA Autosim Challenge
    category: SAC
    image: /events/sac.png
    order: 7
    description: >-
      SRA's exclusive maze-solving competition for second-year students. The maze includes colorblind paths, object detection challenges, and intricate junctions requiring strategic, algorithmic
      thinking. Participants leverage the full suite of available sensors and push the limits of their software and hardware integration skills.
---
