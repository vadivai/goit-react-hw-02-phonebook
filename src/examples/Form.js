// import { Formik } from 'formik';
// import * as Yup from 'yup';
// // import { Form, Field, FormGroup, ErrorMessage } from './QuizForm.styled';
// import { Form, Field, FormGroup, ErrorMessage } from 'formik';
// // import {
// //   Form as FormikForm,
// //   Field as FormikField,
// //   ErrorMessage as FormikError,
// // } from 'formik';

// export const QuizForm = ({ onAdd }) => {
//   return (
//     <Formik
//       initialValues={{
//         contacts: [],
//         name: '',
//       }}
//       onSubmit={(values, actions) => {
//         onAdd(values);
//         actions.resetForm();
//       }}
//     >
//       <Form>
//         <FormGroup>
//           Topic
//           <Field name="topic" />
//           <ErrorMessage name="topic" component="span" />
//         </FormGroup>

//         <FormGroup>
//           Time
//           <Field name="time" type="number" />
//           <ErrorMessage name="time" component="span" />
//         </FormGroup>

//         <FormGroup>
//           Questions
//           <Field name="questions" type="number" />
//           <ErrorMessage name="questions" component="span" />
//         </FormGroup>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };
