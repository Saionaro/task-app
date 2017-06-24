import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import * as actions from '../../actionsFactory';
import './ProjectEdit.less';

class ProjectEdit extends Component {

   _description = '';
   _title = '';

   onApply = _ => {
      const title = this._title,
         description = this._description;
      if(description && title) {
         this.props.addProject({
            title,
            description
         });
         this.props.close();
      } else {
         let emptyFields = [];
         !title && emptyFields.push('заголовок');
         !description && emptyFields.push('описание');
         let message = emptyFields.length > 1 ? 'Не заполнены обязательные поля:' : 'Не заполнено обязательное поле - ';
         this.props.showAlert(`${message} ${emptyFields.join(', ')}.`);
      }
   };

   onChangeTitle(text) {
      this._title = text;
   }

   onChangeDescription(text) {
      this._description = text;
   }

   render() {
      return (
         <div className='ProjectEdit'>
            <div className="ProjectEdit_head">
               <div className="ProjectEdit_block-label">Новый проект</div>
               <div className="button button__normal"
                  onClick={::this.onApply}>
                  <span className="icon-16 icon-mail"></span>
                  Запустить
               </div>
            </div>
            <div className="ProjectEdit_body">
               <div className="ProjectEdit_description-block">
                  <div className="ProjectEdit_title ProjectEdit_block-label"
                     title="Название проекта">
                     Введите название проекта
                  </div>
                  <TextField
                     onChange={::this.onChangeTitle} />
                  <div className="ProjectEdit_description ProjectEdit_block-label"
                     title="Основной текст проекта - укажите цели и идеи проекта">
                     Введите описание проекта
                  </div>
                  <TextField
                     onChange={::this.onChangeDescription} />
               </div>
            </div>
         </div>
      );
   }
}

export default ProjectEdit = connect(_ => ({}), actions)(ProjectEdit);