import React, {Component} from 'react';
import { createForm } from 'final-form';
import './style.css'

const onSubmit = async val => {
    alert(JSON.stringify(val, 0, 2));
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

    this.unsubscribe = this.form.subscribe(
        formState => {
          if (inConstructor) {
            initialState.formState = formState
          } else {
            this.setState({ formState })
          }
        },
        { active: true, pristine: true, submitting: true, values: true }
      )

      this.unsubscribeFields = ['email', 'message'].map(fieldName =>
        this.form.registerField(
          fieldName,
          fieldState => {
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

    componentWillUnmount() {
      this.unsubscribe();
      this.unsubscribeFields.forEach(unsubscribe => unsubscribe())
    }

    handleSumbit = (event) => {
      event.preventDefault();
      this.form.submit();
    }

    render() {
      const {formState, email, message} = this.state;

        return <div className={'feedback'}>
            <h2 className={'text-bold--header textColor'}>Обратная связь</h2>
            <form onSubmit={this.handleSumbit} method={'post'} name={'feedback_form'} className={'feedback__form'}>
                <input
                    onChange={(event) => email.change(event.target.value)}
                    value={email.value || ''}
                    onBlur={message.blur()}
                    className={'Input text-medium--medium textColor'}
                    placeholder={'Ваш email'}
                    type={'email'}
                    required={true}
                />

                <textarea
                    onChange={(event) => message.change(event.target.value)}
                    value={message.value || ''}
                    onBlur={message.blur()}
                    className={'Input Input__message text-medium--medium textColor'}
                    placeholder={'Ваше сообщение'}
                    required={true}
                />

                <button
                    className={'feedback__submit text-medium--medium raspTextColor'}
                    type={"submit"}
                    disabled={formState.submitting}
                >
                    Отправить
                </button>
            </form>
        </div>
    }
}

export default Feedback;