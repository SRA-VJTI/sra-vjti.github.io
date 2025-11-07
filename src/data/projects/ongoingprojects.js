// To add your 3D model, upload it on https://p3d.in/ and add the embed link under modelLink

const OngoingProjectsData = [
  {
    imgName: 'titan_legs.jpeg',
    name: 'TitanLegs',
    sub: (
      <>
        TitanLegs is a customly designed, small, mobile and economical quadruped
        robot specially for dynamic locomotion. It houses and is built on a
        powerful, efficient yet cost effective 3D printed BLDC(Brushless DC)
        Motor based Actuator.
        <br />
        Minimising power wastage, producing robust robotic locomotion and good
        mobility are some of the achieved objectives. Our team has taken the
        approach of designing from scratch most of the components, including a
        cycloidal gearbox, PCB design; so as to get the most out of low-cost
        components.
      </>
    ),
    githubLink: 'https://github.com/SRA-VJTI/TitanLegs',
  },

  {
    name: 'EvoBorne',
    sub: (
      <>
        EvoBorne is a versatile multi-terrain modular robot designed to adapt to
        various surface and aerial environments, morphing its structure to meet
        the demands of its surroundings. It operates as a wheeled robot on land,
        navigating diverse terrains with speed and agility, and seamlessly
        transforms into a drone when flight is required. Equipped with advanced
        mapping techniques and a dynamic morphing capability, EvoBorne can
        autonomously switch between ground and aerial modes, optimizing
        performance for complex tasks such as search and rescue, environmental
        monitoring, and exploration. Its robust, customizable design makes it a
        powerful tool for overcoming challenging environments.
      </>
    ),
    githubLink: 'https://github.com/SRA-VJTI/evo-borne',
    modelLink: 'https://p3d.in/e/RI78R',
  },

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
        capability to run Linux. This would demonstrate the core’s ability to
        handle sophisticated software environments and expand its potential
        applications.
      </>
    ),
    githubLink: 'https://github.com/SRA-VJTI/evo-borne',
  },
];

export default OngoingProjectsData;
