import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import Modal from 'react-modal';
import ListView from '../ListView/ListView';
import TextField from '../TextField/TextField';
import TaskView from '../TaskView/TaskView';
import PropTypes from 'prop-types';
import TasksListItem from '../TasksListItem/TasksListItem';
import * as actions from '../../actionsFactory';
import './TasksRegistry.less';

class TasksRegistry extends Component {

   static propTypes = {
      currentActiveTask: PropTypes.number,
      modalIsOpen: PropTypes.bool
   }

   onApply = (...args) => {
      this.props.addTask(...args);
   };

   afterOpenModal = () => {};

   render() {
      return (
         <div className='TasksRegistry'>
            <TextField
               placeholder='Новая таска'
               clearOnApply={true}
               onApply={this.onApply} />
            <Modal
               isOpen={this.props.modalIsOpen}
               onAfterOpen={this.afterOpenModal}
               onRequestClose={this.props.closeTask}
               contentLabel='Task card'>
               <TaskView id={this.props.currentActiveTask} />
            </Modal>
            <ListView
               template={TasksListItem}
               entity='task'
               onClick={this.props.openTask} />
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   modalIsOpen: !!state.reducer.currentTask,
   currentActiveTask: state.reducer.currentTask
});

export default TasksRegistry = connect(mapStateToProps, actions)(TasksRegistry);