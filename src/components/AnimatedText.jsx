import React from 'react'
import { motion } from 'framer-motion'

const quote = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.5,
		},
	},
}

export const AnimatedText = ({ text, className = '' }) => {
	return (
		<div className="col-12 mx-auto py-2 d-flex align-items-center justify-content-center text-center overflow-hidden">
			<motion.p
				className={`${className}`}
				variants={quote}
				initial="initial"
				animate="animate"
			>
				{text.split(' ').map((word, index) => (
					<span key={word + '-' + index} className="d-inline-block">
						{word}&nbsp;
					</span>
				))}
			</motion.p>
		</div>
	)
}
