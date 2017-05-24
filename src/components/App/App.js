import React from 'react';
import {
   Link,
   Route
} from 'react-router-dom';
import TasksRegistry from '../TasksRegistry/TasksRegistry';
import UserProfile from '../UserProfile/UserProfile';
import './app.less';

class App extends React.Component {

   render() {
      return (
         <div className='app'>
            <div className='app_head'>
               <div className='app_title'>Tasks app</div>
               <div className='app_links'>
                  <Link to='tasks'>Задачи</Link>
                  <Link to='profile'>Профиль</Link>
                  <Link to='logout'>Выход</Link>
               </div>
            </div>
            <div className='app_body'>
               <Route path="/tasks" component={TasksRegistry} />
               <Route path="/profile" component={UserProfile} />
            </div>
         </div>
      );
   }
};

export default App;