import { getPage, pageTitle } from '../../../lib/content';
import ProjectsFilter from '../../../components/ProjectsFilter';

const page = getPage('projects');
export const metadata = { title: pageTitle('projects') };

export default function Projects() {
  // Group Eklavya projects by year for the UI
  const eklavya = {};
  for (const p of page.eklavya) (eklavya[p.year] ??= []).push(p);

  return (
    <div className="container">
      <div className="page-header">
        <p className="page-header__eyebrow">{page.eyebrow}</p>
        <h1 className="page-header__title">{page.title}</h1>
        <p className="page-header__desc">{page.desc}</p>
      </div>

      <div className="section--sm">
        <ProjectsFilter ongoing={page.ongoing} eklavya={eklavya} />
      </div>
    </div>
  );
}
