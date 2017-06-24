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
import TextField from '../TextField/TextField';
import {
   taskListFormat
} from '../../constants/dateFormats';
import * as actions from '../../actionsFactory';
import './TaskView.less';

class TaskView extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      title: PropTypes.string,
      createDate: PropTypes.object,
      executor: PropTypes.number,
      project: PropTypes.number,
      executionDate: PropTypes.object,
      executionText: PropTypes.string
   }

   _text = '';

   openProject() {
      this.props.openProject(this.props.project);
   }

   execute() {
      const text = this._text;
      if(text) {
         this.props.executeTask(this.props.id, text);
         this.props.close();
      } else {
         this.props.showAlert('Необходимо указать комментарий!');
      }
   }

   onChangeText(text) {
      this._text = text;
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
               <div className='TaskView_title'
                  title={this.props.title}>
                  {'«' + this.props.title + '»'}
               </div>
               {this.props.executionDate ?
                  <div className="TaskView_done-label"
                     title="Выполнение задачи завершено">
                        <div className='TaskView_done-icon icon-16 icon-ok'></div>
                        <span>Завершено</span>
                        <TimeView
                           moment={this.props.executionDate}
                           format={taskListFormat} />
                  </div>
                  :
                  ''
               }
               <div className='TaskView_project-area'>
                  {this.props.project ? 
                     <ProjectMiniCard
                        onClick={::this.openProject}
                        id={this.props.project} />
                  :
                  <div className='TaskView_project-area__empty'
                     title='Задача не включена в проект'>
                     Без проекта
                  </div>}
               </div>
            </div>
            <div className="TaskView_body">
               <div className="TaskView_left-part">
                  <div className="TaskView_description"
                     title={this.props.description}>
                        {this.props.description}
                  </div>
               </div>
               <div className="TaskView_right-part">
                  <div className='TaskView_executor-area'>
                     <div className='TaskView_executor-label'>Исполнитель</div>
                     <PersonPreview
                        id={this.props.executor} />
                  </div>
               </div>
            </div>
            {
               this.props.executor === 0 && !this.props.executionDate ? (
                  <div className="TaskView_execution-block">
                     <div className="TaskView_execution-block">
                        <TextField
                           onChange={::this.onChangeText} />
                        <div className="TaskView_execution-button button button__normal"
                           onClick={::this.execute}>
                           <span className="icon-16 icon-tag"></span>
                           Выполнить
                        </div>
                     </div>
                  </div>
               ) : ''
            }
            {
               this.props.executionText ? (
                  <div className="TaskView_executed-block">
                     <div className="TaskView_executed-label"
                        title="Комментарий исполнителя задача">
                        Комментарий исполнителя:
                     </div>
                     <div className="TaskView_executed-text"
                        title={this.props.executionText}>
                        {this.props.executionText}
                     </div>
                  </div>
               ) : ''
            }
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   description: state.task.tasksStore[ownProps.id].description,
   title: state.task.tasksStore[ownProps.id].title,
   createDate: state.task.tasksStore[ownProps.id].createDate,
   executor: state.task.tasksStore[ownProps.id].executor,
   author: state.task.tasksStore[ownProps.id].author,
   project: state.task.tasksStore[ownProps.id].project,
   executionDate: state.task.tasksStore[ownProps.id].executionDate,
   executionText: state.task.tasksStore[ownProps.id].executionText
});

export default TaskView = connect(mapStateToProps, actions)(TaskView);
