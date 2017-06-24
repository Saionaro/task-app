import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import TimeView from '../TimeView/TimeView';
import Moment from 'moment';
import TimeDeltaView from '../TimeDeltaView/TimeDeltaView';
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
      title: PropTypes.string,
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
               <div className="ProjectView_title-left">
                  <div className="ProjectView_title"
                     title={this.props.title}>
                     {this.props.title}
                  </div>
                  <div className='ProjectView_time'>
                     <span>В работе уже</span>
                     <TimeDeltaView
                        fst={this.props.createDate}
                        scd={new Moment()} />
                  </div>
               </div>
               <div className="ProjectView_author">
                  <div className="ProjectView_label">Руководитель</div>
                  <PersonPreview
                     id={this.props.author} />
               </div>
            </div>
            <div className="ProjectView_body">
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

const mapStateToProps = (state, ownProps) => {
   let tasksList = Object.keys(state.task.tasksStore)
      .map(id => state.task.tasksStore[id])
      .filter(task => {
         return task.project === ownProps.id;
      })
      .sort((fst, scd) => {
         if(fst.executionDate && scd.executionDate) {
            return 0;
         }
         if(fst.executionDate) {
            return 1;
         } else {
            return -1;
         }
      });
   let team = tasksList.map(task => state.user.usersStore[task.executor]),
      collapsed = team.reduce((obj, curr) => {
         return obj[curr.id] = curr, obj;
      }, {});
   return {
      description: state.project.projectsStore[ownProps.id].description,
      title: state.project.projectsStore[ownProps.id].title,
      createDate: state.project.projectsStore[ownProps.id].createDate,
      author: state.project.projectsStore[ownProps.id].author,
      project: state.project.projectsStore[ownProps.id].project,
      tasksList: tasksList,
      teamList: Object.keys(collapsed).map(id => collapsed[id])
   }
};

export default ProjectView = connect(mapStateToProps, actions)(ProjectView);