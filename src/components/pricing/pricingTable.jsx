import SlideUp from '@/utils/animations/slideUp'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    title: 'Photography',
    description:
      'Professional photography services for personal branding and business needs.',
    priceLabel: '₦150/session',
    availability: 'Available this month',
    image: '/images/blogs/blog1.png',
  },
  {
    title: 'Brand Strategy',
    description:
      'Comprehensive brand development and strategic planning for entrepreneurs.',
    priceLabel: '₦400/project',
    availability: 'Limited slots this quarter',
    image: '/images/blogs/blog2.png',
  },
  {
    title: 'Social Media Marketing',
    description:
      'Expert social media management and content strategy for maximum engagement.',
    priceLabel: '₦250/month',
    availability: 'Currently available',
    image: '/images/blogs/blog3.png',
  },
]

const PricingTable = () => {
  return (
    <div className="row pt__50">
      {services.map((svc, index) => (
        <SlideUp
          key={index}
          className="col-lg-4 col-md-6 mb-4"
          delay={index}
        >
          <div
            className="position-relative overflow-hidden"
            style={{ borderRadius: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          >
            <div style={{ position: 'relative', paddingTop: '125%' }}>
              <img
                src={svc.image}
                alt={svc.title}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div
              className="position-absolute start-0 bottom-0 w-100 text-white"
              style={{
                padding: '24px',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25), transparent)'
              }}
            >
              <h3 className="fw-bold mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {svc.title}
              </h3>
              <p className="mb-3" style={{ opacity: 0.9 }}>{svc.description}</p>

              <div className="d-flex gap-3 mb-3 flex-wrap">
                <span className="px-3 py-2 rounded-pill bg-white text-dark" style={{ opacity: 0.9 }}>
                  {svc.priceLabel}
                </span>
                <span className="px-3 py-2 rounded-pill bg-white text-dark" style={{ opacity: 0.9 }}>
                  {svc.availability}
                </span>
              </div>

              <div className="d-flex">
                <Link
                  href={'/services'}
                  className="w-100 text-center"
                  style={{
                    background:
                      '#f2d381',
                    color: '#1a1a1a',
                    padding: '12px 16px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </SlideUp>
      ))}
    </div>
  )
}

export default PricingTable