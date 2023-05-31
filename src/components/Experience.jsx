import { React, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LiIcon } from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null)

	const cmpLink = `https://${companyLink}`
	return (
		// first:mt-9 no margin-top for first element
		// last:mb-0 no margin bottom for last
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
		>
			<LiIcon reference={ref}></LiIcon>
			<div
				data-aos="fade-up"
				data-os-delay="1"
				data-aos-duration="1500"
				data-aos-offset="-50"
			>
				<motion.div>
					<h3 className="capitalize font-bold text-2xl">
						{position}&nbsp;
						<a
							href={cmpLink}
							target="_blank"
							className="company-link capitalize"
						>
							@{company}
						</a>
					</h3>

					<span className="capitalize font-medium text-white/75">
						{time} | {address}
					</span>

					<p>{work}</p>
				</motion.div>
			</div>
		</li>
	)
}

export const Experience = () => {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	})

	return (
		<div className="my-16">
			<div className="w-[75%] mx-auto relative" ref={ref}>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
				/>

				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<Details
						position="Group Project Case Studies"
						company="University of Maryland"
						companyLink="www.umd.edu"
						time="Jan 2023 - May 2023"
						address="College Park, MD"
						work="Collaborated with a team of 3 to create data tables for streamlined job applications. Integrated AI for real-time updates and notifications on application changes."
					></Details>

					<Details
						position="Group Project"
						company="University of Maryland"
						companyLink="www.umd.edu"
						time="Jan 2023 - May 2023"
						address="College Park, MD"
						work="Developed a Python (Flask) web app with a team, creating a UMD-exclusive social networking platform resembling Facebook. Objective: Connect UMD students, expand networks, and foster community."
					></Details>

					<Details
						position="ADS Note Taker"
						company="University of Maryland"
						companyLink="www.adsonline.umd.edu"
						time="Jan 2023 - May 2023 "
						address="College Park, MD"
						work="Offered comprehensive note-taking support in CMSC 335 (Web Dev with JavaScript) for diverse learners, ensuring equal access to educational materials and an inclusive environment."
					></Details>

					<Details
						position="Math Teaching Assistant"
						company="Montgomery College"
						companyLink="www.montgomerycollege.edu"
						time="Jan 2022 - May 2022"
						address="Germantown, MD"
						work="Prepared and taught in-person weekly for over 20 students in the course Calculus II. Learned to better explain technical concepts, gave detailed feedvack, and received a 95% rating from students"
					></Details>

					<Details
						position="Group Project Research"
						company="Montgomery College"
						companyLink="www.montgomerycollege.edu"
						time="Jan 2022 - May 2022"
						address="Rockville, MD"
						work="Teamed up with 3 members for Python-based data analysis and visualization. Extracted and visualized big data from APIs and CSV files via a web app. Assisted faculty in visualizing student enrollment, attendance, schedule, grades, and personal information."
					></Details>
				</ul>
			</div>
		</div>
	)
}
