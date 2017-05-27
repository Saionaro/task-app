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
import PersonPreview from '../PersonPreview/PersonPreview';
import './ProjectsListItem.less';

export default class ProjectsListItem extends Component {

   static propTypes = {
      data: PropTypes.object.isRequired
   };

   render() {
      return (
         <div className='ProjectsListItem'
            onClick={() => this.props.onClick(this.props.data.id)}>
            <div className='ProjectsListItem_date'>
               <TimeView
                  moment={this.props.data.createDate}
                  format={taskListFormat} />
            </div>
            <div className='ProjectsListItem_main-info'>
               <div className='ProjectsListItem_title'
                  title={this.props.data.title}>
                  {this.props.data.title}
               </div>
               <div className='ProjectsListItem_description'
                  title={this.props.data.description}>
                  {this.props.data.description}
               </div>
            </div>
            <div className='ProjectsListItem_author'>
               <PersonPreview
                  id={this.props.data.author}
                  maxWidth={200} />
            </div>
         </div>
      );
   }
}