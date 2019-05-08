import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import { Card, Row, Col, Icon } from 'antd';
import Title from './Bigwords';
import Obfuscate from 'react-obfuscate';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const CardBox = props => <div className={`height-${props.value}`}>{props.children}</div>;

class App extends Component {
  render() {
    return (
      <UnderConstruction
        background={{
          image: 'https://github.com/mrwaynewu/81sn/blob/reno19/netshaker-18/src/background.jpg?raw=true',
          textColor: '#fff',
          overlay: {
            color: '#000',
            opacity: '.5'
          }
        }}
        logo={{
          src: 'https://github.com/mrwaynewu/81sn/blob/reno19/netshaker-18/src/logo.png',
          alt: 'NetShaker'
        }}
        title={{
          text: 'Rubbby'
        }}
        description={{
          text: 'Our website is under construction. We\'ll be here soon, subscribe to be notified',
          style: {
            maxWidth: '440px',
          }
        }}
        subscribe={{
          placeholder: 'Enter your email',
          buttonText: 'Subscribe',
          onSubmit: (value) => {
            console.log('user typed email :', value);
          }
        }}
        links={[
          {
            url: 'https://www.facebook.com/',
            image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
          },
          {
            url: 'https://www.twitter.com/',
            image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
          },
          {
            url: 'https://www.linkedin.com/',
            image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
          },
          {
            url: 'mailto:someone@example.com',
            image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
          },
        ]}
      />
    );
  }
}

export default App;
