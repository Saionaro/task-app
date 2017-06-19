import React, {
   Component
} from 'react';
import PropTypes from 'prop-types';
import './TextField.less';

export default class TextField extends Component {
   
   static propTypes = {
      text: PropTypes.string,
      onApply: PropTypes.func.isRequired,
      onChange: PropTypes.func,
      onChangeDelay: PropTypes.number,
      text: PropTypes.string,
      clearOnApply: PropTypes.bool,
      placeholder: PropTypes.string
   };

   state = {
      text: this.props.text || ''
   };

   timer = null;

   handleSubmit = e => {
      const text = e.target.value.trim();
      if(e.which === 13 && text.length) {
         this.clearTimer();
         this.props.onApply(text);
         if (this.props.clearOnApply) {
            this.setState({
               text: ''
            });
         }
      }
   };

   clearTimer = _ => {
      this.timer && clearTimeout(this.timer);
   };

   handleChange = e => {
      this.setState({
         text: e.target.value
      });
      if(this.props.onChangeDelay && this.props.onChange) {
         this.clearTimer();
         this.timer = setTimeout(function() {
            this.props.onChange(this.state.text);
            this.timer = null;
         }.bind(this), this.props.onChangeDelay);
      }
   };

   handleBlur = e => {};


   render() {
      const additionalClass = this.state.text.length ? ' TextField_input__editing' : '';
      return (
         <div className={`TextField ${this.props.className ? this.props.className : ''}`}>
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