import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { FieldGroupContainer, FlexiLayoutRenderer, OptionsView, PalmyraForm, PalmyraStoreFactory, TextView, usePalmyraViewForm } from '../../../lib/main';
import { AppStoreFactory } from '../../components/store/AppStoreFactory';

const ViewFormPage = () => {
    // const { layout } = useParams();
    // const [pageDef, setPageDef] = useState(null);
    // const [data, setData] = useState({});
    const storeFactory:any = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });
    // const key = '/' + layout + '/';
    const [_isValid, setValid] = useState<boolean>(false);

    const { data } = usePalmyraViewForm({
        storeFactory,
        endPoint: "/user/about",
        id: " "
    })
    // useEffect(() => {
    //     fetch(key + '/viewForm.json')
    //         .then((response) => response.json())
    //         .then((d) => setPageDef(d));

    //     fetch(key + '/userData.json')
    //         .then((response) => response.json())
    //         .then((d) => setData(d));

    // }, [layout])

    // const onValidChange = (valid: boolean) => {
    //     console.log(valid);
    // }

    return <>
        {/* <div> {layout} View Form</div> */}
        {/* {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            data={data} storeFactory={storeFactory} layoutParams={{}}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />} */}


                    <PalmyraForm formData={data} mode="view"
                        onValidChange={setValid} storeFactory={storeFactory}>
                        <div className="palmyra-form-field-container-wrapper">
                            <FieldGroupContainer columns={1}>
                                <TextView attribute="name" label="Name" variant="outlined"
                                ></TextView>
                                <TextView attribute="email" label="Email Address" variant="outlined"
                                ></TextView>
                                <TextView attribute="phoneNumber" label="Phone Number" variant="outlined"
                                ></TextView>
                                <TextView attribute="location" label="Location" variant="outlined"
                                ></TextView>
                                <OptionsView attribute="gender" label="Gender" variant="outlined"
                                    options={{ M: 'Male', F: 'Female' }} />
                            </FieldGroupContainer>
                        </div>
                    </PalmyraForm>
    </>
}

export default ViewFormPage;