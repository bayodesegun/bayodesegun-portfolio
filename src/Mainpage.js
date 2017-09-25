import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button, Breadcrumb} from 'react-bootstrap';
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
    console.log(e.target.id);
    ReactDOM.render(<Projectpage projectId={e.target.id} />, document.getElementById('root'));
  }

  render() {    
    const projectList = projects.map((project, index) =>    
      <Col key={index} xs={12} md={4}>
        <Thumbnail  src={project.src} alt={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>
            <Button id={index} bsStyle="success" onClick={this.renderProject}>Click for details...</Button>
          </p>
        </Thumbnail>
      </Col>   
    );

    return (      
      <Grid className="App">
        <Header />
        <Row className="text-left">        
          <Breadcrumb>
            <Breadcrumb.Item active>
              Projects
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        {projectList}
        <Footer />   
      </Grid>         
    );
  }
}

export default Mainpage;