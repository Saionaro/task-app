import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import TimeView from '../TimeView/TimeView';
import PersonPreview from '../PersonPreview/PersonPreview';
import {
   taskListFormat
} from '../../constants/dateFormats';
import ListView from '../ListView/ListView';
import TasksListItem from '../TasksListItem/TasksListItem';
import * as actions from '../../actionsFactory';
import './ProjectView.less';

class ProjectView extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      createDate: PropTypes.object,
      author: PropTypes.number,
      project: PropTypes.number,
      tasksList: PropTypes.array
   }

   render() {
      return (
         <div className="ProjectView">
            <div className="ProjectView_head">
               <div className='ProjectView_time'>
                  <TimeView
                     moment={this.props.createDate}
                     format={taskListFormat} />
               </div>
            </div>
            <div className="ProjectView_body">
               <PersonPreview
                  id={this.props.author} />
               <div className="ProjectView_description"
                  title={this.props.description}>
                  {this.props.description}
               </div>
               <div className='ProjectView_inline-wrapper'>
                  <div className="ProjectView_tasks">
                     <div className="ProjectView_label">Список задач</div>
                     <ListView
                        template={TasksListItem}
                        list={this.props.tasksList}
                        onClick={this.props.openTask} />
                  </div>
                  <div className="ProjectView_team">
                     <div className="ProjectView_label"
                        title='Участники'>Участники</div>
                     <ListView
                        template={PersonPreview}
                        list={this.props.teamList} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   description: state.project.projectsStore[ownProps.id].description,
   createDate: state.project.projectsStore[ownProps.id].createDate,
   author: state.project.projectsStore[ownProps.id].author,
   project: state.project.projectsStore[ownProps.id].project,
   tasksList: state.project.projectsStore[ownProps.id].tasks.map(id => state.task.tasksStore[id]),
   teamList: state.project.projectsStore[ownProps.id].team.map(id => ({id}))
});

export default ProjectView = connect(mapStateToProps, actions)(ProjectView);