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

export default class TasksListItem extends Component {

   static propTypes = {
      data: PropTypes.object.isRequired
   };

   render() {
      return (
         <div className={'TasksListItem' + (this.props.data.executionDate ? ' TasksListItem__done' : '')}
            onClick={() => this.props.onClick(this.props.data.id)}>
            <div title='Не прочитано'
               className={'TasksListItem_status icon-16 icon-eye' + (!this.props.data.showed ? ' TasksListItem_status__visible' : '')}>
            </div>
            <div className='TasksListItem_date'>
               <TimeView
                  moment={this.props.data.createDate}
                  format={taskListFormat} />
            </div>
            <div className='TasksListItem_main-info'>
               <div className='TasksListItem_title'
                  title={this.props.data.title}>
                  {this.props.data.title}
               </div>
               <div className='TasksListItem_description'
                  title={this.props.data.description}>
                  {this.props.data.description}
               </div>
            </div>
         </div>
      );
   }
}