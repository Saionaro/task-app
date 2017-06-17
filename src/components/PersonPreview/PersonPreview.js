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
      id: PropTypes.number,
      name: PropTypes.string,
      data: PropTypes.object,
      nickname: PropTypes.string.isRequired,
      maxWidth: PropTypes.number
   };

   static defaultProps = {
      maxWidth: 200,
      data: {}
   };

   _getWidth(styles) {
      Object.defineProperty(styles, 'width', {
         value: `calc(${this.props.maxWidth} - 40px)`
      });
      return styles;
   }

   getStyle() {
      let styles = {};
      return this._getWidth(styles);
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
               {this.props.name ?
                  <div className='PersonPreview_name'
                     title={this.props.name}
                     style={ this.getStyle() }>
                        {this.props.name}
                  </div>
               : ''}
               <div className='PersonPreview_nickname'
                  title={'@' + this.props.nickname}
                  style={ this.getStyle() }>
                     {'@' + this.props.nickname}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   const id = typeof ownProps.id === 'number' ? ownProps.id : ownProps.data.id;
   return {
      name: state.user.usersStore[id].name,
      nickname: state.user.usersStore[id].nickname
   };
};

export default PersonPreview = connect(mapStateToProps)(PersonPreview);