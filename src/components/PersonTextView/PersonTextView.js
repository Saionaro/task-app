import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import './PersonTextView.less';

class PersonTextView extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      nickname: PropTypes.string
   }

   getTitle() {
      return `${this.props.name} @${this.props.nickname}`;
   }

   render() {
      return (
         <span className='PersonTextView' title={ this.getTitle() }>{this.props.name}</span>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   name: state.reducer.usersStore[ownProps.id].name,
   nickname: state.reducer.usersStore[ownProps.id].nickname
});

export default PersonTextView = connect(mapStateToProps)(PersonTextView);