import React from 'react'
import { ProjectCard } from './ProjectCard'

export const Project = ({
	type,
	cardTitle,
	title,
	summary,
	description,
	img,
	link,
	github,
}) => {
	return (
		<article className="vertical-project">
			<div className="border"></div>

			<ProjectCard
				title={title}
				description={description}
				img={img}
			></ProjectCard>

			<div className="project-container">
				<span>{type}</span>
				<a href={link} target="_blank">
					<h2>{title}</h2>
				</a>
				<p>{summary}</p>

				<div className="project-link-container">
					<a href={link} className="visit-link">
						Visit Project
					</a>

					<a type="button" href={github} className="github-link">
						<i className="bi bi-github"></i>
					</a>
				</div>
			</div>
		</article>
	)
}
