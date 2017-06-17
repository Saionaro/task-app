import React, {
   Component
} from 'react';
import TextField from '../TextField/TextField';
import Generator from 'random-id';
import './PersonChooser.less';

export default class PersonChooser extends Component {

   chooserId = null;

   componentDidMount() {
      this.chooserId = Generator(5);
   }

   onChangeText(text) {
      console.log(text);
   }

   render() {
      return (
         <div className='PersonChooser'>
            <TextField 
               onChange={ this.onChangeText }
               onApply={ this.onChangeText }
               onChangeDelay={ 750 } />
         </div>
      );
   }
}