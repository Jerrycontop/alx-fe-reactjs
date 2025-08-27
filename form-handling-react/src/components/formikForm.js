import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        resetForm();
      }}
    >
      {() => (
        <Form className="p-4 max-w-md mx-auto border rounded">
          <div className="mb-3">
            <label className="block mb-1">Username</label>
            <Field name="username" className="w-full border px-2 py-1" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="w-full border px-2 py-1" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Password</label>
            <Field name="password" type="password" className="w-full border px-2 py-1" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Register with Formik
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
