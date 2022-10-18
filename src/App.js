import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [text, setText] = useState("");


  const formSuccess = () => {
    return <div className="success-form">
      <h2>Login Successful!</h2>
      <h4>Welcome <span className="text">{text }</span></h4>
    </div>;
  };
  return (
    <div className="container">
      <div className="brand-box">
        <h1>React Formik</h1>
        <p>npm install formik --save</p>
      </div>
      <div className="magic-form">
        {show ? (
          formSuccess()
        ) : (
          <Formik
            initialValues={{
              name: "",
              email: "",
              agree: false,
              favoriteColor: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required!"),
              email: Yup.string().email().required("E-mail is required!"),
              agree: Yup.boolean().required("You must accept the terms."),
              favoriteColor: Yup.string()
                .required("Choose your favorite color!")
                .oneOf(["red", "blue", "green"]),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setLoad(true)
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
                setShow(true);
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleReset,
              dirty,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div>
                  <label htmlFor="name">Name:</label>
                    <input
                 
                    id="name"
                    type="text"
                    placeholder="Hüseyin Battal"
                    className="input"
                    value={values.name}
                      onChange={(e) => {
                        handleChange(e)
setText(e.target.value)
                      
                    
                    }}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="topMargin">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hsynbattal@icloud.com"
                    className="input"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="topMargin">
                  <label htmlFor="favoriteColor">Favorite Color</label>
                  <select
                    id="favoriteColor"
                    value={values.favoriteColor}
                    onChange={handleChange}
                    style={{
                      marginTop: "10px",
                      padding: "5px",
                      width: "150px",
                      outline: "none",
                      fontSize: "16px",
                      borderRadius: "5px",
                    }}
                  >
                    <option value="" label="Choose a color" />
                    <option value="red" label="Red" />
                    <option value="blue" label="Blue" />
                    <option value="green" label="Green" />
                  </select>
                  {errors.favoriteColor && touched.favoriteColor && (
                    <div className="input-feedback">{errors.favoriteColor}</div>
                  )}
                  <div className="topMargin checkbox">
                    <input
                      id="agree"
                      type="checkbox"
                      value={values.agree}
                      onChange={handleChange}
                    />
                    <label className="checkbox-label " htmlFor="agree">
                    I accepted the terms
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={!dirty || isSubmitting}>
                  {!load ? "Submit" : "Loading..."}
                </button>
              </form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}

export default App;
