import React from 'react'
import SlideDown from '@/utils/animations/slideDown'
import SlideUp from '@/utils/animations/slideUp'
import Link from 'next/link'

const HomeBlog = ({ className }) => {
    const products = [
        { title: 'Leather Handbag', image: '/images/blogs/blog1.png', price: '₦29,000', rating: '4.5' },
        { title: 'Sneakers', image: '/images/blogs/blog2.png', price: '₦49,000', rating: '4.5' },
        { title: 'Wrist Watch', image: '/images/blogs/blog3.png', price: '₦19,000', rating: '4.5' },
        { title: 'Green Handbag', image: '/images/blogs/blog4.png', price: '₦99,000', rating: '4.5' },
    ]
    return (
        <section className={`blogs ${className}`}>
            <div className="container">
                <SlideDown>
                    <h2 className="title text-center">Physical Products</h2>
                </SlideDown>
                <div className="row g-4 mt-4">
                    {products.map((p, idx) => (
                        <SlideUp key={idx} className="col-lg-3 col-md-6" delay={idx}>
                            <div className="bg-white" style={{ borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
                                <div className="position-relative" style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px', overflow: 'hidden' }}>
                                    {/* Rating */}
                                    <div className="position-absolute top-0 end-0 m-3 d-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(6px)', zIndex: 2 }}>
                                        <i className="fa-solid fa-star" style={{ color: '#ffb703' }}></i>
                                        <span className="fw-semibold">{p.rating}</span>
                                    </div>
                                    {/* Image */}
                                    <div style={{ position: 'relative', paddingTop: '75%' }}>
                                        <img src={p.image} alt={p.title} className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: 'cover' }} />
                                    </div>
                                    {/* Price Chip */}
                                    <div className="position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-pill text-white" style={{ background: '#f2d381' }}>
                                        {p.price}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <Link href="#" className="w-100 d-block text-center" style={{ background: '#f2d381', borderRadius: '999px', padding: '12px 16px', textDecoration: 'none', fontWeight: 600, color: '#1a1a1a' }}>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeBlog