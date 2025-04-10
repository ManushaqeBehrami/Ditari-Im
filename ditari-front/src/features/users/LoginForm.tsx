import { observer } from 'mobx-react-lite';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { useStore } from '../../app/stores/store';
import { Button, Label } from 'semantic-ui-react';
import MyTextInput from '../../app/common/MyTextInput';

export default observer(function LoginForm() {
    const { userStore } = useStore();

    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.login(values).catch(error =>
                setErrors({ error: 'Invalid email or password' }))}
            validationSchema={Yup.object({
                email: Yup.string().required(),
                password: Yup.string().required()
            })}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} >
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage
                        name='error'
                        render={() =>
                            <Label style={{ margin: '10 0' }} basic color='red' content={errors.error} />
                        }
                    />
                    <Button disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting} style={{backgroundColor: '#9C528B'}} content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
})