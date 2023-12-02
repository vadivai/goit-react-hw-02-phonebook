import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, Button } from './FormAddContact.styled';

const contactsValidation = Yup.object().shape({
  name: Yup.string().min(5, 'Too Short!').required('Required'),
  // tel: Yup.number().min(7, 'At least 7').required('Required'),
});

export const FormAddContact = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      validationSchema={contactsValidation}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      {/* onSubmit={() => onAddContact(name)} */}
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" placeholder="Введіть ім'я" />
          <Button type="submit">Add contact</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
};
