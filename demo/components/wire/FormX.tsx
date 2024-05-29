import { useState } from "react";
import AppStoreFactory from "./Storefactory";
import { FieldGroupContainer, PalmyraForm, usePalmyraNewForm } from "../../../lib/main";

interface IFormInput {
    children: React.ReactNode
}
const FormX = (props: IFormInput) => {
    const { children } = props;
    const [_isValid, setValid] = useState<boolean>(false);

    const storeFactory = AppStoreFactory;

    const { data } = usePalmyraNewForm({
        storeFactory,
        endPoint: ""
    })

    return (
        <PalmyraForm formData={data} mode="new" onValidChange={setValid}
            storeFactory={storeFactory}>
            <FieldGroupContainer>
                <div className="formx-children-container">
                    {children}
                </div>
            </FieldGroupContainer>
        </PalmyraForm>
    )
}

export default FormX;
