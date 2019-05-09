import React, { Component } from 'react';
import './App.css';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

class App extends Component {
  render() {
    return (
      <UnderConstruction
        background={{
          textColor: '#fff',
          overlay: {
            color: '#000',
            opacity: '.5'
          }
        }}
        logo={{
          src: 'https://user-images.githubusercontent.com/10855721/57347011-ce8fd100-711e-11e9-9c04-ef9242f3e20c.png',
          alt: 'NetShaker',
          style: {
            width: '30%'
          }
        }}
        description={{
          text: 'Our website is under renovation. We\'ll be here soon, stay tuned.',
          style: {
            maxWidth: '440px',
          }
        }}
        links={[
          {
            url: 'https://www.facebook.com/netshaker',
            image: 'https://image.flaticon.com/icons/svg/220/220200.svg',
          },
          {
            url: 'https://twitter.com/wearenetshaker',
            image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
          },
          {
            url: 'https://linkedin.com/company/netshaker',
            image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
          },
          {
            url: 'mailto:info@netshaker.ca',
            image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
          },
        ]}
      />
    );
  }
}

export default App;
