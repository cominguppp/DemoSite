import React, {Component} from 'react';
import Tracking from '../materials/4k.jpg';

class PeopleTrackingBox extends Component {
      render() {
            return (<div className='align-self-center containers bottom-containers transparent-bg sixteen-nine'>
                  <img src={Tracking} className='tracking-screen'/>
                  <div class="trick"></div>
            </div>)
      }
}

export default PeopleTrackingBox
