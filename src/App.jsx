import './App.css'
import { useState, useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
	useEffect(() => {
		// Your GSAP code here
		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				wrapper: '.wrapper',
				content: '.content',
				smooth: 1.5,
				effects: true,
			})

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

			let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

			itemsL.forEach((item) => {
				gsap.fromTo(
					item,
					{ opacity: 0, x: -50 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							start: '-850',
							end: '-100',
							scrub: true,
						},
					}
				)
			})

			let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

			itemsR.forEach((item) => {
				gsap.fromTo(
					item,
					{ opacity: 0, x: 50 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item,
							start: '-750',
							end: 'top',
							scrub: true,
						},
					}
				)
			})
		}
	}, [])

	return (
		<div className="wrapper">
			<div className="content">
				<NavBar />
				<Banner />
				<Skills />
				<Projects />
			</div>
		</div>
	)
}

export default App
