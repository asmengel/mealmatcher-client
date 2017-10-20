import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';

export class RestaurantForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/restaurants/:id', {
           method: 'POST',
           body: JSON.stringify(values),
           headers: {
               'Content-Type': 'application/json'
           }
        })
            .then(res => {
                if (!res.ok) {
                    if (res.headers.has('content-type') && res.headers
                .get('content-type')
                .startsWith('application/json')
            )
            {
                return res.json().then(err => Promise.reject(err));
            }
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
                }
                return;
            })
            .then(() => console.log('submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'error submitting message'
                    })
                );
            });
    }
    render() {
        let successMessage;
        if(this.props.submitSucceded) {
            successMessage = (
                <div className="Contact-info">Info Posted!!!</div>
            );
        }
        let errorMessage;
        if(this.props.error) {
            errorMessage = ( <div className="error-message-info">{this.props.error}</div>);
        }
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            {successMessage}
            {errorMessage}
            <Field
            name="name" type="text" component={Input} label="First Name" validate={[required, nonEmpty]}
            />
            <Field
            name="email" type="text" component={Input} label="Contact Email Address" validate={[required, nonEmpty]}
            />
            <button type="submit"> Add info to list!</button>
            </form>
        );
    }

}

export default reduxForm({
    form: 'restaurant-meetup',
    //onSubmitFail: (errors, dispatch) => dispatch(focus('contact', Object.keys(errors)[0]))
})(RestaurantForm)