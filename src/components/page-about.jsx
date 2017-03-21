import React from 'react'

import '../sass/layout/about.scss'
import '../sass/components/social-links.scss'
import '../sass/components/contact-info.scss'


let About = React.createClass({

    render() {

        return (
            <section id="about">
                <h2 className="text-about">
                    Fresh graduated graphic designer, currently living in São Paulo. 
                    I started designing things as a intern in a Dublin based agency, working for brands such as Jameson and Pizza Hut. 
                    Currently I’m working at Young&Rubicam as a Art Assistant where I’m taking part in important campaigns working for brands such as Itaipava, TNT Energy Drink, VIVO, LG. Check out my work and lets talk.
                </h2>
                <div className="contact-info-container">
                    <img src="/img/giphy.gif" alt="git" className="contact-gif" />
                    <div className="contact-info">
                        <h3 className="contact-info-title">Find Me</h3>
                        <p>nnatalia.santos@outlook.com</p>
                        <ul className="social-links">
                            <li className="social-link"><a href="https://www.facebook.com/nnataliasantos">Facebook</a></li>
                            <li className="social-link"><a href="https://www.instagram.com/nnatsnts/">Instagram</a></li>
                            <li className="social-link"><a href="https://www.behance.net/nnatalia">Behance</a></li>
                            <li className="social-link"><a href="https://www.linkedin.com/in/natalia-santos-a8b83834/en">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
})

export default About
