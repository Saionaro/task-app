import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TaskView from '../TaskView/TaskView';
import ProjectView from '../ProjectView/ProjectView';
import * as actions from '../../actionsFactory';
import './ModalsManager.less';

class ModalsManager extends Component {

   static propTypes = {
      modalIsOpen: PropTypes.bool,
      modals: PropTypes.object
   };

   renderModals() {
      const getByType = (type) => {
         switch (type) {
            case 'task':
               return TaskView;
            case 'project':
               return ProjectView;
            default:
               return <div/>;
               break;
         }
      },
      modals = this.props.modals,
      closeModal = this.props.closeModal,
      closeFunc = id => {
         return _ => closeModal(id);
      };
      return Object.keys(modals).map(key => {
         const item = modals[key];
         item.key = key;
         item.close = closeFunc(item.key);
         item.component = getByType(modals[key].type);
         return item;
      }).map(item => {
         return (
            <Modal
               className='ModalsManager_modal'
               key={item.key}
               isOpen={ true }
               onRequestClose={item.close}
               contentLabel={item.type}>
               <item.component
                  id={item.id} />
            </Modal>
         );
      });
   }

   render() {
      return (
         <div className="ModalsManager">
            {this.renderModals()}
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   modals: state.modal.active,
   modalsCount: Object.keys(state.modal.active).length
});

export default ModalsManager = connect(mapStateToProps, actions)(ModalsManager);