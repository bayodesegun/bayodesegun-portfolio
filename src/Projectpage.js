import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Carousel} from 'react-bootstrap';
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
    const backLink = "<< Projects";
    const project = projects[this.props.projectId];
    const carousel = project.images.map((image, index) =>
      <Carousel.Item key={index}>
        <img width={900} height={500} alt={image.caption} src={image.src}/>
        <Carousel.Caption>
          <p className="carousel-cap">{image.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
    const projectTemplate = (
    <Row>
      <Col xs={12} md={6} className="App">
        <Carousel>
          {carousel}
        </Carousel>
      </Col> 
      <Col xs={12} md={6}>
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>
            A more detailed description
          </p>
          <p>
            Technologies:
          </p>
        </div>
      </Col>
    </Row>    
    );

    return (
      <Grid>
        <Header />
        <Row>
          <h4><a href="/#" className="no-underline" onClick={this.back}>{backLink}</a></h4>
        </Row>
        {projectTemplate}
        <Footer />
      </Grid>      
    );
  }
}

export default Projectpage;