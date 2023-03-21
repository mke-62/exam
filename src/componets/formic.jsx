import React from 'react';
import { useFormik } from 'formik';
import styled from "styled-components";

const FormStyle = styled.form`
   display: flex;
  flex-direction: column;
  text-align: left;
`;
const ErrorStyle = styled.div`
   color: red;
`;
const InputStyle = styled.input`
  `;
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Введите имя';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Введите организацию';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Введите Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email введен некорректно';
    }

    return errors;
};

const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
        <h1>Отправить заявку</h1>
        <FormStyle onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Имя</label>
            <InputStyle
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <ErrorStyle>{formik.errors.firstName}</ErrorStyle> : null}

            <label htmlFor="lastName">Название организации</label>
            <InputStyle
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <ErrorStyle>{formik.errors.lastName}</ErrorStyle> : null}

            <label htmlFor="email">Email адрес</label>
            <InputStyle
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <ErrorStyle>{formik.errors.email}</ErrorStyle> : null}

            <button type="submit">Отправить</button>
        </FormStyle>
        </>
    );
};

export default SignupForm;