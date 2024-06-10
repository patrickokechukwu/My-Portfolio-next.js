// components/ProjectCard.js
import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => (
  <div className={styles.card}>
    <Image src={project.image} alt={project.name} width={300} height={200} />
    <h2>{project.name}</h2>
    <p>{project.description}</p>
  </div>
);

export default ProjectCard;
