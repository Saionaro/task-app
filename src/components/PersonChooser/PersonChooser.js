import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import TextField from '../TextField/TextField';
import PropTypes from 'prop-types';
import Generator from 'random-id';
import ListView from '../ListView/ListView';
import PersonPreview from '../PersonPreview/PersonPreview';
import * as actions from '../../actionsFactory';
import './PersonChooser.less';

class PersonChooser extends Component {

   static propTypes = {
      personsList: PropTypes.array,
      personsCount: PropTypes.number,
      chooserId: PropTypes.string,
      width: PropTypes.string,
      pending: PropTypes.bool,
      selectedPerson: PropTypes.object
   };

   onChangeText(text) {
      console.log(text);
      this.props.searchUser(this.props.chooserId, text);
   }

   getStyle(type) {
      switch(type) {
         case 'root' :
            return {
               width: this.props.width || '250px'
            };
         case 'suggest' :
            return {
               width: ['calc(', this.props.width || '250px', ' - 2px)'].join('')
            };
      }
   }

   selectPerson(id) {
      this.props.selectUser(this.props.chooserId, id);
   }

   render() {
      return (
         <div className={'PersonChooser ' + this.props.selectedPerson ? 'PersonChooser__selected' : ''}
            style={this.getStyle('root')}>
            {
               this.props.selectedPerson ? (
                  <PersonPreview
                     data={this.props.selectedPerson} />
               ) : ''
            }
            <div className='PersonChooser_fst-line'>
               <TextField 
                  onChange={ ::this.onChangeText }
                  onApply={ ::this.onChangeText }
                  onChangeDelay={ 750 } />
               {  
                  this.props.pending ? (
                     <div className='PersonChooser_spinner'>
                        <div className='icon-16 icon-spin5 animate-spin'></div>
                     </div>
                  ): '' 
               }
            </div>
            {
               this.props.personsCount > 0 ? (
                  <div className='PersonChooser_suggest'
                     style={this.getStyle('suggest')}>
                     <ListView
                        template={PersonPreview}
                        onClick={ ::this.selectPerson }
                        list={this.props.personsList} />
                  </div>
               ) : ''
            }
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   let chooserState = state.user.choosers[ownProps.chooserId] || {
      persons: [],
      pending: false,
      selected: null
   };
   return {
      personsList: chooserState.persons.map(id => {
         return state.user.usersStore[id];
      }),
      pending: chooserState.pending,
      selectedPerson: state.user.usersStore[chooserState.selected],
      personsCount: chooserState.persons.length
   };
};

export default PersonChooser = connect(mapStateToProps, actions)(PersonChooser);