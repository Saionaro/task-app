import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import Generator from 'random-id';
import PropTypes from 'prop-types';
import SuggestTextField from '../SuggestTextField/SuggestTextField';
import PersonPreview from '../PersonPreview/PersonPreview';
import * as actions from '../../actionsFactory';
import './PersonChooser.less';

class PersonChooser extends Component {

   static propTypes = {
      onSelected: PropTypes.func
   };

   chooserId = Generator(6);

   onSelected() {
      this.props.onSelected && this.props.onSelected(...arguments);
   }

   render() {
      return (
         <div className='PersonChooser'>
            <SuggestTextField
               id={this.chooserId} 
               entityType='user'
               search={this.props.searchUser}
               select={this.props.selectUser}
               clearSuggest={this.props.clearUserSuggest}
               suggestTemplate={PersonPreview}
               onSelected={::this.onSelected} />
         </div>
      );
   }
}

export default PersonChooser = connect(_ => ({}), actions)(PersonChooser);