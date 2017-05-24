import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
   taskListFormat
} from '../../constants/dateFormats';
import TimeView from '../TimeView/TimeView';
import './TasksListItem.less';

class TasksListItem extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      title: PropTypes.string,
      createDate: PropTypes.object
   }

   render() {
      return (
         <div className='TasksListItem'
            onClick={() => this.props.onClick(this.props.id)}>
            <div title='Не прочитано'
               className={'TasksListItem_status icon-16 icon-eye' + (!this.props.showed ? ' TasksListItem_status__visible' : '')}>
            </div>
            <div className='TasksListItem_date'>
               <TimeView
                  moment={this.props.createDate}
                  format={taskListFormat} />
            </div>
            <div className='TasksListItem_main-info'>
               <div className='TasksListItem_title'>
                  {this.props.title}
               </div>
               <div className='TasksListItem_description'>
                  {this.props.description}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownState) => ({
   showed: state.reducer.tasksStore[ownState.id].showed,
   createDate: state.reducer.tasksStore[ownState.id].createDate,
   title: state.reducer.tasksStore[ownState.id].title,
   description: state.reducer.tasksStore[ownState.id].description
});

export default TasksListItem = connect(mapStateToProps)(TasksListItem);