import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import './UserProfile.less';
import * as actions from '../../actionsFactory';

class UserProfile extends Component {

   static propTypes = {
      id: PropTypes.number
   }

   componentDidMount() {
      this.props.markTab('profile');
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

const mapStateToProps = (state, ownProps) => ({});

export default UserProfile = connect(mapStateToProps, actions)(UserProfile);