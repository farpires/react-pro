import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import '../styles/styles.css'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .required('required'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .required('required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Must accept the conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'this option is not allowed')
                        .required('required')
                })
                }>

                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="Fabio"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Arpires"
                        />

                        <MyTextInput
                            label="Email Address"
                            name="email"
                            placeholder="fabio@google.com"
                            type="email"
                        />

                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Develper</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Termns & Conditions" name="terms" />

                        <button type="submit">Submit</button>

                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
