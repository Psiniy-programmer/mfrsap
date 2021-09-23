import React, {Component} from 'react';
import {createForm} from 'final-form';
import mail_icon from './mail_dark.svg';
import './style.css';
import {connect} from "react-redux";
import api from "../../../../helpers/api";

const initialState = {
    email: '',
    message: '',
    isGone: false,
};

const onSubmit = async val => {
    await fetch(api.feedback, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify(val),
    });
};

class Feedback extends Component {
    constructor(props) {
        super(props);

        let inConstructor = true;
        this.form = createForm({onSubmit});

        this.unsubscribe = this.form.subscribe(
            formState => {
                if (inConstructor) {
                    initialState.formState = formState;
                } else {
                    this.setState({formState});
                }
            },
            {active: true, pristine: true, submitting: true, values: true},
        );

        this.unsubscribeFields = ['email', 'message'].map(fieldName =>
            this.form.registerField(
                fieldName,
                fieldState => {
                    if (inConstructor) {
                        initialState[fieldName] = fieldState;
                    } else {
                        this.setState({[fieldName]: fieldState});
                    }
                },
                {value: true},
            ),
        );

        this.state = initialState;
        inConstructor = false;
    }

    componentWillUnmount() {
        this.unsubscribe();
        this.unsubscribeFields.forEach(unsubscribe => unsubscribe());
    }

    handleSumbit = (event) => {
        event.preventDefault();
        this.form.submit();
        this.setState({
            email: '',
            message: '',
            isGone: true,
        });
    };

    render() {
        const {formState, email, message, isGone} = this.state;
        const {isMobile} = this.props;

        return <div className={`feedback textColor ${isMobile ? 'text-medium--small' : 'text-medium--medium'} `}>
            <h2 className={`${isMobile ? 'text-medium--medium' : 'text-bold--header'}`}>Обратная связь</h2>
            {!isGone ?
                <form onSubmit={this.handleSumbit} method={'post'}
                      name={'feedback_form'} className={'feedback__form'}>
                    <input
                        onChange={(event) => email.change(event.target.value)}
                        value={email.value || ''}
                        className={'Input textColor'}
                        placeholder={'Ваш email'}
                        type={'email'}
                        required={true}
                    />

                    <textarea
                        onChange={(event) => message.change(event.target.value)}
                        value={message.value || ''}
                        className={'Input Input__message textColor'}
                        placeholder={'Ваше сообщение'}
                        required={true}
                    />

                    <button
                        className={'feedback__submit raspTextColor'}
                        type={'submit'}
                        disabled={formState.submitting}
                    >
                        Отправить
                    </button>
                </form> : <div className='response'>
                    <img src={mail_icon} alt='Отправлено'/>
                    <div className='response__text'>
                        <p>Сообщение отправлено.</p>
                        <p>Мы ответим вам в ближайшие дни.</p>
                    </div>
                </div>
            }
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        isMobile: state.windowSizes.isMobile
    }
}

export default connect(mapStateToProps)(Feedback);