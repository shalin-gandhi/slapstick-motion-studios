import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const closeMenu = () => {
  document.querySelector('[data-role="MobileMenu"]').classList.remove("teleport-show");
}

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a className="navigation-links-text Navigation-Link" href="#work" onClick={closeMenu}>
        {props.link2}
      </a>
      <a className="navigation-links-text1 Navigation-Link" href="#about" onClick={closeMenu}>
        {props.link3}
      </a>
      <a className="navigation-links-text2 Navigation-Link" href="#process" onClick={closeMenu}>
        {props.link4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'About Us',
  rootClassName: '',
  link2: 'Works',
  link4: 'Process',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
}

export default NavigationLinks
