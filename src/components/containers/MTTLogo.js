import React, { Component } from 'react';
import Logo from '../materials/mttlogo.jpg';

class MTTLogo extends Component {
      render() {
            return (
                  <div className='app-logo-box align-self-center containers transparent-bg'>
                        <img src={Logo} />
                        <div class="trick"></div>
                  </div>
            )
      }
}

export default MTTLogo
