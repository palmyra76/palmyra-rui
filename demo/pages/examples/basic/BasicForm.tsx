import { useState } from "react";
import { FieldGroupContainer, MuiTextArea, MuiTextField, PalmyraForm, StoreFactory, usePalmyraNewForm } from "../../../../lib/main";
import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";
import { Button } from "@mui/material";
import { PalmyraStoreFactory } from "palmyra-wire";

const BasicForm = () => {
  const [isValid, setValid] = useState(false);
  const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });

  const onValidityChange = (valid: boolean): void => {
    setValid(valid);
  }

  const { formRef } = usePalmyraNewForm({
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
        formData={{}} onValidChange={onValidityChange}
        mode="new" ref={formRef} >
        <FieldGroupContainer columns={1}>
          <MuiTextField attribute="name"
            title="Name"
            variant="outlined"
            required={true}
            placeHolder="surya"
            length={{ min: 3, errorMsg: "Minimum of 3 letters" }} />
          <MuiTextField attribute="email"
            title="Email"
            variant="outlined"
            required={true}
            placeHolder="surya@gmail.com"
            validRule={"email"} />
          <MuiTextArea attribute="address"
            title="Address"
            placeHolder="22/123, xxx nagar,chennai"
            length={{ min: 3, errorMsg: "Minimum of 3 letters" }} />
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
import { FieldGroupContainer, MuiTextArea, MuiTextField, PalmyraForm, PalmyraStoreFactory, StoreFactory, usePalmyraNewForm } from "../../../../lib/main";
import AppStoreFactory from "../../../components/wire/Storefactory";
import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";
import { Button } from "@mui/material";

const BasicForm = () => {
    const [isValid, setValid] = useState(false);
    const storeFactory :StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });
  
    const onValidityChange = (valid: boolean): void => {
      setValid(valid);
    }
  
    const { formRef } = usePalmyraNewForm({
      storeFactory,
      endPoint: ""
    })

    const handleSaveClick = () => {
      if (formRef.current) {
        const formData = formRef.current.getData();
        alert(Name: $"{formData.name}
          Email:$"{formData.email}
          Address: $"{formData.address});
      }
    };
    
    return (
      <div>
        <PalmyraForm storeFactory={storeFactory}
          formData={{}} onValidChange={onValidityChange}
          mode="new" ref={formRef} >
          <FieldGroupContainer columns={1}>
            <MuiTextField attribute="name"
              title="Name"
              variant="outlined"
              required={true}
              placeHolder="surya"
              length={{ min: 3, message: "Minimum of 3 letters" }} 
            />
            <MuiTextField attribute="email"
              title="Email"
              variant="outlined"
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