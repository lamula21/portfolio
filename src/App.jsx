import './App.css'
import { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

import { gsap } from 'gsap'
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
gsap.registerPlugin(ScrollTrigger)

function App() {
	useEffect(() => {
		// Your GSAP code here
		if (ScrollTrigger.isTouch !== 1) {
			// ScrollSmoother.create({
			// 	wrapper: '.wrapper',
			// 	content: '.content',
			// 	smooth: 1.5,
			// 	effects: true,
			// })

			gsap.fromTo(
				'.banner',
				{ opacity: 1 },
				{
					opacity: 0,
					scrollTrigger: {
						trigger: '.banner',
						start: 'center',
						end: '820',
						scrub: true,
					},
				}
			)
		}
	}, [])

	return (
		<>
			<NavBar />
			<div className="wrapper">
				<div className="content">
					<Banner />
					<div className="coverup"></div>
				</div>
			</div>

			<div className="main-section">
				<Skills />
				<Projects />
			</div>
		</>
	)
}

export default App
