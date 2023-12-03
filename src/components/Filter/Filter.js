import { Formik } from 'formik';
import { Form, Field } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Formik initialValues={{ filter: '' }}>
      <Form>
        <Field
          type="text"
          placeholder="Фільтр"
          value={filter}
          onChange={evt => onFilter(evt.target.value)}
        />
      </Form>
    </Formik>

    // <div>
    //   <input
    //     type="text"
    //     value={filter}
    //     onChange={evt => onFilter(evt.target.value)}
    //     placeholder="Фільтр"
    //   />
    // </div>
  );
};
