import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Lottie from 'lottie-react'
import lottieData from '../assets/lottie.json'
import lottieData2 from '../assets/lottie2.json'

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const toRotate = [
		'Jose Valdivia',
		'Full Stack Developer',
		'Creative Web Designer',
		'UMD Student',
		'Problem Solver',
		'Passionate Learner',
		'JavaScript Lover',
	]
	const period = 2000

	// responsible for typing and deleting
	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		// If deleting take out one char, otherwise print one char
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			// set interval for deleting char effect
			// each time char deleted, next char deleted faster
			setDelta((prevDelta) => prevDelta / 2)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true) // once finished word printed, start deleting
			setDelta(period) // reset
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false) // once finished deleting, start printing
			setLoopNum(loopNum + 1) // move to the next word rotating
			setDelta(300 - Math.random() * 100) // set interval for typing char effect
		}
	}

	return (
		<section className="banner" id="home">
			<div className="container">
				<div className="container-2 align-items-center row lg:px-24 md:px-10 sm:px-42 w-full">
					<div data-speed="0.8" className="col-xl-7 col-md-6 col-12">
						<h1 data-aos="fade-left" data-aos-delay="250">
							Hi! I'm <span className="wrap">{text}</span>
						</h1>
						<p data-aos="fade" data-aos-delay="1500">
							As a skilled programmer, I am dedicated to turning ideas into
							innovative web applications. Discover a collection of my latest
							projects, showcasing my expertise in Computer Science and Web
							Development.
						</p>

						<a
							className="btn-resume"
							type="button"
							target="_blank"
							href="https://www.terpconnect.umd.edu/~jvaldiv8/csterpconnect/josevaldivia-resume.pdf"
						>
							Resume<i className="bi bi-box-arrow-up-right"></i>
						</a>

						<a className="btn-more" type="button" href="#skills">
							See More<i className="bi bi-arrow-right-circle"></i>
						</a>
					</div>
				</div>

				<div className="div-lottie col-xl-5 col-md-6 col-12">
					<div data-speed="1.2" id="lottie-container2">
						<Lottie animationData={lottieData} loop autoplay />
					</div>

					<div data-speed="1.2" id="lottie-container">
						<Lottie animationData={lottieData2} loop autoplay />
					</div>
				</div>
			</div>
		</section>
	)
}
