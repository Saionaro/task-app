import React from 'react';
import {connect} from 'react-redux';
import './ListView.less';

class ListView extends React.Component {
   render() {
      return <div className='ListView'>
         {this.props.list.map(id =>
            <div className='ListView_item' key={id}>
               <this.props.template id={id} onClick={this.props.onClick} />
            </div>
         )}
      </div>;
   }
}

ListView.defaultProps = {
   list: []
};


function mapStateToProps(state, ownProps) {
   return {
      list: state.reducer[`${ownProps.entity}sList`],
      count: state.reducer[`${ownProps.entity}sList`].length
   };
}

export default ListView = connect(mapStateToProps)(ListView);