import { useEffect, useRef, useState } from "react";
import { IEndPoint, IFieldEventListener, IFormCustomizer, IFormHelper, IPalmyraForm, ISelectField, MuiRadioGroup, MuiSelect, MuiTextField, PalmyraForm, PalmyraStoreFactory, SectionContainer, StoreFactory, TreeQueryStore, createFormHelper } from "../../../lib/main";
import { AppStoreFactory } from "../../components/store/AppStoreFactory";
import { ErrorBoundary } from "../../../lib/palmyra/layout/ErrorBoundary";
import { Button } from "@mui/material";
import { FieldGroupContainer } from "../../components/form";
import AsyncTreeMenuEditor, { IAsyncTreeMenuEditor } from "../../../lib/palmyra/layout/tree/AsyncTreeMenuEditor";
import { PalmyraTreeStore } from "../../../lib/palmyra/store/palmyra/PalmyraTreeStore";
import AsyncTreeMenu from "../../../lib/palmyra/layout/tree/AsyncTreeMenu";


const DynamicFields = () => {
    const formRef = useRef<IPalmyraForm>(null);
    const [isValid, setValid] = useState(false);
    const [data, setData] = useState({});
    const [readOnly, setReadOnly] = useState<boolean>(true);


    const onValidityChange = (valid: boolean): void => {
        setValid(valid);
        console.log("validity changed to " + formRef.current.isValid(), formRef.current.getData());
    }

    const submitData = () => {
        console.log(formRef.current.getData());
    }

    const formHelper: IFormHelper = createFormHelper();

    const ncbEventListener: IFieldEventListener = {
        onChange: function (key: string, value: any, valid?: boolean): void {
            console.log(value);
            const ncbOptions: ISelectField = formHelper.getFieldRef<ISelectField>('ncbOptions');
            if (ncbOptions) {
                console.log(ncbOptions);
                ncbOptions.setVisible(value == "true");
            }
        }
    }

    const customizer: IFormCustomizer = {
        getFormHelper: function () {
            return formHelper
        },
        getEventListeners: function () {
            return {
                'ncb': ncbEventListener
            }
        },
        getValueListeners: function () {
            return {};
        }
    }
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api' });
    const treeRef = useRef<IAsyncTreeMenuEditor>();

    const submitValue = () => {
        console.log(treeRef.current.getValue())
        const formStore = storeFactory.getFormStore({}, '/acl/editor/menu/group/{groupId}');
        const rootMenu = treeRef.current.getValue();
        formStore.post(rootMenu, { endPointVars: { groupId: 1 } });
    }

    const endPoint: IEndPoint = '/acl/editor/menu/list';
    const MenuEndPoint: IEndPoint = '/acl/editor/menu/group/1/menuList';
    const SideMenuEndPoint: IEndPoint = '/acl/editor/menu/group/1/sidemenuList';
    const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore({ target: "/api" }, SideMenuEndPoint);

    const editMenu = () => {
        setReadOnly(false)
    }

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            {readOnly ? <div> <Button className="filled-button" onClick={editMenu}>Edit</Button> </div> :
                <div> <Button className="filled-button" onClick={submitValue}>Submit</Button></div>}
            <AsyncTreeMenuEditor ref={treeRef} storeFactory={storeFactory} endPoint={MenuEndPoint} groupId={1} readOnly={readOnly} />
            <AsyncTreeMenu store={treeStore} />
            {/* <PalmyraForm storeFactory={storeFactory} customizer={customizer}
                formData={data} onValidChange={onValidityChange}
                mode="edit" ref={formRef} >
                <SectionContainer title='Welcome'>
                    <FieldGroupContainer columns={2}>
                        <MuiTextField attribute="serverHost"
                            title="Server Host"
                            placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                        <MuiSelect attribute="gender" title="Gender"
                            options={{ M: 'Male', F: 'Female' }} />
                        <MuiRadioGroup attribute="ncb" title="No Claim Bonus"
                            required={true}
                            options={{ true: 'Yes', false: 'No' }} />
                      

                        <MuiTextField attribute="sfs" title="Server " placeHolder="welcome"
                            length={{ min: 3, message: "Minimum of 3 letters" }} />
                    </FieldGroupContainer>
                </SectionContainer>
                <br />
                <Button disabled={!isValid} onClick={() => { submitData() }}>Test Me</Button>

                <Button onClick={() => { onValidityChange(false) }}>Toggle Me</Button>
            </PalmyraForm> */}

        </ErrorBoundary>

    </>
    )
}

export default DynamicFields;