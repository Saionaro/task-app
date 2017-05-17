import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {

   render() {
      console.log(this.props)
      return <div className='app'>
         {this.props.children}
      </div>;
   }
};

function mapStateToProps(state, own) {
   return {};
}

export default App = connect(mapStateToProps)(App);