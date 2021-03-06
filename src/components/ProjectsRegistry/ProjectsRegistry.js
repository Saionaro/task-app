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
      projectsList: PropTypes.array,
      projectsCount: PropTypes.number
   }

   componentDidMount() {
      this.props.markTab('projects');
   }

   render() {
      return (
         <div className='ProjectsRegistry'>
            <div className='button button__normal ProjectsRegistry_new-project-button'
               onClick={this.props.newProject}>+Проект</div>
            <ListView
               template={ProjectsListItem}
               list={this.props.projectsList}
               emptyData='У вас нет проектов'
               onClick={this.props.openProject} />
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   projectsList: state.project.projectsList.map(id => state.project.projectsStore[id]),
   projectsCount: state.project.projectsList.length
});

export default ProjectsRegistry = connect(mapStateToProps, actions)(ProjectsRegistry);