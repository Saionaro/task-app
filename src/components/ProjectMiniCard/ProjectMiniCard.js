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
      author: PropTypes.number,
      onClick: PropTypes.func
   }

   render() {
      return (
         <div className='ProjectMiniCard'
            onClick={() => this.props.onClick && this.props.onClick(this.props.id)}>
            <div className='ProjectMiniCard_title'>
               <div className='ProjectMiniCard_title-value text-shortcut'
                  title={this.props.title}>
                  {this.props.title}
               </div>
            </div>
            <div className='ProjectMiniCard_creator'>
               <div className='ProjectMiniCard_creator-value text-shortcut'>
                  <PersonTextView id={this.props.author} />
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   const item = ownProps.data || state.project.projectsStore[ownProps.id];
   return {
      id: item.id,
      description: item.description,
      title: item.title,
      createDate: item.createDate.format(taskListFormat),
      author: item.author
   };
};

export default ProjectMiniCard = connect(mapStateToProps)(ProjectMiniCard);