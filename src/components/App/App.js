import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import {
   Link,
   Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import TasksRegistry from '../TasksRegistry/TasksRegistry';
import ProjectsRegistry from '../ProjectsRegistry/ProjectsRegistry';
import ModalsManager from '../ModalsManager/ModalsManager';
import UserProfile from '../UserProfile/UserProfile';
import './App.less';

class App extends Component {
   
   static propTypes = {
      activeTab: PropTypes.string
   }

   render() {
      return (
         <div className={'App App__' + this.props.activeTab}>
            <div className='App_head'>
               <div className='App_title'>Tasks App</div>
               <div className='App_links'>
                  <Link className='App_link-tasks'
                     to='tasks'>Задачи</Link>
                  <Link className='App_link-projects'
                     to='projects'>Проекты</Link>
                  <Link className='App_link-profile'
                     to='profile'>Профиль</Link>
                  <Link className='App_link-logout'
                     to='logout'>Выход</Link>
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
const mapStateToProps = state => ({
   activeTab: state.general.activeTab
});

export default App = connect(mapStateToProps)(App);