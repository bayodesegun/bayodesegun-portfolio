import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
import Mainpage from './Mainpage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import projects from '../data/projects.js';


class Projectpage extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.home = this.home.bind(this);
  }

  home(e) {
    ReactDOM.render(<Mainpage />, document.getElementById('root'));
  }

  prevNext(e) {
    const main = new Mainpage();
    main.renderProject(e);
  }

  render() {
    const project = projects[this.props.projectId];
    const repo = project.urls.repo ? project.urls.repo : '/#';
    const live = project.urls.live ? project.urls.live : '/#';
    const target = project.urls.repo ? '_blank' : '_self';
    const prev = (this.props.projectId > 0) ? (this.props.projectId - 1) : (projects.length - 1);
    const next = (this.props.projectId < (projects.length - 1)) ? (parseInt(this.props.projectId, 10) + 1) : 0;
    const carousel = project.images.map((image, index) =>
      <Carousel.Item key={index}>
        <img className="carousel-img" alt={image.caption} src={image.src}/>
        <Carousel.Caption>
          <p className="carousel-cap">{image.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
    const projectTemplate = (
    <div>
      <Row className="alert-info">
        <Col className="col-xs-12">
          <Col className="text-left" xs={4}>
            <a id={prev} onClick={this.prevNext} className="btn btn-link" href="/#"><i className="fa fa-angle-double-left" aria-hidden="true"></i> Prev</a>
          </Col>
          <Col className="text-center" xs={4}>
            <a onClick={this.home} className="btn btn-link" href="/#"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
          </Col>
          <Col className="text-right" xs={4}>
            <a id={next} onClick={this.prevNext} className="btn btn-link" href="/#">Next <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a>
          </Col>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} md={7} className="App">
          <Carousel>
            {carousel}
          </Carousel>
        </Col>
        <Col xs={12} md={5}>
          <div>
            <h4 className="alert-info">What is {project.name}?</h4>
            <div dangerouslySetInnerHTML={{__html: project.details}} />
            <div>
              <h4 className="alert-info">My role and contribution</h4>
              <p>{project.role}</p>
            </div>
            <div>
              <h4 className="alert-info">Technologies used</h4>
              <div className="tech-stack" dangerouslySetInnerHTML={{__html: project.tech}} />
            </div>
            <div>
              <h4 className="alert-info">Project links</h4>
              <p><code> <i className="fa fa-code" aria-hidden="true"></i> Repository:</code>
                <a target={target} href={repo}>{ project.urls.repo ? project.urls.repo : 'private'} <i className="fa fa-external-link-square" aria-hidden="true"></i></a>
              </p>
              <p><code><i className="fa fa-globe" aria-hidden="true"></i> Live url:</code>
                <a target={target} href={live}>{ project.urls.live ? project.urls.live : 'internal'} <i className="fa fa-external-link-square" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>

      </Row>
    </div>
    );

    return (
      <Grid>
        <Header />
        {projectTemplate}
        <Footer />
      </Grid>
    );
  }
}

export default Projectpage;
