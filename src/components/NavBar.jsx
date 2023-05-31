import React from 'react'
import { useState, useEffect } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

export const NavBar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [active, setActive] = useState(true)
	const [toggleCollapse, setToggleCollapse] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		// useEffect's return to define a cleanup
		// So remove the eventListener
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const toggleActive = (value) => {
		setActive(value)
		setToggleCollapse(false)
	}

	const toggleCollpaseDropDown = () => {
		setToggleCollapse(!toggleCollapse)
	}

	return (
		<Router>
			<header className={scrolled ? 'nav-bar sticky' : 'nav-bar'}>
				<a href="/" className="logo">
					jv
				</a>

				<div className={toggleCollapse ? 'nav-collapse show' : 'nav-collapse'}>
					<ul>
						<li>
							<a
								type="button"
								className={
									active === 'home'
										? 'hvr-underline-from-center active'
										: 'hvr-underline-from-center'
								}
								href="#home"
								onClick={() => toggleActive('home')}
							>
								Home
							</a>
						</li>
						<li>
							<a
								className={
									active === 'skills'
										? 'hvr-underline-from-center active'
										: 'hvr-underline-from-center'
								}
								href="#skills"
								onClick={() => toggleActive('skills')}
							>
								Skills
							</a>
						</li>
						<li>
							<a
								className={
									active === 'projects'
										? 'hvr-underline-from-center active'
										: 'hvr-underline-from-center'
								}
								href="#projects"
								onClick={() => toggleActive('projects')}
							>
								Projects
							</a>
						</li>

						<li>
							<button className="hvr-sweep-to-right">
								<span>Let's Connect</span>
							</button>
						</li>
					</ul>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					onClick={() => toggleCollpaseDropDown()}
				>
					<i className="fas fa-bars"></i>
				</button>
			</header>
		</Router>
	)
}
