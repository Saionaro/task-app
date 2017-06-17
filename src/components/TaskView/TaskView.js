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
import PersonChooser from '../PersonChooser/PersonChooser';
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
      project: PropTypes.number,
      executionDate: PropTypes.object,
      executionText: PropTypes.string
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
               {this.props.executionDate ?
                  <div className="TaskView_done-label"
                     title="Выполнение задачи завершено">
                     Завершено
                  </div>
                  : ''
               }
            </div>
            <div className="TaskView_body">
               <div className="TaskView_left-part">
                  <div className="TaskView_description"
                     title={this.props.description}>
                        {this.props.description}
                  </div>
               </div>
               <div className="TaskView_right-part">
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
                  <div className='TaskView_executor-area'>
                     <div className='TaskView_executor-label'>Исполнитель</div>
                     <PersonPreview
                        id={this.props.executor} />
                  </div>
               </div>
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
   project: state.task.tasksStore[ownProps.id].project,
   executionDate: state.task.tasksStore[ownProps.id].executionDate,
   executionText: state.task.tasksStore[ownProps.id].executionText
});

export default TaskView = connect(mapStateToProps)(TaskView);
