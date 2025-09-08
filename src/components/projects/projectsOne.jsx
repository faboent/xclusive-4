import React from 'react'
import { projectsOneData } from '@/db/projectsOneData'
import ProjectsUseCase from '../projectsUseCase'
import SlideDown from '@/utils/animations/slideDown'
import SlideUp from '@/utils/animations/slideUp'
import Link from 'next/link'

const ProjectsOne = ({ isProjectUseCaseShow }) => {
    return (
        <section className="projects py-4">
            <div className="container">
                {/* title Start */}
                <SlideUp className="projects__title">
                    <div className="my-3 d-flex flex-column align-items-center justify-content-center text-center">
                        <h1 className="title" style={{ color: '#b273ff' }}>Tagline</h1>
                        <p className="mt-3" style={{ color: '#ff4d4f', fontSize: '18px' }}>Empowering entrepreneurs to build brands they love</p>
                        <h3 className="mt-5" style={{ fontWeight: 700, color: 'white' }}>Content Hub</h3>
                        <ul className="d-flex justify-content-center gap-3 footer__socal mt-4">
                            <li>
                                <Link href={"#"}>
                                    <i className="fa-brands fa-instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <i className="fa-brands fa-youtube" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </SlideUp>
                {/* title End */}
               
            </div>
        </section>

    )
}

export default ProjectsOne