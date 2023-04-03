import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import PortofolioCard from '../components/portofolio-card'
import './home.css'
import bgVideo from '../views/BlackBG.mp4';

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Slapstick Motion Studios</title>
        <meta property="og:title" content="Slapstick Motion Studios" />
      </Helmet>
      <Navigation rootClassName="navigation-root-class-name"></Navigation>
      <main className="home-main">
        <div className="home-hero section-container" style={{"position": "relative"}}>
          <video autoPlay muted loop style={{"width": "100%", "height": "100", "position": "absolute", "objectFit": "cover", "zIndex": "0"}}>
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                <span>
                  Hi, We are Slapstick.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Lets get your brand moving!</span>
              </h1>
              {/* <button className="home-button button-secondary button button-md">
                Showreel
              </button> */}
            </div>
          </div>
        </div>
        <div className="home-portofolio section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-text-container">
              <span className="home-text04" id="work">our work</span>
              <h2 className="home-text05">Explore our portfolio</h2>
              <span className="home-text06">
                <span>
                  The blend of motion and sound is magical, and watching your
                  concept
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>come alive through animation is truly amazing.</span>
              </span>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text10 tab-selector-btn">Explainer</span>
              <span className="home-text11 tab-selector-btn">E-learning</span>
              <span className="home-text12 tab-selector-btn">Motion Graphics</span>
              <span className="home-text13 tab-selector-btn">Infographics</span>

            </div>
            <div className="home-tab-selector-cards-container">
              <a
                href="https://www.youtube.com/watch?v=9tOh2CIoMgQ"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                  image_src="/playground_assets/TataSteel.png"
                  rootClassName="portofolio-card-root-class-name"
                  className="home-component1"
                  project_title="Tata Steel | Character Explainer"
                ></PortofolioCard>
              </a>
              <a
                href="https://youtu.be/ybjJOHvvPHY"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                image_src="/playground_assets/CTOTalk.png"
                project_title="CTOTalk | Kinetic Typography"
                rootClassName="portofolio-card-root-class-name5"
                ></PortofolioCard>
              </a>
              <a
                href="https://youtu.be/jjctKqL3CqA"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                image_src="/playground_assets/Antarang.png"
                project_title="Antarang | Infographics"
                rootClassName="portofolio-card-root-class-name4"
                ></PortofolioCard>
              </a>
              <a
                href="https://youtu.be/6e6pDcYCNVY"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                image_src="/playground_assets/LeadCRM.png"
                project_title="LeadCRM | 2D Motion Graphics"
                rootClassName="portofolio-card-root-class-name3"
                ></PortofolioCard>
              </a>
              <a
                href="https://youtu.be/MF8BTudFYzU"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                image_src="/playground_assets/BuddyBoard.png"
                project_title="BudyBoard | 2D Explainer"
                rootClassName="portofolio-card-root-class-name2"
                ></PortofolioCard>
              </a>
              <a
                href="https://youtu.be/3HOEUbKxahY"
                target="_blank"
                rel="noreferrer noopener"
              >
                <PortofolioCard
                image_src="/playground_assets/LulaSafe.png"
                project_title="Lula Insurance | 2D App Explainer"
                rootClassName="portofolio-card-root-class-name1"
                ></PortofolioCard>
              </a>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@SlapstickMotionStudios"
            target="_blank"
            rel="noreferrer noopener"
            className="home-primary button-secondary button-lg button"
          >
            See all projects
          </a>
        </div>
        <div className="home-about section-container" id="about">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span className="home-text16">about us</span>
              <h2 className="home-text17">
                We are an animation and motion design studio. We create animated
                videos.
              </h2>
              <span className="home-text18">
                We take pride in the name Slapstick. It refers to a wooden
                device that was used to create sound that grabs attention during
                a stage play or drama, back in medieval times. This perfectly
                describes our visual strategy. To grab eyeballs, and bring your
                customers to you, through a journey of emotional visuals and a
                narrative that states excellence. Also, a little humor never
                hurts!
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container" id="process">
          <div className="home-max-width3 max-content-container">
            <span className="home-text19">Our process</span>
            <h2 className="home-text20">
              Process is just progress with a few different letters!
            </h2>
            <div className="home-step">
              <Player
                src="/Lottie/Purpose.json"
                hover
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node"
              ></Player>
              <div className="home-container1">
                <span className="home-text21">Purpose</span>
                <span className="home-text22">
                  At the outset, we take the time to listen and ask questions to
                  truly grasp the essence of your brand. This helps us create a
                  script that reflects your individuality and tells your story
                  in the most engaging way possible. Additionally, we strive to
                  understand the purpose of your video so that we can tailor our
                  approach to achieving your specific goals
                </span>
              </div>
            </div>
            <div className="home-step1">
              <Player
                src="/Lottie/Content.json"
                hover
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node1"
              ></Player>
              <div className="home-container2">
                <span className="home-text23">Content</span>
                <span className="home-text24">
                  We understand the value of visual storytelling, and we focus
                  on finding the perfect technique to bring your story to life,
                  whether it&apos;s 2D, 3D, Vector, Cut-out, or hand-drawn. We
                  collaborate closely with you, sharing sketches and storyboards
                  to ensure that we capture your vision and generate excitement
                  for the final product among our animation team.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <Player
                src="/Lottie/Animation.json"
                hover
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node2"
              ></Player>
              <div className="home-container3">
                <span className="home-text25">Animation</span>
                <span className="home-text26">
                  <span>All right! Its time to get your brand moving!</span>
                  <br className="home-text28"></br>
                  <br></br>
                  <span>
                    We dive into the detailed animation with a solid framework
                    and a team of insanely talented animators. We instill
                    motion, emotion, character and all the things that bring the
                    visuals alive. No matter how challenging it becomes, it
                    remains the most loved part of the process.
                  </span>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <Player
                src="/Lottie/Audio.json"
                hover
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node3"
              ></Player>
              <div className="home-container4">
                <span className="home-text31">Audio</span>
                <span className="home-text32">
                  Right from the beginning of the project, we give careful
                  thought to sound, score, and voiceover, and we continue to do
                  so at every stage of development. Our aim is to create a
                  cohesive and distinctive audio-visual experience that evokes
                  the appropriate emotions and enhances your story. Now its your
                  turn to listen to it.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text33">what are you waiting?</span>
            <h2 className="home-text34">PROJECT?</h2>
            <span className="home-text35">
              We won&apos;t mind a project that makes us think out of the box,
              again. We want to upscale, deliver visuals that speak a story that
              everyone wants to hear. We want to show, tell, make people laugh
              and do work which is good. Same? Then shoot!
            </span>
          </div>
        </div>
      </main>
      <div className="home-footer section-container" style={{"paddingTop": 0}}>
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <Player
                src="/Lottie/Contact.json"
                speed="1"
                hover
                background="transparent"
                className="home-lottie-node4"
              ></Player>
              <div className="home-navigate-container">
                <a className="home-text36" href='https://wa.me/+917899629989' target="_blank">(+91) 7899629989</a>
                <a className="home-text37" href='mailto:work@slapstick.in'>work@slapstick.in</a>
              </div>
              <Player
                src="/Lottie/Location.json"
                speed="1"
                hover
                loop
                background="transparent"
                className="home-lottie-node5"
              ></Player>
              <div className="home-contact-container" id="#contact">
                <span className="home-text38">
                  <span>263, B.B. Ganguly Street</span>
                  <br></br>
                  <span>Kolkata, W.B.</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-subscribe-container">
              <img
                alt="image"
                src="/playground_assets/logowhite-200h.png"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width6 max-content-container">
          <span className="home-text43">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text45">Slapstick </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text47">Slapstick</span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
