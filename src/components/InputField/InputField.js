import { useField } from "formik";

import "../bootstrap/css/bootstrap.css";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label>
        {label}
        <input
          {...field}
          {...props}
          className={`mt-2 form-control ${
            meta.touched && meta.error ? "is-invalid" : ""
          }`}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
