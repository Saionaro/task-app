import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import './UserProfile.less';

export default class UserProfile extends Component {

   static propTypes = {
      id: PropTypes.number
   }

   render() {
      return (
         <div className='UserProfile'>
            <div className='UserProfile_nickname'>@saio</div>
            <div className='UserProfile_settings'>
               somesettings
            </div>
         </div>
      );
   }
}