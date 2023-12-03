import { Formik } from 'formik';
import { Form, Field, FormGroup } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Formik initialValues={{ filter: '' }}>
      <Form>
        <FormGroup>
          Find contacts by name
          <Field
            type="text"
            name="filter"
            placeholder="Фільтр"
            value={filter}
            onChange={evt => onFilter(evt.target.value)}
          />
        </FormGroup>
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
