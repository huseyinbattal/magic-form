import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>React Formik</h1>
        <p>npm install formik --save</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name not be blank!"),
            email: Yup.string().email().required("E-mail not be blank!"),
            agree: Yup.boolean().required("You must accept the terms."),
            favoriteColor: Yup.string()
              .required("Choose your favorite color.")
              .oneOf(["red", "blue", "green"]),
          })}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            isSubmitting,
          }) => (
            <form>
              <h3>Sign Up</h3>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="topMargin">
                <label htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="topMargin">
                <label htmlFor="favoriteColor">Favorite Color</label>
                <select
                  id="favoriteColor"
                  value={values.favoriteColor}
                  onChange={handleChange}
                  style={{
                    
                  }}
                >

                </select>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
