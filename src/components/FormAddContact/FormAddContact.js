import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" placeholder="Введіть ім'я" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
