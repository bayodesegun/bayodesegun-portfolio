import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Thumbnail, Button, Image} from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Projectpage from './Projectpage.js';
import projects from './projects.js';
import bayode from './images/bayode.jpg';

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
    const portfolio = '<Portfolio />';
    const projectList = projects.map((project, index) =>    
      <Col key={index} xs={12} md={3}>
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
        <Row className="intro">
          <Col className="col-md-6 col-md-offset-3 col-xs-12">
            <Image circle  src={bayode} title="Bayode at work..." alt="Bayode at work" />
            <h4>Hi, I'm <b>Bayode</b>, a <code>support & full stack software engineer</code>, aka <code><i>support developer</i></code>. 
            I love solving problems by supporting and building software. I'm always on the lookout for exciting challenges in 
            <code>technical support and desktop, web & mobile app development</code>.</h4>
          </Col>
        </Row>
        <hr />
        <h3 className="text-center alert-info"><code>{portfolio}</code></h3>
        {projectList}
        <Footer />   
      </Grid>         
    );
  }
}

export default Mainpage;