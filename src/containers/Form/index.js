import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { updateObject, checkValidity } from "../../shared/utility";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { StyledForm, SpinnerContainer } from "./styles";
import { initNewDriver } from "../../store/actions/newDriverActions";

function Form({ loading, onRegisterNewDriver }) {
  const [btnState, setBtnState] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [controls, setControls] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Nombre",
        label: "Nombre",
        name: "name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    age: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Edad",
        label: "Edad",
        name: "age",
      },
      value: "",
      validation: {
        required: true,
        maxLength: 2,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
    phone: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Teléfono",
        label: "Teléfono",
        name: "phone",
      },
      value: "",
      validation: {
        required: true,
        maxLength: 10,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "E-Mail",
        label: "E-Mail",
        name: "email",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    plate: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Patente",
        label: "Patente",
        name: "plate",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    version: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Modelo",
        label: "Modelo",
        name: "version",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    year: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Año",
        label: "Año",
        name: "year",
      },
      value: "",
      validation: {
        required: true,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true,
      }),
    });
    if (
      updatedControls.name.valid &&
      updatedControls.age.valid &&
      updatedControls.phone.valid &&
      updatedControls.email.valid &&
      updatedControls.plate.valid &&
      updatedControls.version.valid &&
      updatedControls.year.valid
    ) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
    setControls(updatedControls);
  };

  const formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    onRegisterNewDriver({
      name: controls.name.value,
      age: controls.age.value,
      phone: controls.phone.value,
      email: controls.email.value,
      plate: controls.plate.value,
      version: controls.version.value,
      year: controls.year.value,
    });
    setSuccessMessage(true);
  };

  let formFields = formElementsArray.map((formElement) => {
    return (
      <Fragment key={formElement.id}>
        <Label
          labelFor={formElement.config.elementConfig.name}
          labelText={formElement.config.elementConfig.label}
        />
        <Input
          inputtype={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      </Fragment>
    );
  });

  return (
    <StyledForm onSubmit={submitHandler} autoComplete="off">
      {!loading ? (
        <>
          {formFields}
          <Button btnLabel="Enviar" btnType="submit" disabled={btnState} />
        </>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      {!loading && successMessage ? (
        <p style={{ color: "green", fontSize: "16px", textAlign: "center" }}>
          Se ha solicitado un nuevo conductor con exito!
        </p>
      ) : null}
    </StyledForm>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.newDriver.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterNewDriver: (driver) => dispatch(initNewDriver(driver)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
