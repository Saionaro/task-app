import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import Modal from 'react-modal';
import ListView from '../ListView/ListView';
import PropTypes from 'prop-types';
import ProjectsListItem from '../ProjectsListItem/ProjectsListItem';
import * as actions from '../../actionsFactory';
import './ProjectsRegistry.less';

class ProjectsRegistry extends Component {

   static propTypes = {
   }

   render() {
      return (
         <div className='ProjectsRegistry'>
            <ListView
               template={ProjectsListItem}
               entity='project'
               onClick={this.props.openProject} />
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({});

export default ProjectsRegistry = connect(mapStateToProps, actions)(ProjectsRegistry);