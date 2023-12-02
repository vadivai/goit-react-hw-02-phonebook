import { Formik } from 'formik';
import { Form, Field, FormGroup, Button } from './FormAddContact.styled';

export const FormAddContact = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
      }}
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
