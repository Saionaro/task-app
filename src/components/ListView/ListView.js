import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import './ListView.less';

class ListView extends Component {

   static propTypes = {
      entity: PropTypes.string.isRequired,
      template: PropTypes.func.isRequired
   };

   static defaultProps = {
      list: []
   };

   render() {
      return (
         <div className='ListView'>
            {this.props.list.map(id =>
               <div className='ListView_item' key={id}>
                  <this.props.template id={id} onClick={this.props.onClick} />
               </div>
            )}
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   list: state.reducer[`${ownProps.entity}sList`],
   count: state.reducer[`${ownProps.entity}sList`].length
});

export default ListView = connect(mapStateToProps)(ListView);