import { useState } from "react";
import { FieldGroupContainer, MuiServerLookup, PalmyraForm, StoreFactory, usePalmyraNewForm } from "../../../../lib/main";
import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";
import { Button } from "@mui/material";
import { PalmyraStoreFactory } from "palmyra-wire";

const ServerLookupForm = () => {
  const [isValid, setValid] = useState(false);
  const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });

  const onValidityChange = (valid: boolean): void => {
    setValid(valid);
  }

  const { formRef } = usePalmyraNewForm({
    storeFactory,
    endPoint: ""
  })
  const handleSubmitClick = () => {
    if (formRef?.current) {
      const formData = formRef.current.getData();
      const countryNames = formData.country.map(country => country.name).join(', ');
      alert(`
      "Country Name":${formData?.state.id},
      "Country Names": ${countryNames}`);
      console.log(countryNames);
    }
  };
  return (
    <div>
      <PalmyraForm storeFactory={storeFactory}
        formData={{}} onValidChange={onValidityChange}
        mode="new" ref={formRef} >
        <FieldGroupContainer columns={1}>
          <span className="h2">Single ServerLookup</span>
          <MuiServerLookup attribute="state.id"
            displayAttribute="state.name"
            variant="outlined"
            label="Select State"
            lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
            storeOptions={{ endPoint: "/multiServerlookupData.json" }} />
          <span className="h2">Multi ServerLookup</span>
          <MuiServerLookup attribute="country"
            displayAttribute="country.name"
            variant="outlined"
            label="Select Country"
            multiple
            lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
            storeOptions={{ endPoint: "/serverlookupData.json" }} />
        </FieldGroupContainer>
      </PalmyraForm>
      <div className="form-btn-container">
        <Button disabled={!isValid}
          className={!isValid ? 'disabled-button' : 'filled-button'}
          onClick={handleSubmitClick}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export { ServerLookupForm, ServerLookupFormSetup, ServerLookupFormData }


const FormSetup = `import { useState } from "react";
import { FieldGroupContainer, MuiServerLookup, PalmyraForm, PalmyraStoreFactory, StoreFactory, usePalmyraNewForm } from "../../../../lib/main";
import AppStoreFactory from "../../../components/wire/Storefactory";
import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";
import { Button } from "@mui/material";

const ServerLookupForm = () => {
  const [isValid, setValid] = useState(false);
  const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });

  const onValidityChange = (valid: boolean): void => {
    setValid(valid);
  }

  const { formRef } = usePalmyraNewForm({
    storeFactory,
    endPoint: ""
  })
  const handleSubmitClick = () => {
    if (formRef?.current) {
      const formData = formRef.current.getData();
      const countryNames = formData.country.map(country => country.name).join(', ');
      alert(
      "Country Name:$"{formData?.state.id},
      "Country Names: $"{countryNames}");
    }
  };
  return (
    <div>
      <PalmyraForm storeFactory={storeFactory}
        formData={{}} onValidChange={onValidityChange}
        mode="new" ref={formRef} >
        <FieldGroupContainer columns={1}>
              <span className="h2">Single ServerLookup</span>
          <MuiServerLookup attribute="state.id"
              displayAttribute="state.name"
              variant="outlined"
              label="Select State"
              lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
              storeOptions={{ endPoint: "/multiServerlookupData.json" }} 
          />
              <span className="h2">Multi ServerLookup</span>
          <MuiServerLookup attribute="country"
              displayAttribute="country.name"
              variant="outlined"
              label="Select Country"
              multiple
              lookupOptions={{ idAttribute: "id", displayAttribute: "name" }}
              storeOptions={{ endPoint: "/serverlookupData.json" }} 
          />
        </FieldGroupContainer>
      </PalmyraForm>
      <div className="form-btn-container">
        <Button disabled={!isValid}
          className={!isValid ? 'disabled-button' : 'filled-button'}
          onClick={handleSubmitClick}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default ServerLookupForm;
`
const FormData = `
{
  "result": [
      {
          "id":1,
          "name": "India"
      },
      {
          "id":2,
          "name": "England"
      },
      {
          "id":3,
          "name": "Australia"
      },
      {
          "id":4,
          "name": "Germany"
      }
  ]
}
`
const ServerLookupFormSetup = () => {
  return (
    <div className="config-container">
      <CodeHighlighter code={FormSetup} />
    </div>
  )
}

const ServerLookupFormData = () => {
  return (
    <div className="config-container">
      <CodeHighlighter code={FormData} />
    </div>
  )
}