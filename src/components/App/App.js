import React, {
   Component
} from 'react';
import {
   Link,
   Route
} from 'react-router-dom';
import TasksRegistry from '../TasksRegistry/TasksRegistry';
import ProjectsRegistry from '../ProjectsRegistry/ProjectsRegistry';
import ModalsManager from '../ModalsManager/ModalsManager';
import UserProfile from '../UserProfile/UserProfile';
import './App.less';

export default class App extends Component {

   render() {
      return (
         <div className='App'>
            <div className='App_head'>
               <div className='App_title'>Tasks App</div>
               <div className='App_links'>
                  <Link to='tasks'>Задачи</Link>
                  <Link to='projects'>Проекты</Link>
                  <Link to='profile'>Профиль</Link>
                  <Link to='logout'>Выход</Link>
               </div>
            </div>
            <div className='App_body'>
               <Route path="/tasks" component={TasksRegistry} />
               <Route path="/projects" component={ProjectsRegistry} />
               <Route path="/profile" component={UserProfile} />
            </div>
            <ModalsManager />
         </div>
      );
   }
}