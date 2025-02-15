import { Experience } from "../types";
import playClickSound from "../utils/sound";

import styles from "./ExperienceCard.module.css";

interface CardProps {
  exp: Experience;
}

export default function ExperienceCard({ exp, ...props }: CardProps) {
  return (
    <a
      href={exp.href}
      target="_blank"
      rel="noopener noreferrer"
      class={`${styles.card}`}
      onMouseEnter={exp.onMouseEnter || playClickSound}
      onMouseLeave={exp.onMouseLeave}
      {...props}
    >
      {/* Background Overlay */}
      {exp.bgSrc && (
        <div
          class={styles.cardBackground}
          style={{
            "background-image": `url(${exp.bgSrc})`,
            width: `${exp.width || 400}px`,
            top: `${exp.bgOffsetY || 0}px`,
          }}
        />
      )}

      <div class={styles.cardContent}>
        <div class={styles.logoContainer}>
          <img
            src={exp.logoSrc}
            alt={`${exp.title} Logo`}
            class={styles.logo}
          />
        </div>

        <div class={styles.textContent}>
          <span class={styles.title}>{exp.title}</span>
          <span class={styles.description}>{exp.description}</span>
        </div>
      </div>
    </a>
  );
}
