# What was your internship about, and what was the duration of it ?

Google summer of code is an international, annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. I was working with BeagleBoard for this period, it is designs open source Single Board computers, like the BeagleBone Black, BeagleBone AI, BeagleV, etc. Application period for it was in March, and we had to submit a detailed proposal for the project Idea I wanted to work on. It was a 12 weeks long program.

# How do you approach the Organization/University ?

I joined their IRC channel, and communicated with my mentors about my interest in the

project, then one has to sign up with GSoC portal, and upload the project proposal for the specific project, which would be then reviewed by the organization.

# What was your project about ?

BeagleBoard's run on a TI Chip called am335x, it is an ARM powered chip. It has a real-time unit inside it called the PRU (Programmable Real-time unit). Since, real-time tasks like sending a pulse every 10 ms, is a difficult task for a chip running any OS which schedules task, there is a need for a co-processor which isn't bound by the scheduler and can do task in real time like a microcontroller can (to an extent). PRU is exactly this co-processor. But programming it is a difficult task, due to its low RAM and ROM size and also due to poor support from TI. So, making it easy for programming was of priority. There were earlier attempts to port interpreted languages onto it, but due to only 8Kb ram this was not feasible. I worked on creating a transpiled language called \*\*simpPRU. It had a syntax just like python. It was super easy to get started, and didn't need any extensive language of gcc, C and Linux kernel framework. So, earlier loading a firmware onto PRU meant, compiling the firmware, loading it into PRU using remoteproc framework and then starting it. This was a very steep learning curve for a beginner, So, simpPRU does all this for you, so it is as easy as running and compiling a program. Also, I created a TUI based terminal for reading and writing to the PRU using remoteproc.

# How was the host University in terms of research and campus life ?

It was remote, N/A

# How much was your stipend ?

It was $3000 divided into 3 evaluations.

# Can you provide any resources to check out your project ?

Here's my project report: [https://summerofcode.withgoogle.com/archive/2020/projects/6551712266977280/](https://summerofcode.withgoogle.com/archive/2020/projects/6551712266977280/)

Here's my project repository: [https://github.com/VedantParanjape/simpPRU](https://github.com/VedantParanjape/simpPRU)

# Suggestions to the fellow VJTIians who want to go for this internship.

Start early, join the organization's communication channel from January itself, and start contributing to their projects, take part in meetings and interact with the possible mentors. You need to prove the mentors that you are capable of doing the given project.

# What is the best way to contact you ?

You can contact me at my email, [vedantparanjape160201@gmail.com](mailto:vedantparanjape160201@gmail.com)
