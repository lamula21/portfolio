import React from 'react'
import { useState, useEffect } from 'react'

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
		scrollRedirect(value)
	}

	const toggleCollpaseDropDown = () => {
		setToggleCollapse(!toggleCollapse)
	}

	const scrollRedirect = (id) => {
		const element = document.querySelector(`#${id}`)
		element.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
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
								id="btn-home"
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
								id="btn-skills"
								type="button"
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
								id="btn-projects"
								type="button"
								onClick={() => toggleActive('projects')}
							>
								Projects
							</a>
						</li>

						<li>
							<button id="btn-connect" className="hvr-sweep-to-right">
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
		</>
	)
}
