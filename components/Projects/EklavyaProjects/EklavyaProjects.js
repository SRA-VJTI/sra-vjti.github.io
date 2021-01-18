import styles from "./EklavyaProjects.module.scss";
import Link from "next/link";
import { eklavyaProjectList } from "../../../data/SiteData";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Hero from "../../Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const EklavyaProjects = () => {
	return (
		<>
			<Hero
				imgName={"eklavya-hero-final.jpg"}
				backgroundPosition={"center top"}
				title={<>Eklavya Projects</>}
				subtitleList={["Nurturing the future"]}
				isHome={false}
			/>
			<div className={styles.eklavyaTotal} id="is">
				<div className={styles.eklavyaYearCloud}>
					{eklavyaProjectList.map((year, _) => {
						return (
							<a className={styles.eklavyaYearTag} href={`#${year.year}`}>
								{year.year}
							</a>
						);
					})}
				</div>
			</div>

			{eklavyaProjectList.map((year, index) => {
				return (
					<div className={styles.eklavyaYear} id={year.year}>
						<h2>{year.year}</h2>
						<div className={styles.eklavyaYearList}>
							{year.projects.map((proj, _) => {
								return <ProjectCard {...proj} />;
							})}
						</div>
					</div>
				);
			})}
		</>
	);
};

const ProjectCard = ({ name, imgName, sub, githubLink }) => {
	const cardRef = useRef();
	const [isOpen, setIsOpen] = useState(false);

	const onIClick = () => {
		if (isOpen) {
			cardRef.current.style.clipPath = "circle(4% at 90.75% 8%)";
			setIsOpen(false);
		} else {
			cardRef.current.style.clipPath = "circle(120% at 90.75% 8%)";
			setIsOpen(true);
		}
	};

	return (
		<div className={styles.eklavyaProj}>
			<div
				style={{ backgroundImage: `url("/static/images/${imgName}")` }}
				className={styles.projPhoto}
			></div>
			<div className={styles.projName}>{name}</div>
			<div
				ref={cardRef}
				className={styles.iCard}
				onMouseEnter={onIClick}
				onMouseLeave={onIClick}
			>
				<div className={styles.iButton}>i</div>
				<div className={styles.iInfo}>{sub}</div>
				<a className={styles.iLink} href={githubLink}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
		</div>
	);
};

export default EklavyaProjects;
