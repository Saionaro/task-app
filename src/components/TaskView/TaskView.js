import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import TimeView from '../TimeView/TimeView';
import PersonPreview from '../PersonPreview/PersonPreview';
import ProjectMiniCard from '../ProjectMiniCard/ProjectMiniCard';
import {
   taskListFormat
} from '../../constants/dateFormats';
import './TaskView.less';

class TaskView extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      createDate: PropTypes.object,
      executor: PropTypes.number,
      project: PropTypes.number
   }

   render() {
      return (
         <div className="TaskView">
            <div className="TaskView_head">
               <div className='TaskView_time'>
                  <TimeView
                     moment={this.props.createDate}
                     format={taskListFormat} />
               </div>
            </div>
            <div className="TaskView_body">
               <PersonPreview
                  id={this.props.executor} />
               <div className='TaskView_project-area'>
                  {this.props.project ? 
                     <ProjectMiniCard 
                        id={this.props.project} />
                  :
                  <div className='TaskView_project-area__empty'
                     title='Задача не включена в проект'>
                     Без проекта
                  </div>}
               </div>
               <div className="TaskView_description" title={this.props.description}>{this.props.description}</div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   description: state.task.tasksStore[ownProps.id].description,
   createDate: state.task.tasksStore[ownProps.id].createDate,
   executor: state.task.tasksStore[ownProps.id].executor,
   author: state.task.tasksStore[ownProps.id].author,
   project: state.task.tasksStore[ownProps.id].project
});

export default TaskView = connect(mapStateToProps)(TaskView);