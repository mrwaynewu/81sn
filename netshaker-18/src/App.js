import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import { Card, Row, Col, Icon } from 'antd';
import Title from './Bigwords';
import Obfuscate from 'react-obfuscate';

const CardBox = props => <div className={`height-${props.value}`}>{props.children}</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main-outer">
          <div className="Main-inner">
            <div className="Bigwords" >
              <Title />
              </div>
              <div className="mid"></div>
          <Card className="Contact-card" title="Contact Us">
              <Row type="flex" justify="space-around" align="middle">
                <Col span={12}>
                  <CardBox value={50}>
                    <Icon type="mail" className="Mail-icon"/>
                    <div><h3><Obfuscate
                      email='info@netshaker.ca'
                      headers={
                        { subject: 'I want a career mentor' }
                      }/></h3></div>
                  </CardBox>
                </Col>
                <Col span={12}>
                  <CardBox value={50}>
                <img src={require("./qr_code.jpg")} className="Qr-code" alt="qr_code"/>
                    <br /><h3 className="Wechat-id">WeChat ID: ReachMentor</h3>
                  </CardBox>
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
