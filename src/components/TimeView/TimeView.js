import React, {
   Component
} from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import {
   taskListFormat,
   fullFormat
} from '../../constants/dateFormats';

Moment.locale('ru');

export default class ProjectsListItem extends Component {

   static propTypes = {
      moment: PropTypes.object.isRequired,
      format: PropTypes.string
   };

   render() {
      return (
         <span className='TimeView'
            title={this.props.moment.format(fullFormat)}>
            {this.props.moment.format(this.props.format || taskListFormat)}
         </span>
      );
   }
}