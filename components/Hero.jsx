import React, { useEffect } from 'react'
import '../style/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120
        });
    })
    return (
        <section className='Hero'>
            <div className="t=wrap">
                <h2 data-aos='fade-up'>Hero Title</h2>
                <p data-aos='fade-up' data-aos-delay="100">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, architecto?
                </p>
            </div>
        </section>
    )
}

export default Hero