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

class ProjectsListItem extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      title: PropTypes.string,
      createDate: PropTypes.object,
      author: PropTypes.number
   };

   render() {
      return (
         <div className='ProjectsListItem'
            onClick={() => this.props.onClick(this.props.id)}>
            <div className='ProjectsListItem_date'>
               <TimeView
                  moment={this.props.createDate}
                  format={taskListFormat} />
            </div>
            <div className='ProjectsListItem_main-info'>
               <div className='ProjectsListItem_title'>
                  {this.props.title}
               </div>
               <div className='ProjectsListItem_description'>
                  {this.props.description}
               </div>
            </div>
            <div className='ProjectsListItem_author'>
               <PersonPreview
                  id={this.props.author}
                  maxWidth={200} />
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownState) => ({
   createDate: state.reducer.projectsStore[ownState.id].createDate,
   title: state.reducer.projectsStore[ownState.id].title,
   description: state.reducer.projectsStore[ownState.id].description,
   author: state.reducer.projectsStore[ownState.id].author
});

export default ProjectsListItem = connect(mapStateToProps)(ProjectsListItem);