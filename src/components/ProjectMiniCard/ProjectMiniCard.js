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
import PersonTextView from '../PersonTextView/PersonTextView';
import './ProjectMiniCard.less';

class ProjectMiniCard extends Component {

   static propTypes = {
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      title: PropTypes.string,
      createDate: PropTypes.string,
      author: PropTypes.number
   }

   render() {
      return (
         <div className='ProjectMiniCard'>
            <div className='ProjectMiniCard_title'>
               <div className='ProjectMiniCard_title-label'
                  title='Название проекта'>
                  Проект:
               </div>
               <div className='ProjectMiniCard_title-value text-shortcut'
                  title={this.props.title}>
                  {this.props.title}
               </div>
            </div>
            <div className='ProjectMiniCard_creator'>
               <div className='ProjectMiniCard_creator-label'
                  title='Основатель проекта'>
                  Основатель:
               </div>
               <div className='ProjectMiniCard_creator-value text-shortcut'>
                  <PersonTextView id={this.props.author} />
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   description: state.project.projectsStore[ownProps.id].description,
   title: state.project.projectsStore[ownProps.id].title,
   createDate: state.project.projectsStore[ownProps.id].createDate.format(taskListFormat),
   author: state.project.projectsStore[ownProps.id].author
});

export default ProjectMiniCard = connect(mapStateToProps)(ProjectMiniCard);