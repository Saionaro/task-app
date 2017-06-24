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
import AlertView from '../AlertView/AlertView';
import TaskEdit from '../TaskEdit/TaskEdit';
import ProjectEdit from '../ProjectEdit/ProjectEdit';
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
            case 'new_task':
               return TaskEdit;
            case 'project':
               return ProjectView;
            case 'new_project':
               return ProjectEdit;
            case 'alert':
               return AlertView;
            default:
               return <div/>;
         }
      },
      modals = this.props.modals,
      closeModal = this.props.closeModal,
      closeFunc = id => {
         return _ => closeModal(id);
      },
      keys = Object.keys(modals),
      last = keys.length - 1;

      return keys.map((key, num) => {
         const item = modals[key];
         item.key = key;
         item.blured = last !== num;
         item.close = closeFunc(item.key);
         item.component = getByType(modals[key].type);
         return item;
      }).map(item => {
         return (
            <Modal
               className={'ModalsManager_modal' + (item.blured ? ' ModalsManager_modal__blured' : '')}
               key={item.key}
               isOpen={ true }
               onRequestClose={item.close}
               contentLabel={item.type}>
               <item.component
                  id={item.id}
                  data={item.data}
                  close={closeFunc(item.key)} />
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