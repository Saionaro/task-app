import React from 'react';
import {
   connect
} from 'react-redux';
import './TasksRegistry.less';
import ListView from '../ListView/ListView';
import TextField from '../TextField/TextField';
import TasksListItem from '../TasksListItem/TasksListItem';
import * as actions from '../../actions';

class TasksRegistry extends React.Component {
   render() {
      return <div className='TasksRegistry'>
         <TextField
            placeholder="Новая таска!"
            clearOnApply={true}
            onApply={this.props.addTask} />
         <ListView
            template={TasksListItem}
            entity='task'
            onClick={this.props.openTask} />
      </div>;
   }
}

export default TasksRegistry = connect(() => ({}), actions)(TasksRegistry);