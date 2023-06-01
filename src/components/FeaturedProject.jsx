import React from 'react'
import { ProjectCard } from './ProjectCard'

export const FeaturedProject = ({
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
		<article className="featured-project">
			<div className="border"></div>
			<ProjectCard
				title={title}
				description={description}
				img={img}
			></ProjectCard>

			<div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				<span>{type}</span>
				<a href={link} target="_blank">
					<h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
						{title}
					</h2>
				</a>
				<p>{summary}</p>

				<div className="project-link-container">
					<a href={github} className="github-link">
						<i className="bi bi-github"></i>
					</a>
					<a href={link} className="visit-link">
						Visit Project
					</a>
				</div>
			</div>
		</article>
	)
}
