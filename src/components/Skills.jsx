import { React, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/meter1.svg'
import { motion, useScroll } from 'framer-motion'

export const Skills = () => {
	const responsive = {
		largeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
	}
	return (
		<section className="skills" id="skills">
			<div className="container">
				<div className="skills-bx">
					<div className="skills-border"></div>
					<motion.h2
						initial={{ y: 50 }}
						whileInView={{ y: 0 }}
						transition={{ duration: 1 }}
					>
						Skills
					</motion.h2>
					<p data-aos="fade" data-aos-delay="1000" data-aos-offset="10">
						Unleashing a diverse array of skills that bring life to my projects.
						With an insatiable curiosity and a passion for problem-solving, I
						thrive in the exhilarating world of programming.
					</p>
					<br />

					<Carousel
						responsive={responsive}
						infinite={true}
						className="owl-carousel owl-theme skills-slider"
					>
						<div className="item">
							<h1>99%</h1>
							<img src={meter1} alt="Image" />
							<h5>Teaching</h5>
						</div>

						<div className="item">
							<h1>98%</h1>
							<img src={meter1} alt="Image" />
							<h5>Web Development</h5>
						</div>
						<div className="item">
							<h1>95%</h1>
							<img src={meter1} alt="Image" />
							<h5>Data Structures & Algorithms</h5>
						</div>
						<div className="item">
							<h1>95%</h1>
							<img src={meter1} alt="Image" />
							<h5>MERN</h5>
						</div>

						<div className="item">
							<h1>90%</h1>
							<img src={meter1} alt="Image" />
							<h5>Git Control</h5>
						</div>

						<div className="item">
							<h1>90%</h1>
							<img src={meter1} alt="Image" />
							<h5>Flask</h5>
						</div>

						<div className="item">
							<h1>85%</h1>
							<img src={meter1} alt="Image" />
							<h5>Rust</h5>
						</div>

						<div className="item">
							<h1>85%</h1>

							<img src={meter1} alt="Image" />
							<h5>Ocaml</h5>
						</div>

						<div className="item">
							<h1>85%</h1>
							<img src={meter1} alt="Image" />
							<h5>Ruby</h5>
						</div>

						<div className="item">
							<h1>80%</h1>
							<img src={meter1} alt="Image" />
							<h5>C</h5>
						</div>

						<div className="item">
							<h1>75%</h1>
							<img src={meter1} alt="Image" />
							<h5>Java</h5>
						</div>

						<div className="item">
							<h1>70%</h1>
							<img src={meter1} alt="Image" />
							<h5>SQL</h5>
						</div>

						<div className="item">
							<h1>70%</h1>
							<img src={meter1} alt="Image" />
							<h5>Mobile Development</h5>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	)
}
