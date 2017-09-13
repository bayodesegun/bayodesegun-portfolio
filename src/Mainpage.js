import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Projectpage from './Projectpage.js';
import projects from './projects.js';

class Mainpage extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.renderProject = this.renderProject.bind(this);
  }

  renderProject(e) {
    ReactDOM.render(<Projectpage projectId={e.target.id} />, document.getElementById('root'));
  }

  render() {    
    const heading = "<My Portfolio/>";

    const projectList = projects.map((project, index) =>
      <Col key={index} xs={12} md={4}>
        <Thumbnail src={project.src} alt={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>
            <Button id={index} bsStyle="primary" onClick={this.renderProject}>Details...</Button>
          </p>
        </Thumbnail>
      </Col>   
    );

    return (      
      <Grid className="App">
        <Header />
        <Row>        
          <h2><code>{heading}</code></h2>
        </Row>
        {projectList}
        <Footer />   
      </Grid>         
    );
  }
}

export default Mainpage;