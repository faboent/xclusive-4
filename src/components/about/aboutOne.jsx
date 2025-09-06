import React from 'react'
import Partner from '../partner'
import { partnerOneLogos } from '@/db/partnerOneLogos'
import SlideUp from '@/utils/animations/slideUp'
import SlideDown from '@/utils/animations/slideDown'
import Link from 'next/link'

const AboutOne = () => {
    const galleryImages = [
        {
            id: 1,
            imgSrc: "/images/about/Rectangle105.png",
            title: "Digital Marketing Strategy",
            category: "Marketing"
        },
        {
            id: 2,
            imgSrc: "/images/about/Rectangle105.png",
            title: "Content Creation",
            category: "Design"
        },
        {
            id: 3,
            imgSrc: "/images/about/Rectangle105.png",
            title: "Social Media Campaign",
            category: "Marketing"
        },
        {
            id: 4,
            imgSrc: "/images/about/Rectangle105.png",
            title: "Brand Development",
            category: "Branding"
        },
        {
            id: 5,
            imgSrc: "/images/about/Rectangle105.png",
            title: "Digital Analytics",
            category: "Analytics"
        }
    ];

    return (
        <section className="about py__130" id="about">
            <div className="container">
                <SlideDown>
                    <div className="text-center mb-5">
                        <h1 className="title" style={{ fontSize: '48px' }}>
                            Media Gallery
                        </h1>
                    </div>
                </SlideDown>

                <div className="row g-4 mt-4">
                    {galleryImages.map(({ id, imgSrc, title, category }) => (
                        <div key={id} className="col-lg-4 col-md-6">
                            <SlideUp delay={id}>
                                <div className="about__wapper_center position-relative overflow-hidden rounded-3" style={{ cursor: 'pointer' }}>
                                    <img 
                                        src={imgSrc} 
                                        alt={title} 
                                        className="w-100"
                                        style={{ 
                                            aspectRatio: '1/1',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                    <div 
                                        className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                            transform: 'translateY(0)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <h4 className="mb-1">{title}</h4>
                                        <p className="mb-0 small">{category}</p>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-5">
                    <Partner data={partnerOneLogos} />
                </div> */}
            </div>
        </section>
    )
}

export default AboutOne