# What was your internship about, and what was the duration of it ?

Google Summer of Code is a global, online program focused on bringing new contributors into open source software development. GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors. I was working with Forschungszentrum Jülich which is a part of the Helmholtz Association.

# How do you approach the Organization/University ?

GSoC is an open source student program where students from all over the world participate by submitting proposals for projects they are interested in. Every org participating in GSoC will have an ideas page with many prospect ideas, also some unfinished ideas(or ideas requiring enhancement) from previous GSoC. Some orgs have you commit some code by creating a Pull Request(PR), some have you solve tasks, some may have no necessary criteria except for a proposal. The aspect common to all orgs/mentors is showing your enthusiasm for the project, and to learn. Also having a few(or even one in my case) commits to the org before submitting the proposal will go a long way.

# What was your project about ?

My project was about creating an algorithm to perform convolutions on fully memory-distributed data. Heat's current implementation of 1D and 2D convolution only supports convolutions on one distributed DNDarray, the signal, with a non-distributed DNDarray, the filter. However, because the user-defined procedure involves a 2D convolution of a large matrix with its own boolean mask, we need both the signal and the kernel to be distributed in memory. As a result, I had to create a new method to distribute the convolution operation using MPI.

# How was the host University in terms of research and campus life ?

GSoC is remote.

# How much was your stipend ?

$3000 in 2 evaluations of 45% (week 6) and 55% (week 12) payment

# Can you provide any resources to check out your project ?

My project report is available at, https://gist.github.com/shahpratham/73478f6f26873fe2f10c4446e3ab89d0. You can also look at this https://nyu-cds.github.io/python-mpi/ for a quick guide to dealing with distributed memory with MPI.

# Suggestions to the fellow VJTIians who want to go for this internship.

Start early. Find relevant orgs and join their IRC as soon as possible and start communicating and contributing to relevant org issues. Start working on your project as soon as possible. Maintain good communication with your mentor and keep them up to date.

# What is the best way to contact you ?

ppsprathamshah2313@gmail.com or https://www.linkedin.com/in/shahpratham/
