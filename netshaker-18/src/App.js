import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './Background';
import { Card, Row, Col, Icon } from 'antd';
//import WrappedRegistrationForm from './Contact';
import Bigwords from './Bigwords';
import Obfuscate from 'react-obfuscate';


const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class App extends Component {
  render() {
    return (
      <div className="App">


        <div className="Main-outer">
          <div className="Main-inner">
            <div className="Bigwords" >
              <Bigwords />
              </div>
              <div className="mid"></div>
          <Card className="Contact-card" title="Contact Us!">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={12}>
                  <DemoBox value={50}>
                    <Icon type="mail" style={{ fontSize: 120, color: '#192a56'}} />
                    <div><h3><Obfuscate
                      email='info@netshaker.ca'
                      headers={
                        { subject: 'I want a career mentor' }
                      }/></h3></div>
                  </DemoBox>
                </Col>
                <Col span={12}>
                  <DemoBox value={50}>
                <img src={require("./qr_code.jpg")} className="Qr-code"/>
                    <br /><h3 style={{ color: '#192a56'}}>WeChat ID: ReachMentor</h3>
                  </DemoBox>
                </Col>
              </Row>
          </Card>
          </div>
        </div>
        
        <Background />

      </div>
    );
  }
}

export default App;
