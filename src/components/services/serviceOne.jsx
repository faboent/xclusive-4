import React from 'react'
import SlideDown from '@/utils/animations/slideDown'
import SlideUp from '@/utils/animations/slideUp'
import Link from 'next/link'

const ServiceOne = () => {
    const events = [
        {
            id: 1,
            image: "/images/blogs/blog1.png",
            title: "Ashraf & Sultana",
            location: "Kano, Nigeria",
            date: "8/8/2024",
            time: "4:00:00 PM",
            type: "Weddings",
            invitation: true
        },
        {
            id: 2,
            image: "/images/blogs/blog2.png",
            title: "Salma & Abdul",
            location: "Kano, Nigeria",
            date: "7/29/2024",
            time: "4:34:00 PM",
            type: "Weddings",
            invitation: true
        },
        {
            id: 3,
            image: "/images/blogs/blog3.png",
            title: "Suleiman & Maryam",
            location: "Kano, Nigeria",
            date: "7/12/2024",
            time: "3:53:00 PM",
            type: "Weddings",
            invitation: true
        }
    ];

    return (
        <section className="services py-5 mb-5" id="services" style={{ paddingBottom: '120px' }}>
            <div className="container" style={{ marginBottom: '60px' }}>
                {/* Title */}
                <SlideDown>
                    <div className="text-center mb-5">
                        <h1 className="title" style={{ fontSize: '48px' }}>
                            Events
                        </h1>
                    </div>
                </SlideDown>

                <div className="row g-4">
                    {events.map((event) => (
                        <div key={event.id} className="col-lg-4 col-md-6">
                            <SlideUp delay={event.id}>
                                <div className="position-relative rounded-4 overflow-hidden" 
                                    style={{ 
                                        cursor: 'pointer',
                                        backgroundColor: '#f8f9fa',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                    }}>
                                    {/* Event Type Badge */}
                                    <div className="position-absolute top-0 start-0 m-3 z-1 d-flex align-items-center gap-2 bg-white px-2 py-1 rounded-pill" style={{ backdropFilter: 'blur(4px)' }}>
                                        <div className="bg-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                                            <i className="fa-regular fa-image" style={{ fontSize: '12px' }}></i>
                                        </div>
                                        <span style={{ fontSize: '14px' }}>{event.type}</span>
                                    </div>

                                    {/* Location Badge */}
                                    <div className="position-absolute top-0 end-0 m-3 z-1 bg-white px-3 py-1 rounded-pill" style={{ backdropFilter: 'blur(4px)' }}>
                                        <span style={{ fontSize: '14px' }}>Kano</span>
                                    </div>

                                    {/* Main Image */}
                                    <div style={{ position: 'relative', paddingTop: '133%' }}>
                                        <img 
                                            src={event.image} 
                                            alt={event.title}
                                            className="position-absolute top-0 start-0 w-100 h-100"
                                            style={{ 
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>

                                    {/* Event Info Overlay */}
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)',
                                            backdropFilter: 'blur(4px)'
                                        }}>
                                        <h3 className="fs-4 mb-2 fw-bold">{event.title}</h3>
                                        <p className="mb-2 opacity-90" style={{ fontSize: '14px' }}>{event.location}</p>
                                        <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '14px' }}>
                                            <div>
                                                <span>{event.date}</span>
                                                <span className="mx-2 opacity-50">•</span>
                                                <span>{event.time}</span>
                                            </div>
                                            {event.invitation && (
                                                <span className="opacity-75">invitation</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceOne