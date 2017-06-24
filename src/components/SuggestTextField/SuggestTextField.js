import React, {
   Component
} from 'react';
import {
   connect
} from 'react-redux';
import TextField from '../TextField/TextField';
import PropTypes from 'prop-types';
import ListView from '../ListView/ListView';
import * as actions from '../../actionsFactory';
import './SuggestTextField.less';

class SuggestTextField extends Component {

   static propTypes = {
      entityType: PropTypes.string.isRequired,
      entitiesList: PropTypes.array,
      entitiesCount: PropTypes.number,
      id: PropTypes.string,
      width: PropTypes.string,
      pending: PropTypes.bool,
      selectedEntity: PropTypes.object,
      search: PropTypes.func.isRequired,
      select: PropTypes.func.isRequired,
      onSelected: PropTypes.func,
      suggestTemplate: PropTypes.func.isRequired,
      clearSuggest: PropTypes.func.isRequired
   };

   textField = null;

   onChangeText(text) {
      this.props.search(this.props.id, text);
   }

   onBlur() {
      setTimeout(function() {
         this.props.clearSuggest(this.props.id);
      }.bind(this), 200);
   }

   onClear() {
      this.selectEntity(null, true);
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

   selectEntity(id, clear) {
      this.props.select(this.props.id, id);
      if(!clear) {
         this.textField.setState({
            text: ''
         });
      }
      this.props.onSelected && this.props.onSelected(id);
   }

   render() {
      return (
         <div className={'SuggestTextField ' + (this.props.selectedEntity ? 'SuggestTextField__selected' : '') }
            style={this.getStyle('root')}>
            {
               this.props.selectedEntity ? (
                  <div className="SuggestTextField_selected-block">
                     <this.props.suggestTemplate
                        data={this.props.selectedEntity} />
                     <span className="SuggestTextField_cancel icon-16 icon-cancel"
                        title="Сбросить"
                        onClick={::this.onClear}></span>
                  </div>
               ) : (
                  <div className='SuggestTextField_fst-line'>
                     <TextField 
                        onChange={ ::this.onChangeText }
                        onApply={ ::this.onChangeText }
                        onBlur={ ::this.onBlur }
                        onChangeDelay={ 750 }
                        ref={textField => { this.textField = textField; }} />
                     {  
                        this.props.pending ? (
                           <div className='SuggestTextField_spinner'>
                              <div className='icon-16 icon-spin5 animate-spin'></div>
                           </div>
                        ): '' 
                     }
                  </div>
               )
            }
            {
               this.props.entitiesCount > 0 ? (
                  <div className='SuggestTextField_suggest'
                     style={this.getStyle('suggest')}>
                     <ListView
                        template={this.props.suggestTemplate}
                        onClick={ ::this.selectEntity }
                        list={this.props.entitiesList} />
                  </div>
               ) : ''
            }
         </div>
      );
   }
}

const mapStateToProps = (state, ownProps) => {
   let entityType = ownProps.entityType,
      entitiesStoreField = `${entityType}sStore`,
      chooserState = state[entityType].choosers[ownProps.id] || {
         entities: [],
         pending: false,
         selected: null
      };
   return {
      entitiesList: chooserState.entities.map(id => {
         return state[entityType][entitiesStoreField][id];
      }),
      pending: chooserState.pending,
      selectedEntity: state[entityType][entitiesStoreField][chooserState.selected],
      entitiesCount: chooserState.entities.length
   };
};

export default SuggestTextField = connect(mapStateToProps, actions)(SuggestTextField);