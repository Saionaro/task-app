import React from 'react';
import PropTypes from 'prop-types';
import './TextField.less';

export default class TextField extends React.Component {
   
   static propTypes = {
      text: PropTypes.string,
      onApply: PropTypes.func.isRequired,
      text: PropTypes.string,
      clearOnApply: PropTypes.bool,
      placeholder: PropTypes.string
   }

   state = {
      text: this.props.text || ''
   }

   handleSubmit = e => {
      const text = e.target.value.trim();
      if(e.which === 13 && text.length) {
         this.props.onApply(text);
         if (this.props.clearOnApply) {
            this.setState({
               text: ''
            });
         }
      }
   }

   handleChange = e => {
      this.setState({
         text: e.target.value
      });
   }

   handleBlur = e => {
      // if (!this.props.newTodo) {
      //    this.props.onApply(e.target.value)
      // }
   }


   render() {
      const additionalClass = this.state.text.length ? ' TextField_input__editing' : '';
      return (
         <div className='TextField'>
            <input
               className={`TextField_input${additionalClass}`}
               type='text'
               autoFocus='true'
               placeholder={this.props.placeholder}
               value={this.state.text}
               onBlur={this.handleBlur}
               onChange={this.handleChange}
               onKeyDown={this.handleSubmit} />
         </div>
      );
   }
}