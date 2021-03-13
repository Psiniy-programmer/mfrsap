import React, {Component} from 'react';
import { createForm } from 'final-form';
import './style.css'

const onSubmit = async val => {
    alert(val);
}

class Feedback extends Component {
    constructor(props) {
        super(props);
        
        const initialState = {
            email : '',
            message : ''
        };
        let inConstructor = true;
        this.form = createForm({ onSubmit })

        // subscribe to form changes
    this.unsubscribe = this.form.subscribe(
        formState => {
          // cannot call setState in constructor, but need to on subsequent notifications
          if (inConstructor) {
            initialState.formState = formState
          } else {
            this.setState({ formState })
          }
        },
        { active: true, pristine: true, submitting: true, values: true }
      )
  
      // register fields
      this.unsubscribeFields = ['email', 'message'].map(fieldName =>
        this.form.registerField(
          fieldName,
          fieldState => {
            // cannot call setState in constructor, but need to on subsequent notifications
            if (inConstructor) {
              initialState[fieldName] = fieldState
            } else {
              this.setState({ [fieldName]: fieldState })
            }
          },
          { value: true }
        )
      )
    
      this.state = initialState
      inConstructor = false
    }

    saveEmail() {
        this.setState({email : this.emailInput.value})
    }

    saveMessage() {
        this.setState({message : this.messageInput.value})
    }

    render() {
        return <div className={'feedback'}>
            <h2 className={'text-bold--header textColor'}>Обратная связь</h2>
            <form method={'post'} name={'feedback_form'} className={'feedback__form'}>
                <input
                    onChange={this.saveEmail.bind(this)}
                    value={this.state.email}
                    ref={(input) => {
                        this.emailInput = input
                    }}
                    className={'Input text-medium--medium textColor'}
                    placeholder={'Ваш email'}
                    type={'email'}
                    required={true}
                />

                <textarea
                    onChange={this.saveMessage.bind(this)}
                    value={this.state.message}
                    ref={(input) => {
                        this.messageInput = input
                    }}
                    className={'Input Input__message text-medium--medium textColor'}
                    placeholder={'Ваше сообщение'}
                    required={true}
                />

                <button
                    className={'feedback__submit text-medium--medium raspTextColor'}
                    type={"submit"}>
                    Отправить
                </button>
            </form>
        </div>
    }
}

export default Feedback;