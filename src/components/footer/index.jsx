import React from 'react'
import { Link } from 'react-router';

import '../../sass/helpers/variables.scss'
import '../../sass/components/footer.scss'

let Footer = React.createClass({

    render() {

        return (
            <footer className="footer wrapper">
                <ul className="social-links">
                    <li className="social-link"><a href="https://www.facebook.com/nnataliasantos">Facebook</a></li>
                    <li className="social-link"><a href="https://www.instagram.com/nnatsnts/">Instagram</a></li>
                    <li className="social-link"><a href="https://www.behance.net/nnatalia">Behance</a></li>
                    <li className="social-link"><a href="https://www.linkedin.com/in/natalia-santos-a8b83834/en">Linkedin</a></li>
                </ul>

                <p className="email">nnatalia.santos@outlook.com</p>

            </footer>
        );
    }
})

export default Footer
