import React from 'react';
import {
   connect
} from 'react-redux';
import './TasksListItem.less';

class TasksListItem extends React.Component {

   render() {
      return <div className={'TasksListItem' + (this.props.showed ? ' TasksListItem__showed' : '')}
         onClick={() => this.props.onClick(this.props.id)}>
         <div className='TasksListItem_date'>
            {this.props.date}
         </div>
         <div className='TasksListItem_main-info'>
            <div className='TasksListItem_title'>
               {this.props.title}
            </div>
            <div className='TasksListItem_description'>
               {this.props.description}
            </div>
         </div>
      </div>;
   }
}

const mapStateToProps = (state, ownState) => ({
   showed: state.reducer.tasksStore[ownState.id].showed,
   date: state.reducer.tasksStore[ownState.id].date,
   title: state.reducer.tasksStore[ownState.id].title,
   description: state.reducer.tasksStore[ownState.id].description
});

export default TasksListItem = connect(mapStateToProps)(TasksListItem);