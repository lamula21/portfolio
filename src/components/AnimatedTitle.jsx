import React from 'react'
import { motion } from 'framer-motion'

const quote = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
}

const singleWord = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
}

export const AnimatedTitle = ({ text, className = '' }) => {
	return (
		<div className="col-12 mx-auto py-2 d-flex align-items-center justify-content-center text-center overflow-hidden">
			<motion.h2
				className={`d-inline-block w-100 display-1${className}`}
				variants={quote}
				initial="initial"
				animate="animate"
			>
				{text.split(' ').map((word, index) => (
					<motion.span
						key={word + '-' + index}
						variants={singleWord}
						className="d-inline-block"
					>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h2>
		</div>
	)
}
