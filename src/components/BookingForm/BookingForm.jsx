import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import Button from "../Button/Button";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.string()
      .min(8, "Booking date must be at least 8 characters")
      .required("Booking date is required"),
    comment: Yup.string(),
  });

  const onSubmit = (values, { resetForm }) => {
    toast.success(`The date ${values.bookingDate} is successfully booked!`);
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className={css.form}>
              <div className={css.formGroup}>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={css.formField}
                  placeholder="Name*"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.fetchError}
                />
              </div>

              <div className={css.formGroup}>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={css.formField}
                  placeholder="Email*"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.fetchError}
                />
              </div>

              <div className={css.formGroup}>
                <Field
                  type="text"
                  id="bookingDate"
                  name="bookingDate"
                  className={css.formField}
                  placeholder="Booking date*"
                />
                <ErrorMessage
                  name="bookingDate"
                  component="div"
                  className={css.fetchError}
                />
              </div>

              <div className={css.formGroup}>
                <Field
                  as="textarea"
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  className={css.formArea}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={css.fetchError}
                />
              </div>
            </div>
            <div className={css.formButton}>
              <Button type="submit" message="Send" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
