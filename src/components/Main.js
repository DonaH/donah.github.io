import PropTypes from 'prop-types'
import React from 'react'

import loneHike from '../images/loneHike.jpg'
import myPic from '../images/myPic.gif'
import colors from '../images/colors.png'
import cit from '../images/cit.png'
import cit2 from '../images/cit2.png'
import beginGrading from '../images/beginGrading.png'
import recordedGrading from '../images/recordedGrading.png'
import runReports from '../images/runReports.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            I love working with designs, from colors, typography, layout, 
            to transitions and interactions, creating a smooth work flow 
            and high usability.  And based on the prototype, I help program 
            the frontend and bring the product to live.
          </p>
          <span className="image main">
            <img src={colors} alt="colors per design system" />
          </span>
          <p>
            Using high fidelity prototypes to demo the workflow, so 
            project managers, developers, and stakeholders can visualize, 
            discuss, and iterate through the product. Often times, we would 
            discover elements that would be very helpful to the users or 
            provide the backend team key information that some params in 
            the query would ease the frontend api call greatly, thus improve 
            app's performance. Other times, we would eliminate elements that 
            are simply not necessary. 
          </p>
          <span className="image main">
            <img src={cit2} alt="course integration tools extended" />
          </span>
          <span className="image main">
            <img src={beginGrading} alt="interactive grading feature" />
          </span>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            My principle for work is using simple, elegant, responsive design 
            with strong empathy from users' perspective and effective framework 
            to deliver that experience. All the while, working together along 
            side comrades like fellow developer, graphic designer, project 
            manager, quality assurance manager... to achieve the ultimate goal 
            of delightful product that's truly impactful.
          </p>
          <span className="image main">
            <img src={runReports} alt="run reports landing page" />
          </span>
          <p>
            I prototype and code various projects. My favorite prototyping tool 
            is Xd currently. Most recently, there is an extension out in VS Code 
            to incorporate design system generated in Xd for development. But 
            I've heard good things about Figma, and am eager to learn more 
            about it. 
          </p>
          <span className="image main">
            <img src={cit} alt="course integration tools" />
          </span>
          <span className="image main">
            <img src={recordedGrading} alt="gradings recorded" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            About me?  Hmm... I'm really not that interesting. Besides work, 
            I love browsing on latest web trends, technologies, learn a new 
            tool, trying it out. And I love learning to play piano, finding 
            a piece of music and play it through EVENTUALLY (let me tell you, 
            it's a slow process, but gratifying). Other than that, I bike in 
            the weekends and love to make and share food. This is one of my 
            favorite image from unsplash.
          </p>
          <span className="image main">
            <img src={loneHike} alt="favorite pic from unsplash" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <span className="image img">
            <img className="myPic" src={myPic} alt="profile picture" />
          </span>
          <form method="post" action="https://formspree.io/f/xknkzpvk">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/donah/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DonaH"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
