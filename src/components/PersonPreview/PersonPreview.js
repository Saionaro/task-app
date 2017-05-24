import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo';
import './PersonPreview.less';

class PersonPreview extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      nickname: PropTypes.string.isRequired
   }

   render() {
      return (
         <div className='PersonPreview'>
            <div className='PersonPreview_photo'>
               <Photo
                  id={this.props.id}
                  size={40} />
            </div>
            <div className='PersonPreview_data'>
               {
               this.props.name ?
                  <div className='PersonPreview_name' title={this.props.name}>
                     {this.props.name}
                  </div>
               : ''
               }
               <div className='PersonPreview_nickname' title={'@' + this.props.nickname}>
                  {'@' + this.props.nickname}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   description: state.reducer.usersStore[ownProps.id].description,
   name: state.reducer.usersStore[ownProps.id].name,
   nickname: state.reducer.usersStore[ownProps.id].nickname
});

export default PersonPreview = connect(mapStateToProps)(PersonPreview);