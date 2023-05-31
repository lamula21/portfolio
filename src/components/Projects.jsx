import React from 'react'
import projectImg1 from '../assets/project-img1.png'
import projectImg2 from '../assets/project-img2.png'
import projectImg3 from '../assets/project-img3.png'
import { FeaturedProject } from './FeaturedProject'
import { Project } from './Project'
import { AnimatedTitle } from './AnimatedTitle'
import { AnimatedText } from './AnimatedText'
import { Experience } from './Experience'
import { Education } from './Education'

import { useState } from 'react'

export const Projects = () => {
	const [tab, setTab] = useState('experience')

	const toggleTab = (tab) => {
		setTab(tab)
	}

	const tabInfo = {
		experience: {
			title: 'Experience',
			info:
				'Dedicated learner and collaborator, leveraging strong programming skills to create innovative solutions with hands-on experience in software development, web technologies, and problem-solving.',
		},
		projects: {
			title: 'Projects',
			info:
				"Immerse yourself in my portfolio's diverse projects, from web apps to interactive responsive websites. Witness the fusion of art, technology, and attention to detail that sets my work.",
		},
		education: {
			title: 'Education',
			info:
				'Through my comprehensive computer science program, I have been immersed in a dynamic learning environment that has equipped me with a deep understanding of algorithms, data structures, and cutting-edge technologies.',
		},
	}

	return (
		<section className="project" id="projects">
			<div className="container">
				<div className="row">
					<div className="col">
						<AnimatedTitle
							text={
								tab === 'experience'
									? tabInfo.experience.title
									: tab === 'projects'
									? tabInfo.projects.title
									: tabInfo.education.title
							}
						></AnimatedTitle>
						<AnimatedText
							text={
								tab === 'experience'
									? tabInfo.experience.info
									: tab === 'projects'
									? tabInfo.projects.info
									: tabInfo.education.info
							}
							className="project-p d-inline-block w-100 display-1"
						></AnimatedText>

						<ul
							className="nav nav-pills mb-5 justify-content-center align-items-center"
							id="pills-tab2"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="pills-experience-tab"
									data-mdb-toggle="pill"
									data-mdb-target="#pills-profile2"
									type="button"
									role="tab"
									aria-controls="pills-profile"
									aria-selected="false"
									onClick={() => toggleTab('experience')}
								>
									Experience
								</button>
							</li>

							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="pills-projects-tab"
									data-mdb-toggle="pill"
									data-mdb-target="#pills-home2"
									type="button"
									role="tab"
									aria-controls="pills-home"
									aria-selected="true"
									onClick={() => toggleTab('projects')}
								>
									Projects
								</button>
							</li>

							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="pills-education-tab"
									data-mdb-toggle="pill"
									data-mdb-target="#pills-contact2"
									type="button"
									role="tab"
									aria-controls="pills-contact"
									aria-selected="false"
									onClick={() => toggleTab('education')}
								>
									Education
								</button>
							</li>
						</ul>

						<div className="tab-content" id="pills-tabContent2">
							<div
								className="tab-pane active"
								id="pills-profile2"
								role="tabpanel"
								aria-labelledby="pills-profile-tab2"
							>
								<div className="flex w-full flex-col items-center justify-center">
									<div className="z-0 inline-block h-full w-full pb-56">
										<Experience></Experience>
									</div>
								</div>
							</div>

							<div
								className="tab-pane show"
								id="pills-home2"
								role="tabpanel"
								aria-labelledby="pills-home-tab2"
							>
								<div className="row row-cols-12 g-5 mb-6">
									<div className="col-md-12">
										<FeaturedProject
											type="Featured Project"
											cardTitle=""
											description="Portfolio"
											title="AppTracker"
											summary="A feature-rich Internship and Job App tracker using Express, MongoDB, NodeJs."
											img={projectImg1}
											link="/"
										></FeaturedProject>
									</div>
									<div className="col-md-6">
										<Project
											type="Featured Project"
											cardTitle=""
											description="Portfolio"
											title="AppTracker"
											summary="A feature-rich Internship and Job App tracker using Express, MongoDB, NodeJs."
											img={projectImg1}
											link="/"
										></Project>
									</div>
									<div className="col-md-6">
										<Project
											type="Featured Project"
											cardTitle=""
											description="Portfolio"
											title="AppTracker"
											summary="A feature-rich Internship and Job App tracker using Express, MongoDB, NodeJs."
											img={projectImg1}
											link="/"
										></Project>
									</div>
									<div className="col-md-6">
										<Project
											type="Featured Project"
											cardTitle=""
											description="Portfolio"
											title="AppTracker"
											summary="A feature-rich Internship and Job App tracker using Express, MongoDB, NodeJs."
											img={projectImg1}
											link="/"
										></Project>
									</div>
									<div className="col-md-6">
										<Project
											type="Featured Project"
											cardTitle=""
											description="Portfolio"
											title="AppTracker"
											summary="A feature-rich Internship and Job App tracker using Express, MongoDB, NodeJs."
											img={projectImg1}
											link="/"
										></Project>
									</div>
								</div>
							</div>

							<div
								className="tab-pane"
								id="pills-contact2"
								role="tabpanel"
								aria-labelledby="pills-contact-tab2"
							>
								<div className="flex w-full flex-col items-center justify-center">
									<div className="z-0 inline-block h-full w-full pb-44">
										<Education></Education>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
