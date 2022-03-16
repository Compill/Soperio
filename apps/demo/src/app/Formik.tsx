import { Container, Spinner } from "@soperio/ui";
import { Form, Formik } from "formik";


/**
 *
 *
 */
export default function Page({ ...props })
{

    return (
      <Formik initialValues={{ email: "" }} onSubmit={() => console.log('submit')}>
        <Form dflex flexGrow="1" />
      </Formik>    );
}
