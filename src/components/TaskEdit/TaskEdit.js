import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import PropTypes from 'prop-types';
import ProjectChooser from '../ProjectChooser/ProjectChooser';
import PersonChooser from '../PersonChooser/PersonChooser';
import TextField from '../TextField/TextField';
import * as actions from '../../actionsFactory';
import './TaskEdit.less';

class TaskEdit extends Component {

   _execId = null;
   _projectId = null;
   _description = '';
   _title = '';

   onApply = _ => {
      const exec = this._execId,
         project = this._projectId,
         title = this._title,
         description = this._description;
      if(exec !== null && description && title) {
         this.props.addTask({
            exec,
            project,
            title,
            description
         });
         this.props.close();
      } else {
         let emptyFields = [];
         exec === null && emptyFields.push('исполнитель');
         !title && emptyFields.push('заголовок');
         !description && emptyFields.push('описание');
         let message = emptyFields.length > 1 ? 'Не заполнены обязательные поля:' : 'Не заполнено обязательное поле - ';
         this.props.showAlert(`${message} ${emptyFields.join(', ')}.`);
      }
   };

   onChangeProject(id) {
      this._projectId = id;
   }

   onChangeExec(id) {
      this._execId = id;
   }

   onChangeTitle(text) {
      this._title = text;
   }

   onChangeDescription(text) {
      this._description = text;
   }

   render() {
      return (
         <div className='TaskEdit'>
            <div className="TaskEdit_head">
               <div className="TaskEdit_block-label">Новая задача</div>
               <div className="button button__normal"
                  onClick={::this.onApply}>
                  <span className="icon-16 icon-mail"></span>
                  Запустить
               </div>
            </div>
            <div className="TaskEdit_body">
               <div className='TaskEdit_parallel-blocks'>
                  <div className="TaskEdit_executor-block">
                     <div className="TaskEdit_block-label">Выберите исполнителя</div>
                     <PersonChooser
                        onSelected={::this.onChangeExec} />
                  </div>
                  <div className="TaskEdit_project-block">
                     <div className="TaskEdit_block-label">Выберите проект</div>
                     <ProjectChooser
                        onSelected={::this.onChangeProject} />
                  </div>
               </div>
               <div className="TaskEdit_description-block">
                  <div className="TaskEdit_title TaskEdit_block-label"
                     title="Основная тема задачи, например - 'Разработка макета'">
                     Введите заголовок задачи
                  </div>
                  <TextField
                     onChange={::this.onChangeTitle} />
                  <div className="TaskEdit_description TaskEdit_block-label"
                     title="Основной текст задачи - опишите, что нужно получить в результате выполнения">
                     Введите описание задачи
                  </div>
                  <TextField
                     onChange={::this.onChangeDescription} />
               </div>
            </div>
         </div>
      );
   }
}

export default TaskEdit = connect(_ => ({}), actions)(TaskEdit);