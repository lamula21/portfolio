import React from 'react'

export const ProjectCard = ({ title, description, img }) => {
	return (
		// total span cols in a width is 12
		// md for medium size screen 4 span cols, 4/12 = 33%, 3 items in one row
		// sm for small size screen 6 span cols, 6/12 = 50%, 2 items in one row
		//col-md-6 col-sm-6

		<div className="proj-imgbx w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full mr-4">
			<img src={img} alt="" />
			<div className="proj-txtx">
				<h4>{title}</h4>
				<span>{description}</span>
			</div>
		</div>
	)
}
