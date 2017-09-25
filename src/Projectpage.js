import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Carousel, Breadcrumb} from 'react-bootstrap';
import Mainpage from './Mainpage.js';
import Header from './Header.js';
import Footer from './Footer.js';
import projects from './projects.js';

class Projectpage extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.back = this.back.bind(this);
  }

  back(e) {
    ReactDOM.render(<Mainpage />, document.getElementById('root'));
  }
  
  render() {
    const project = projects[this.props.projectId];
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
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item href="/#" onClick={this.back}>
            Projects
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {project.name}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <Col xs={12} md={7} className="App">
          <Carousel>
            {carousel}
          </Carousel>
        </Col> 
        <Col xs={12} md={5}>
          <div>
            <h3>{project.name}</h3>            
            <div dangerouslySetInnerHTML={{__html: project.details}} />
            <p>
              <b>Role:</b> {project.role}
            </p>
            <div>
              <b>Technologies</b>
              <h1 dangerouslySetInnerHTML={{__html: project.tech}} />
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