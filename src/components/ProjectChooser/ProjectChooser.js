import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import Generator from 'random-id';
import PropTypes from 'prop-types';
import SuggestTextField from '../SuggestTextField/SuggestTextField';
import ProjectMiniCard from '../ProjectMiniCard/ProjectMiniCard';
import * as actions from '../../actionsFactory';
import './ProjectChooser.less';

class ProjectChooser extends Component {

   static propTypes = {
      onSelected: PropTypes.func
   };

   chooserId = Generator(6);

   onSelected() {
      this.props.onSelected && this.props.onSelected(...arguments);
   }

   render() {
      return (
         <div className='ProjectChooser'>
            <SuggestTextField
               id={this.chooserId} 
               entityType='project'
               search={this.props.searchProject}
               select={this.props.selectProject}
               clearSuggest={this.props.clearProjectSuggest}
               suggestTemplate={ProjectMiniCard}
               onSelected={::this.onSelected} />
         </div>
      );
   }
}

export default ProjectChooser = connect(_ => ({}), actions)(ProjectChooser);