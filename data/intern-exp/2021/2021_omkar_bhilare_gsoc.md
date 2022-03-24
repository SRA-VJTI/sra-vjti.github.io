# What was your internship about, and what was the duration of it ?

Google Summer of Code is a global program focused on introducing students to open source software development. In GSoC each year there are good opportunities for hardware related projects too with organizations like FOSSi, lowRISC, Arduino, ArduPilot, BeagleBoard.org, Open Source Robotics Foundation and SymbiFlow. I had opted for beagleboard org in which I was selected for beaglewire software project. BeagleWire is a FPGA Cape for Beaglebone black. The beaglewire software was still in progress. So In this summer I had developed GateWare for BeagleWire which included various verilog components based on GPMC and wishbone protocols, ready to use examples, PMOD support and at last litex support on beaglewire.

# How do you approach the Organization/University ?

My mentor is also a founder of qwerty embedded which has a discord server. I had joined this discord server long back in dec-jan and I was fairly active there. Once the project was announce d on the beagleboard site, I had approached the mentor with the first draft of proposal and after the reviews he gave I had improved the GSoC proposal and submitted it.

# What was your project about ?

The BeagleWire is an FPGA development platform that has been designed for use with BeagleBone boards. BeagleWire is a cape on which there is an FPGA device (Lattice iCE40HX). The software support for BeagleWire was still in the development phase. But now it is stable through this project.
In this project, I was developing and testing the existing software support of Beaglewire. The known primary issue in Beaglewire was the interface between 32MB SDRAM and ICE40HX4K. For this Solution, I tried an FPGA-proven solution like LiteDRAM(a small footprint and configurable DRAM core). There were current Issues opened on BeagleWire Repository, These were solved during this project. More PMODs are interfaced with the BeagleWire now.
Increased the Documentation and also added a new programming method for FPGA with a proper starting guide for new users who want to experiment with BeagleWire.In this project I was going to test all the subsystems like I2C, SPI, PWM, UART in Hardware and the primary goal will be to debug the issues related to them and fix them accordingly.

- You can read more about this project here: [**https://beaglewire.github.io/**](https://beaglewire.github.io/)
- Final report video can be found here: [https://www.youtube.com/watch?v=qAvT4ZFW7Hg](https://www.youtube.com/watch?v=qAvT4ZFW7Hg)

# How was the host University in terms of research and campus life ?

GSoC is remote, N/A

# How much was your stipend ?

**$1500** in 2 evaluations of 45% (week 6) and 55%(week 10) payment

# Can you provide any resources to check out your project ?

- GSoC Report of BeagleWire **:** [**https://beaglewire.github.io/**](https://beaglewire.github.io/)
- BeagleWire Software Repo **:** [**https://github.com/BeagleWire/BeagleWire**](https://github.com/BeagleWire/BeagleWire)

# Suggestions to the fellow VJTIians who want to go for this internship.

Join the IRC/Discord as early as possible. If you are looking for hardware opportunities then look for these orgs FOSSi, lowRISC, Arduino, ArduPilot, BeagleBoard.org, Open Source Robotics Foundation and SymbiFlow. Take reviews on the GSoC proposal from the mentor before submission.

# What is the best way to contact you ?

You can contact me at my email, [oabhilare_b19@el.vjti.ac.in](mailto:oabhilare_b19@el.vjti.ac.in)
