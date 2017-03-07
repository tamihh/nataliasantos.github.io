import React from 'react'

import '../sass/layout/about.scss'
import '../sass/components/social-links.scss'
import '../sass/components/contact-info.scss'


let About = React.createClass({

    render() {

        return (
            <section id="about">
                <h2 className="text-about">Lorem ipsum dorlor sit amet, consecterdipisicin g elit, sed do eiusmod tempor incididun ut labore et dolore
                    magna aliqua. enim an minin venian, quis nostrud excitation.</h2>
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
