import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={`navigation-header ${props.rootClassName} `}
    >
      <div className="navigation-max-width">
        <img
          alt={props.image_alt}
          src="/playground_assets/logowhite-200h.png"
          className="navigation-image"
        />
        <div className="navigation-nav">
          <NavigationLinks
            rootClassName="navigation-links-root-class-name17"
            className=""
          ></NavigationLinks>
          <button className="navigation-button button-secondary button button-md" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
            {props.button}
          </button>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav1">
            <div className="navigation-container" style={{"marginBottom":"40px"}}>
              <img alt={props.image_alt1} src="/playground_assets/logowhite-200h.png" className="" style={{"height": "48px"}} />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                  <path fill="#fff"
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <NavigationLinks
              rootClassName="navigation-links-root-class-name18"
              className=""
            ></NavigationLinks>
            <button className="button-secondary button button-md" onClick={() => {
              document.querySelector('[data-role="MobileMenu"]').classList.remove("teleport-show");window.scrollTo(0, document.body.scrollHeight);}
              }>
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  image_src: '723f3213-3595-4693-92cd-e38c70b84e24',
  image_alt1: 'image',
  image_src1: '/playground_assets/logo1-1500h.png',
  rootClassName: '',
  button2: 'Contact',
  button: 'Contact',
  image_alt: 'logo',
}

Navigation.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  button2: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Navigation
