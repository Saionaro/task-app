import React, {
   Component
} from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

Moment.locale('ru');

export default class TimeDaltaView extends Component {

   static propTypes = {
      fst: PropTypes.object.isRequired,
      scd: PropTypes.object.isRequired
   };

   calc() {
      const diff = this.props.scd.diff(this.props.fst);
      return Moment.duration(diff).humanize();
   }

   render() {
      const delta = this.calc();
      return (
         <span className='TimeDeltaView'
            title={delta}>
            {delta}
         </span>
      );
   }
}