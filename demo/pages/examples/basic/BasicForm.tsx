import { useState } from "react";
import { FieldGroupContainer, MuiTextArea, MuiTextField, PalmyraForm, usePalmyraNewForm } from "../../../../lib/main";
import AppStoreFactory from "../../../components/wire/Storefactory";
import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";
import { Button } from "@mui/material";

const BasicForm = () => {
  const [isValid, setValid] = useState(false);
  const storeFactory = AppStoreFactory;

  const onValidityChange = (valid: boolean): void => {
    setValid(valid);
    console.log("validity changed to " + formRef.current.isValid(), formRef.current.getData());
  }

  const { data, formRef } = usePalmyraNewForm({
    storeFactory,
    endPoint: ""
  })
  const handleSaveClick = () => {
    if (formRef.current) {
      const formData = formRef.current.getData();
      alert(`"Name": ${formData.name}\n"Email":${formData.email}\n"Address": ${formData.address}`);
    }
  };
  return (
    <div>
      <PalmyraForm storeFactory={storeFactory}
        formData={data} onValidChange={onValidityChange}
        mode="new" ref={formRef} >
        <FieldGroupContainer columns={1}>
          <MuiTextField attribute="name"
            title="Name"
            required={true}
            placeHolder="surya"
            length={{ min: 3, message: "Minimum of 3 letters" }} />
          <MuiTextField attribute="email"
            title="Email"
            required={true}
            placeHolder="surya@gmail.com"
            validationRule={"email"} />
          <MuiTextArea attribute="address"
            title="Address"
            placeHolder="22/123, xxx nagar,chennai"
            length={{ min: 3, message: "Minimum of 3 letters" }} />
        </FieldGroupContainer>
      </PalmyraForm>
      <div className="form-btn-container">
        <Button disabled={!isValid}
          className={!isValid ? 'disabled-button' : 'filled-button'}
          onClick={handleSaveClick}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export { BasicForm, BasicFormSetup }


const FormSetup = `import { useState } from "react";
import { FieldGroupContainer, MuiTextArea, MuiTextField, PalmyraForm, 
         usePalmyraNewForm } from "../../../../lib/main";
import AppStoreFactory from "../../../components/wire/Storefactory";

const BasicForm = () => {
    const [isValid, setValid] = useState(false);
    const storeFactory = AppStoreFactory;
  
    const onValidityChange = (valid: boolean): void => {
      setValid(valid);
    }
  
    const { data, formRef } = usePalmyraNewForm({
      storeFactory,
      endPoint: ""
    })

    const handleSaveClick = () => {
      if (formRef.current) {
        const formData = formRef.current.getData();
        alert("Name: $"{formData.name}
              Address:$"{formData.address}");
      }
    };
    
    return (
      <div>
        <PalmyraForm storeFactory={storeFactory}
          formData={data} onValidChange={onValidityChange}
          mode="new" ref={formRef} >
          <FieldGroupContainer columns={1}>
            <MuiTextField attribute="name"
              title="Name"
              required={true}
              placeHolder="surya"
              length={{ min: 3, message: "Minimum of 3 letters" }} 
            />
            <MuiTextField attribute="name"
              title="Email"
              required={true}
              placeHolder="surya@gmail.com"
              validationRule={"email"} 
            />
            <MuiTextArea attribute="address" 
              title="Address"
              placeHolder="22/123, xxx nagar,chennai"
              length={{ min: 3, message: "Minimum of 3 letters" }} 
            />
          </FieldGroupContainer>
        </PalmyraForm>
        <button disabled={!isValid}
          className={!isValid ? 'disabled-button' : 'filled-button'}
          onClick={handleSaveClick}>
          Submit
        </button>
      </div>
    )
  }

export default BasicForm;
`

const BasicFormSetup = () => {
  return (
    <div className="config-container">
      <CodeHighlighter code={FormSetup} />
    </div>
  )
}