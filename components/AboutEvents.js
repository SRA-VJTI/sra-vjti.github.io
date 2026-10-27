import Link from 'next/link';
import PhotoGallery from './PhotoGallery';

export default function AboutEvents() {
    return (
      <section className="section about">
        <div className="container aboutev">
           <div className="aboutev__copy">
             <p className="about__eyebrow">Events</p>
             <p className="aboutev__text">
        From beginner-friendly workshops to national-level robotics competitions, SRA runs events that turn curiosity into hands-on skill, giving anyone who wants to build a place to learn, tinker, and grow.
             </p>
             <Link
                key="activites/events"
                href="activities/events"
                className="btn btn--solid aboutev__action"
             >
             Explore events 
             </Link>
           </div>
           
           <PhotoGallery group="events" className="events-stack" wrapperClassName="aboutev__gallery" />
        </div>
      </section>
    );
}
