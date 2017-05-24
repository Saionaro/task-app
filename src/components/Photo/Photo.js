import React, {
   Component
} from 'react';
import './Photo.less';
import defaultPhoto from '../../img/people.svg';
import PropTypes from 'prop-types';

export default class Photo extends Component {

   static propTypes = {
      id: PropTypes.number,
      size: PropTypes.number.isRequired
   }

   makeUrl() {
      if(false && this.props.id) {
         return ['/person/photo/', this.props.id].join('');
      } else {
         return defaultPhoto;
      }
   }

   makeStyle() {
      return {
         width: this.props.size,
         height: this.props.size
      };
   }

   render() {
      return (
         <div className='Photo'
            style={ this.makeStyle() }>
            <img className='Photo_img' src={ this.makeUrl() } />
         </div>
      );
   }
}