// To add your 3D model, upload it on https://p3d.in/ and add the embed link under modelLink

const OngoingProjectsData = [
  {
    imgName: 'synapse32.jpeg',
    name: 'Synapse32',
    sub: (
      <>
        Synapse32 is an ambitious and innovative project spearheaded by SRA,
        focused on the design, verification, and implementation of a RISC-V
        based CPU using Verilog HDL. Our goal is to develop a fully functional
        CPU core that we will initially deploy on FPGA platforms, with future
        plans to evolve it into a robust, high-performance softcore IP for
        Xilinx boards. Looking ahead, we also plan to enhance Synapse32 to a
        level where it can support more complex operations, including the
        capability to run Linux. This would demonstrate the core's ability to
        handle sophisticated software environments and expand its potential
        applications.
      </>
    ),
    githubLink: 'https://github.com/SRA-VJTI/synapse32',
  },

  {
    name: 'EEG Bionic Arm',
    sub: (
      <>
        The Society of Robotics and Automation at VJTI is developing a bionic
        hand controlled through brain signals. Using electroencephalography
        (EEG), users can operate the 3D-printed prosthetic hand through neural
        commands, offering a revolutionary solution for amputees.
        <br />
        The project integrates imitation learning, where the hand learns natural
        movements by observing human gestures, and reinforcement learning (RL)
        to optimize grip patterns and adapt to different objects. EEG sensors
        capture brain activity, which is processed to decode motor intentions
        and translate them into precise hand movements.
        <br />
        This fusion of neurotechnology, machine learning, and advanced
        fabrication at SRA demonstrates the potential of brain-computer
        interfaces in creating accessible, intelligent prosthetics for enhancing
        human capabilities.
      </>
    ),
    githubLink: 'https://github.com/sahilapage/Bionic-Hand-Controlled-Over-EEG',
  },

  {
    name: 'OSS-Duck',
    sub: (
      <>
        At the Society of Robotics and Automation, VJTI, we are building a fully
        functional Open Duck Mini, a compact bipedal robot inspired by recent
        advances in robotics research. Using open source designs, reinforcement
        learning based walking policies, and components fabricated on our own 3D
        printers, the project brings together mechanical design, embedded
        systems, simulation, and AI control.
        <br />
        The focus is on hands on learning, guiding members through the complete
        pipeline from CAD and simulation to real world walking. By recreating
        and extending this platform, we aim to make legged robotics
        approachable, collaborative, and engaging within our club.
      </>
    ),
  },

  {
    name: 'GantryMate-200',
    sub: (
      <>
        GantryMate-200 is an ongoing project focused on developing a precision
        gantry-based automation system for handling miniature screws on delicate
        electronic assemblies. The system is designed around a high-precision
        3-axis gantry platform and a custom modular toolhead intended for
        automated screw pickup, alignment, and fastening operations.
        <br />
        At the current stage, the project has successfully demonstrated a fully
        functional gantry mechanism capable of achieving sub-millimeter
        positioning accuracy, forming the foundation for future integration of
        automated screw-feeding, torque-controlled fastening, and intelligent
        process verification.
        <br />
        As development continues, the system aims to evolve into a complete
        end-to-end automated screwing solution suitable for high-density
        electronics assembly and servicing applications.
      </>
    ),
    githubLink: 'https://github.com/SarvaarthN/Eklavya_Gantry',
  },

  {
    name: 'HackerFab',
    sub: (
      <>
        The Society of Robotics and Automation at VJTI is contributing to
        HackerFab, an ambitious open-source semiconductor fabrication initiative
        aimed at democratizing chip manufacturing. By developing DIY
        nanofabrication tools and photolithography systems, SRA VJTI is working
        to make integrated circuit prototyping as accessible as 3D printing.
        <br />
        The project involves building essential fabrication equipment including
        photolithography steppers, developing inhouse metal deposition
        techniques, and piezoelectric nanopositioners using open-source hardware
        and software. This groundbreaking work at SRA dismantles the barriers of
        expensive cleanroom facilities, enabling students and makers to
        prototype custom chips affordably.
        <br />
        The initiative represents a paradigm shift in semiconductor technology,
        fostering innovation and making advanced electronics fabrication
        accessible to educational institutions worldwide.
      </>
    ),
  },

  {
    name: 'UWB-Based Localization',
    sub: (
      <>
        The UWB-Based Localization and Measurement System is an ongoing project
        aimed at developing a high-accuracy positioning solution for large-scale
        industrial measurement tasks, particularly cradle alignment during ship
        dry-docking. The system uses Ultra-Wideband (UWB) radios to measure
        precise signal timing and estimate tag positions over wide operational
        areas.
        <br />
        Initial experiments using Two-Way Ranging (TWR) have demonstrated
        approximately 3 cm accuracy across a basketball-court-scale environment,
        validating the feasibility of precision measurements.
        <br />
        The next stage focuses on implementing a Time Difference of Arrival
        (TDoA) architecture to enable scalable multi-anchor deployments, faster
        updates, and reliable real-time localization for field-ready industrial
        measurement applications.
      </>
    ),
  },
];

export default OngoingProjectsData;

// Archived projects (not currently displayed)
// {
//   imgName: 'titan_legs.jpeg',
//   name: 'TitanLegs',
//   sub: 'TitanLegs is a customly designed, small, mobile and
//     economical quadruped robot specially for dynamic locomotion.
//     It houses and is built on a powerful, efficient yet cost
//     effective 3D printed BLDC(Brushless DC) Motor based Actuator.
//     Minimising power wastage, producing robust robotic locomotion
//     and good mobility are some of the achieved objectives. Our
//     team has taken the approach of designing from scratch most of
//     the components, including a cycloidal gearbox, PCB design; so
//     as to get the most out of low-cost components.',
//   githubLink: 'https://github.com/SRA-VJTI/TitanLegs',
// },
// {
//   name: 'EvoBorne',
//   sub: 'EvoBorne is a versatile multi-terrain modular robot
//     designed to adapt to various surface and aerial environments,
//     morphing its structure to meet the demands of its
//     surroundings. It operates as a wheeled robot on land,
//     navigating diverse terrains with speed and agility, and
//     seamlessly transforms into a drone when flight is required.
//     Equipped with advanced mapping techniques and a dynamic
//     morphing capability, EvoBorne can autonomously switch between
//     ground and aerial modes, optimizing performance for complex
//     tasks such as search and rescue, environmental monitoring,
//     and exploration. Its robust, customizable design makes it a
//     powerful tool for overcoming challenging environments.',
//   githubLink: 'https://github.com/SRA-VJTI/evo-borne',
//   modelLink: 'https://p3d.in/e/RI78R',
// },
