import { React, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { LiIcon } from './LiIcon'

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null)

	return (
		// first:mt-9 no margin-top for first element
		// last:mb-0 no margin bottom for last
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
		>
			<LiIcon reference={ref}></LiIcon>

			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'just' }}
			>
				<h3 className="edu-title capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					{type}&nbsp;
				</h3>

				<span className="capitalize font-medium text-white/75 xs:text-sm">
					{time} | {place}
				</span>

				<p className="font-medium w-full md:text-sm">{info}</p>
			</motion.div>
		</li>
	)
}

export const Education = () => {
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
						type="Bachelor of Science In Computer Science"
						time="2022-2024"
						place="University of Maryland College Park"
						info="Relevant courses included Data Structures and Algorithms, Computer System Engineering and Web & Mobile Development"
					></Details>

					<Details
						type="Associate's Degree with Honors"
						time="2020-2022"
						place="Montgomery College Rockville"
						info="Major focus on building a strong foundation in computer science principles and practical skills including OOP, Data Structures, and Data Visualization "
					></Details>

					<Details
						type="Online Coursework"
						time="2016-2020"
						place="Coursera and EdX"
						info="Completed courseworks in web development and mobile development technologies"
					></Details>
				</ul>
			</div>
		</div>
	)
}
