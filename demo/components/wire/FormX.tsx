import { useState } from "react";
import { FieldGroupContainer, PalmyraForm, StoreFactory, usePalmyraNewForm } from "../../../lib/main";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";

interface IFormInput {
    children: React.ReactNode
}
const FormX = (props: IFormInput) => {
    const { children } = props;
    const [_isValid, setValid] = useState<boolean>(false);

    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/testdata/form' });

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
