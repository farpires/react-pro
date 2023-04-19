import { ErrorMessage, useField } from 'formik'

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label>
        <input type='checkbox'{...field} {...props}></input>
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>

  )
}
