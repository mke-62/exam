import {useFormik} from 'formik';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import React, {useState} from 'react';


const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5em;
`;
const ErrorStyle = styled.div`
  color: red;
`;
const InputStyle = styled.input`
`;

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Введите имя';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Должно быть не более 15 символов.';
    }

    if (!values.lastName) {
        errors.lastName = 'Введите организацию';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Должно быть не более 20 символов.';
    }

    if (!values.email) {
        errors.email = 'Введите Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email введен некорректно';
    }

    return errors;
};

const SignupForm = () => {
    const [buttonState, setButtonState] = useState('');
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: (object, {resetForm}, setStatus) => {
            emailjs.send(process.env.REACT_APP_Service, process.env.REACT_APP_TemplateId, object, process.env.REACT_APP_PublicKey)

                .then((result) => {
                    console.log(result.text)
                    setButtonState('Сообщение отправлено')
                    resetForm();
                    setTimeout(() => {
                        setButtonState('')
                    }, 3000);

                }, (error) => {
                    console.log(error.text)
                    setButtonState('Ошибка, сервис временно не доступен')
                    resetForm();
                })
        },
    });
    return (
        <>
            <h2>Оставьте заявку или свяжитесь с нами через мессенджеры!</h2>
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
                <ErrorStyle>{buttonState}</ErrorStyle>

            </FormStyle>
        </>
    );
};

export default SignupForm;