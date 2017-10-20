import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, email } from '../validators';
import { addEaters, dataPusher } from '../actions/routes';
import { connect } from 'react-redux';
import './restaurant-form.css';
export class RestaurantForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        return fetch(`http://localhost:8080/api/restaurants/${this.props.restaurant._id}`, {
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
                    ) {
                        return res.json().then(err => Promise.reject(err));
                    }
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => {
                console.log('submitted with values', values)
                //needs to do a get request to get updated restaurant
                //or update local state which'll update eaters
                this.props.dispatch(addEaters(values))
            })
            .catch(err => {
                const { reason, message, location } = err;
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
        if (this.props.submitSucceded) {
            successMessage = (
                <div className="Contact-info">Info Posted!!!</div>
            );
        }
        let errorMessage;
        if (this.props.error) {
            errorMessage = (<div className="error-message-info">{this.props.error}</div>);
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

const Component = reduxForm({
    form: 'restaurant-meetup',
    //onSubmitFail: (errors, dispatch) => dispatch(focus('contact', Object.keys(errors)[0]))
})(RestaurantForm)

export default connect()(Component);