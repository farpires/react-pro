import "../styles/styles.css";
import { useFormik } from 'formik';
import * as Yup from 'yup'

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: async values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 character or less")
                .required('required'),
            lastName: Yup.string()
                .email("Invalid email address")
                .required('required'),
            email: Yup.string()
                .max(10, "Must be 10 character or less")
                .required('required'),

        })
    })
    return (
        <div>
            <h1>Formik Yup</h1>
            <form
                onSubmit={handleSubmit}
                noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('fistName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
