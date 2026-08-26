import Link from 'next/link';

export default function AboutEvents() {
    return (
      <section className="section about">
        <div className="container aboutev">
           <div>
             <p className="about__eyebrow">Events</p>
             <p className="aboutev__text">
        From beginner-friendly workshops to national-level robotics competitions, SRA runs events that turn curiosity into hands-on skill, giving anyone who wants to build a place to learn, tinker, and grow.
             </p>
             <Link
                key="activites/events"
                href="activities/events"
                className={`btn btn--solid`}
             >
             Explore events 
             </Link>
           </div>
           
           <div className="photo-stack events-stack">
            <img src="/events/pixels.jpg" alt="" />
            <img src="/events/wall-e.jpg" alt="" />
            <img src="/events/mario.jpg" alt="" />
           </div>
        </div>
      </section>
    );
}
