import React, {Component} from 'react';
import './style.css'

class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            message : ''
        }
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