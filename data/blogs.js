const BlogList = [
  {
    year: '2020',
    blogs: [
      {
        photo: '/static/images/blog/Vedant.jpg',
        title: 'GSoC 2020 with BeagleBoard.org',
        author: 'Vedant Paranjape',
        time: 'May-September 2020',
        short: 'Worked on creating a transpiled language called simpPRU',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Google summer of code is an international, annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. I was working with BeagleBoard for this period, it is designs open source Single Board computers, like the BeagleBone Black, BeagleBone AI, BeagleV, etc. Application period for it was in March, and we had to submit a detailed proposal for the project Idea I wanted to work on. It was a 12 weeks long program.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'I joined their IRC channel, and communicated with my mentors about my interest in the project, then one has to sign up with GSoC portal, and upload the project proposal for	the specific project, which would be then reviewed by the organization.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'BeagleBoard’s run on a TI Chip called am335x, it is an ARM powered chip. It has a real-time unit inside it called the PRU (Programmable Real-time unit). Since, real-time tasks like sending a pulse every 10 ms, is a difficult task for a chip running any OS which schedules task, there is a need for a co-processor which isn’t bound by the scheduler and can do task in real time like a microcontroller can (to an extent). PRU is exactly this co-processor. But programming it is a difficult task, due to its low RAM and ROM size and also due to poor support from TI. So, making it easy for programming was of priority. There were earlier attempts to port interpreted languages onto it, but due to only 8Kb ram this was not feasible. I worked on creating a transpiled language called simpPRU. It had a syntax just like python. It was super easy to get started, and didn’t need any extensive language of gcc, C and Linux kernel framework. So, earlier loading a firmware onto PRU meant, compiling the firmware, loading it into PRU using remoteproc framework and then starting it. This was a very steep learning curve for a beginner, So, simpPRU does all this for you, so it is as easy as running and compiling a program. Also, I created a TUI based terminal for reading and writing to the PRU using remoteproc.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content: 'It was remote, N/A',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'It was $3000 divided into 3 evaluations.',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content:
              'Here’s my project report: https://summerofcode.withgoogle.com/archive/2020/projects/6551712266977280/ \n Here’s my project repository: https://github.com/VedantParanjape/simpPRU',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'Start early, join the organization’s communication channel from January itself, and start contributing to their projects, take part in meetings and interact with the possible mentors. You need to prove the mentors that you are capable of doing the given project.',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content:
              'You can contact me at my email, vedantparanjape160201@gmail.com',
          },
        ],
      },
      {
        photo: '/static/images/Team/Saharsh.jpg',
        title: 'Airpix',
        author: 'Saharsh Jain',
        time: 'June 2020 - March 2021',
        short:
          'Developed an application for vehicle counting, detecting violations like wrong side, red light, speed, helmet and triple seat.',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Airpix is a drone / unmanned aerial systems startup based in Navi Mumbai, India. Airpix.io is an analytics platform that provides services in face recognition, video analytics, optical character recognition by Leveraging AI, Machine Learning & Deep Learning technologies. AIsyte is the product that provides these analytics services.My position in internship was ‘AI ML and Edge Computing Intern’. The tasks were related to developing applications for Traffic monitoring, Face recognition, Pose estimation, etc. The position required knowledge in Python, Numpy, OpenCV, Deep Learning frameworks like Tensorflow, Keras, Pytorch, etc. It started with a 3 months unpaid internship. After that I was given the opportunity to continue the work with a paid internship. I worked under the guidance of Aniket Tatipamula.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'The application form was sent by my college. But you can also reach out to them via email or linkedin.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'In the first 3 months, we were divided into groups to tackle different problems. I was part of the group - Traffic violation. The task was to develop an application for vehicle counting, detecting violations like wrong side, red light, speed, helmet and triple seat.We started with listing out the requirements of the product, its users, use cases, deployment requirements and reviewed the technologies available in the market. There used to be meetings at least 2-3 days a week with the mentor. After listing the requirements the task was to get familiar with the object detection networks like yolo, ssd, etc. In the first two weeks I studied about the yolo network (running the pre-trained network and training it for custom classes like helmet). The next task was to track the object and count them. I studied different trackers available like OpenCV inbuilt trackers, SORT, Deep-SORT, etc. After analyzing the runtime, memory and other aspects we decided to use a particular tracker and started with the counting part. Several techniques were tried for the counting part to handle different edge cases. Till this point the team got familiar with the tech and the requirements. We divided the task among ourselves and started working on the application. At the end of 3 months, we were ready with the desktop application providing an interface to add recording, count vehicles based on classes, and detect all the violations.I got an offer to continue the work after this.The work started after my mid-sem exams. The initial task was to develop an application for face recognition. The starter code was already written by the previous interns. The whole project can be summarized as follows: requirement specification → robust detector → network for recognition → storing info in database → testing on large database → visualizing the results on the video frame itself in real time → basic web platform.The next project was to develop an application for license plate recognition (since this will be required after violation detection too). The starter code was available, which was written by the previous interns. The whole project can be summarized as follows: requirement specification → understanding interns’ code → listing out shortcomings → reviewing available methods → trying different techniques → developing pipeline to take in the video and show the license plate text on the frames.The next project was to combine the work of violation team and vehicle classification and develop a desktop application wherein the client can:Add video recordings,Select the tasks to perform,Draw region of interests,Get visual output of all the violations / any event according to the tasks selected.Have the ability to do RUD operations on the output.** All above projects were also made to run on edge platformsThe most important thing to take away from this is that every project should start with the requirement specification and system design. The mentor (Aniket Tatipamula) helped a lot whenever we had no clue of how to develop something at scale. He always urged us to develop the system flow, possible flaws, and their remedies. This helped a lot in understanding the problem and developing the solution for the same.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content: 'It was remote, N/A',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'Even if you don’t have specialized knowledge in the topics, the internship gives you the opportunity to excel in those fields and develop industry ready products. The internship is the best way to understand the importance of ML in production and scaling of the same. The company also provides job opportunities in areas of drone development and web designing.',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content:
              'You can contact me at my email, saharshjain2000@gmail.com',
          },
        ],
      },
      {
        photo: '/static/images/Team/Rahul.JPG',
        title: 'Airpix',
        author: 'Rahul Singh',
        time: 'June 2020 - March 2021',
        short:
          'Developed an application for vehicle counting, detecting violations like wrong side, red light, speed, helmet and triple seat.',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Airpix is a drone / unmanned aerial systems startup based in Navi Mumbai, India. Airpix.io is an analytics platform that provides services in face recognition, video analytics, optical character recognition by Leveraging AI, Machine Learning & Deep Learning technologies. AIsyte is the product that provides these analytics services. My position in internship was ‘AI ML and Edge Computing Intern’. The tasks were related to developing applications for Traffic monitoring, Face recognition, Pose estimation, etc. The position required knowledge in Python, Numpy, OpenCV, Deep Learning frameworks like Tensorflow, Keras, Pytorch, etc. It started with a 3 months unpaid internship. After that I was given the opportunity to continue the work with a paid internship. I worked under the guidance of Aniket Tatipamula.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'The application form was sent by my college. But you can also reach out to them via email or linkedin.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'In the first 3 months, we were divided into groups to tackle different problems. I was part of the group - Traffic violation. The task was to develop an application for vehicle counting, detecting violations like wrong side, red light, speed, helmet and triple seat. We started with listing out the requirements of the product, its users, use cases, deployment requirements and reviewed the technologies available in the market. There used to be meetings at least 2-3 days a week with the mentor. After listing the requirements the task was to get familiar with the object detection networks like yolo, ssd, etc. In the first two weeks I studied about the yolo network (running the pre-trained network and training it for custom classes like helmet). The next task was to track the object and count them. I studied different trackers available like OpenCV inbuilt trackers, SORT, Deep-SORT, etc. After analyzing the runtime, memory and other aspects we decided to use a particular tracker and started with the counting part. Several techniques were tried for the counting part to handle different edge cases. Till this point the team got familiar with the tech and the requirements. We divided the task among ourselves and started working on the application. At the end of 3 months, we were ready with the desktop application providing an interface to add recording, count vehicles based on classes, and detect all the violations. I had been approached by the organization to continue the work which we had left previously. I started working with them after the end semester exams were over. The task given to me was to package our application and create a docker container for it.The advantage of docker container were that all your application and dependencies could be packaged as whole, such that the next time you want to deploy your application to the host computer, all you needed to do was to just install the docker container from the repository and execute it, nothing else was needed to install. I was also tasked with on how could we spawn multiple docker containers at a time, and also check if the minimum resources were available  before starting a new container. My other task were to optimize the object detection model such as yolov3 and ssd-mobilenet with Nvidia TensorRt sdk so that it could work with a higher fps on their edge boards,Jetson Nano and Jetson AGX. Wrote a small code which checked for system configuration, based on that used to install the docker container. Also used to sort out any issue which occurred on the AGX board.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content: 'It was remote, N/A',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content: '7) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content:
              'You can contact me at my email, rahulsinghrox701@gmail.com',
          },
        ],
      },
      {
        photo: '/static/images/Team/Sravan.jpeg',
        title: 'Airpix',
        author: 'Sravan Chittupalli',
        time: 'June 2020 - April 2021',
        short:
          'Trained a model which can detect, classify and localise Indian vehicles.',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Airpix is a drone / unmanned aerial systems startup based in Navi Mumbai, India. Airpix.io is an analytics platform that provides services in face recognition, video analytics, optical character recognition by Leveraging AI, Machine Learning & Deep Learning technologies. AIsyte is the product that provides these analytics services.My position in internship was ‘AI ML and Edge Computing Intern’. The tasks were related to developing applications for Traffic monitoring, Face recognition, Pose estimation, etc. The position required knowledge in Python, Numpy, OpenCV, Deep Learning frameworks like Tensorflow, Keras, Pytorch, etc. It started with a 3 months unpaid internship. After that I was given the opportunity to continue the work with a paid internship. I worked under the guidance of Aniket Tatipamula.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'The application form was sent by my college. But you can also reach out to them via email or linkedin.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'During the summer of 2020 I worked with the vehicle classification group. The task was to train a model which can detect, classify and localise Indian vehicles. Also the detected vehicles have to be tracked and counted. Further the Indian trucks had to be sub-classified according to the number of axles.For this task our team was given a week to do literature review and get familiar with training and using YOLO, SSD models. Firstly a dataset of Indian vehicles was made and a YOLO model was trained. After training the task was to get inference and check the accuracy of the model. The next task was to track the vehicles to count them. Different trackers like KCF, CSRT, median flow etc were explored and later we used SORT tracker for tracking. For sub-classifying trucks a lightweight model was trained.The second task was to detect speed violations in a video. A report had to be generated and statistics had to be shown. This was a requirement by a client so specific analytics had to be calculated which cannot be disclosed.Weekly meetings took place and during that time the mentor discussed the work done during the week and pointed us towards the right direction whenever we were struck.After this my internship was extended and I was working during the semester. The task was to create a product so that the client can detect specific violations in a rtsp stream/ a video file. It was basically a culmination of the tasks that were done by the vehicle classification and the violation detection team. This product was to be deployed on an edge device. Also, the product had to be made such that it can run on all devices irrespective of the configuration.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content: 'It was a remote internship due to COVID.',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'Most probably you will receive the application form. If not then find the email on AIRPIX website and mail them. Remember: “You get what you ask”',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content: 'Email: sravanchittupalli7@gmail.com',
          },
        ],
      },
      {
        photo: '/static/images/Team/Shantanu.jpg',
        title: 'Airpix',
        author: 'Shantanu Pande',
        time: 'June-Sept 2020, Feb-July 2021',
        short:
          'Collected and Annotated large datasets for custom object detection such as helmets, guns.',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Airpix is a drone / unmanned aerial systems startup based in Navi Mumbai, India. Airpix.io is an analytics platform that provides services in face recognition, video analytics, optical character recognition by Leveraging AI, Machine Learning & Deep Learning technologies. AIsyte is the product that provides these analytics services.My position in internship was ‘AI ML and Edge Computing Intern’. The tasks were related to developing applications for Traffic monitoring, Face recognition, Pose estimation, etc. The position required knowledge in Python, Numpy, OpenCV, Deep Learning frameworks like Tensorflow, Keras, Pytorch, etc. It started with a 3 months unpaid internship. After that, I was offered a paid internship . I worked under the guidance of Aniket Tatipamula Sir.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'The application form was sent by my college. But you can also reach out to them via email or linkedin.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'In the first 3 months, we were divided into groups to tackle different problems. I was part of the group -Bank Safety. Initially the tasks involved collecting and annotating large datasets for custom object detection such as helmets, guns. In the initial few weeks we were made familiar with different detectors such as YOLO, SSD and their implementations on pytorch and darknet. After the custom detection part that main job revolved around detecting suspicious activities which was done using pose detectors along with LSTM to get accurate results.The second half of the internship dealt with working on the traffic monitoring framework which was developed earlier by a team. This module was to be integrated along with the web app as well, so for this the earlier code was to be cleaned and separated into different modules and later multiprocessing was implemented to run different analytics separately. After this, a major task revolved around deploying this application on Nvidia edge (jetson) devices and obtaining optimised and efficient results with better performance. My further work on this project is underway.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content: 'Remote internship due to pandemic, N/A',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content: 'Confidential',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'This internship has some basic technical prerequisites along with the will to work efficiently and with dedication. The team at Airpix is really good to work with and one can get a very good industrial exposure in the field of AI, ML and video analytics.',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content:
              'LinkedIn: linkedin.com/in/shantanu-pande  Email, shantanupande898@gmail.com',
          },
        ],
      },
    ],
  },
  {
    year: '2019',
    blogs: [
      {
        photo: '/static/images/Team/Vishnu.png',
        title: 'SRFP with NPL, New Delhi',
        author: 'Vishnu Parammal',
        time: 'May-July 2019',
        short: 'Automated the process of calibration to reduce time and errors',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'Summer Research fellowship programme is an annual fellowship provided by the three national Science Academies — Indian Academy of Sciences, Bengaluru, Indian National Science Academy, New Delhi and The National Academy of Sciences, India, Prayagraj. They offer several two-month Summer Fellowships to enable students/​teachers (studying/​teaching in India) to work with scientists associated with the three Academies. Internship opportunities are available across various government labs and institutions throughout India in the following fields.Life Sciences,Engineering Sciences,Chemical Sciences,Physical Sciences,Materials Sciences, Mathematics. Duration: 8 weeks',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'The application will be available on https://www.ias.ac.in/ during october/november. The list of all available institutions, along with the list of professors/scientists and their field of expertise will be given for you to choose. Criteria for selection includes your statement of purpose, scores of 10, 12, and engineering.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'Instruments used for measurement of voltage, current, power and resistance have to be precise, accurate and must comply with international regulations for measurement. In order to achieve this high measurement quality, every country has to maintain certain standards. For AC standards, India uses electrothermic instruments. Regular calibration of these instruments are of utmost importance to maintain the national standard. But the process is time consuming if done manually. My project was to automate the process of calibration which will reduce time and remove errors when compared with the conventional method.I had to develop a LabVIEW program to automate the AC DC transfer difference method of calibration and generate reports based on the result',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content:
              'The National Physical Laboratory had many research activities going on during my time of visit, some of the interesting ones included finding materials with electrical properties similar to human skin and tissues, research on improving NTP(Network Time Protocol), designing of 5G antennae, etc. They have their own journals and conferences for metrology which demonstrates their research.It has a really vibrant campus lush with greenery and regular sights of peacocks roaming around. Living arrangements have to be done by the students themselves.',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'Rs. 22,500 per month',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content:
              'You may visit http://reports.ias.ac.in/ to check out all projects done under SRFP.Link to my project report :- http://reports.ias.ac.in/report/20047/development-and-implementation-of-automation-software-for-calibration-of-reference-and-transfer-standards-for-lf-voltage-and-current-using-labview-platform',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'This internship will be appropriate for 2nd year students who would like to have an exposure to the government labs in India.',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content: 'Email: vishnu.130599@gmail.com',
          },
        ],
      },
      {
        photo: '/static/images/Team/Vednarayan.jpg',
        title: 'DU, New Delhi',
        author: 'Vednarayan Iyer',
        time: 'Dec 2019- Jan 2020',
        short:
          'Tried to implement ‘Time Crystals’ as a scalar field for inflationary cosmology ',
        content: [
          {
            type: 'subtitle',
            content:
              '1) What was your internship about, and what was the duration of it ?',
          },
          {
            type: 'paragraph',
            content:
              'I was a research intern under Dr. Patrick Das Gupta from Delhi university. The main focus of my research was early time cosmology. The research was completely theoretical and the prerequisites included tensor calculus, differential equations and basic knowledge regarding general relativity. It was a two month long winter internship.',
          },
          {
            type: 'subtitle',
            content: '2) How do you approach the Organization/University ?',
          },
          {
            type: 'paragraph',
            content:
              'In general, there are summer internships available at such universities but I was late to apply so I started contacting several professors through their email id available at the university website. I got a positive response from Dr. Patrick Das Gupta but he was unavailable in the coming summer, hence it was a winter internship.',
          },
          {
            type: 'subtitle',
            content: '3) What was your project about ?',
          },
          {
            type: 'paragraph',
            content:
              'Initially, there wasn’t any particular problem statement on which I was working. Being from an engineering background there were a lot of prerequisites to be understood. Under the professor’s guidance, I learned about general relativity followed by its application in the Friedmann–Lemaître–Robertson–Walker (FLRW) Models in cosmology. I then investigated the early universe cosmology and the various theories proposed regarding the same. I got to know about the horizon problem and the flatness problem and how inflationary cosmology solves it. While learning inflationary cosmology I also understood how cosmological fluctuation brings a structure to the universe by understanding Cosmological Perturbation Theory. During this brief period, I was able to develop my mathematical skills in tensor algebra, tensor calculus, differential calculus and also gained contemporary knowledge in the field of cosmology. After gaining the required knowledge I decided my primary research area to be  ‘The Cosmological Constant Problem’. I tried to implement ‘Time Crystals’ as a scalar field for inflationary cosmology which leads to an arbitrarily small positive effective Cosmological Constant.',
          },
          {
            type: 'subtitle',
            content:
              '4) How was the host University in terms of research and campus life ?',
          },
          {
            type: 'paragraph',
            content:
              'As it was not an official internship under the university, I had to stay outside the campus and only interacted with the professors twice a week.',
          },
          {
            type: 'subtitle',
            content: '5) How much was your stipend ?',
          },
          {
            type: 'paragraph',
            content: 'N.A.',
          },
          {
            type: 'subtitle',
            content:
              '6) Can you provide any resources to check out your project ?',
          },
          {
            type: 'paragraph',
            content: 'N.A.',
          },
          {
            type: 'subtitle',
            content:
              '7) Suggestions to the fellow VJTIians who want to go for this internship.',
          },
          {
            type: 'paragraph',
            content:
              'There are a lot of opportunities available to work as a research intern in physics. The official summer internship programs start around september. To list a few:https://home.cern/summer-student-programme.https://www.isro.gov.in/research-and-academia-interface/internships-projects-training.https://www.iiap.res.in/?q=degree. Besides these, every iiser and a few iits have their own summer internship programs available at their websites.In my case, I was a bit late to apply to most of these and to get an opportunity to work on the purely theoretical side of physics is a bit difficult for engineering students. So, I started emailing a lot of professors to ask for their guidance and if possible to work under them as a research intern. I tried to contact around 60-70 professors, half of which did not reply and from the other half I got a negative response. After a month-long effort I received a positive response from Patrick sir.  So my suggestion is to keep applying for programs, official or not, as much as you can.',
          },
          {
            type: 'subtitle',
            content: '8) What is the best way to contact you ?',
          },
          {
            type: 'paragraph',
            content: 'vednarayan29@gmail.com ',
          },
        ],
      },
    ],
  },
];

export default BlogList;
