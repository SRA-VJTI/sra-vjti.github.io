import Link from 'next/link';

export default function AboutProjects() {
    return (
      <section className="section about">
        <div className="container aboutev">
           <div className="photo-stack">
            <img src="/events/pixels.jpg" alt="" />
            <img src="/events/wall-e.jpg" alt="" />
            <img src="/events/mario.jpg" alt="" />
           </div>
           
           <div>
             <p className="about__eyebrow">Projects</p>
             <p className="aboutev__text">
        SRA members design, build, and iterate on real robotics projects year-round, from autonomous bots to computer vision systems, turning ideas into working prototypes with guidance from seniors and faculty.
             </p>
             <Link
                key="activites/projects"
                href="activities/projects"
                className={`btn btn--solid`}
             >
             View projects 
             </Link>
           </div> 
        </div>
      </section>
    );
}
