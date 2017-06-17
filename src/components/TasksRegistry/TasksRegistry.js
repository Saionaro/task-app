import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import ListView from '../ListView/ListView';
import TextField from '../TextField/TextField';
import PropTypes from 'prop-types';
import TasksListItem from '../TasksListItem/TasksListItem';
import * as actions from '../../actionsFactory';
import './TasksRegistry.less';

class TasksRegistry extends Component {

   static propTypes = {
      tasksList: PropTypes.array,
      tasksCount: PropTypes.number
   }

   onApply = (...args) => {
      this.props.addTask(...args);
   };

   render() {
      return (
         <div className='TasksRegistry'>
            <TextField
               placeholder='Новая задача'
               clearOnApply={true}
               onApply={this.onApply} />
            <ListView
               template={TasksListItem}
               list={this.props.tasksList}
               emptyData='У вас нет задач'
               onClick={this.props.openTask} />
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   currentActiveTask: state.task.currentTask,
   tasksList: state.task.tasksList
                  .map(id => state.task.tasksStore[id])
                  .filter(task => !task.executionDate && task.executor === state.user.currentUser),
   tasksCount: state.task.tasksList.length
});

export default TasksRegistry = connect(mapStateToProps, actions)(TasksRegistry);