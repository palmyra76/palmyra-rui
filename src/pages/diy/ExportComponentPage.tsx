import { PalmyraForm } from "../../../lib/main"
import { Button } from "@mui/material";
import MuiTextField from "../../../lib/palmyra/mui/form/MuiTextField";
import { useEffect, useRef, useState } from "react";
import MuiRadioGroup from "../../../lib/palmyra/mui/form/MuiRadioGroup";
import {
    MuiServerLookup, PalmyraStoreFactory
} from "../../../lib/main";
import { ErrorBoundary } from "../../../lib/palmyra/layout/ErrorBoundary";
import SectionContainer from "../../../lib/palmyra/layout/container/SectionContainer";
import { IPalmyraForm } from "../../../lib/palmyra/form/PalmyraForm";
import FormFieldContainer from "../../../lib/palmyra/layout/container/FieldGroupContainer";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "../../../lib/palmyra/export/ExportComponents";

const ExportComponentPage = () => {

    const formRef = useRef<IPalmyraForm>(null);
    const [data, setData] = useState({});
    const sd = useRef(null);

    const pngRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            setData({
                serverHost: 'google.com', port: '2022', dob: '2023-10-19', gender: 'M', file: 'upload',
                genders: 'F',
                password: 'Secret12@',
                userName: 'titan',
                service: 1, serviceName: 'Rolex',
                switch: 0,
                time: '2023-10-19T09:21:21',
                dobs: '2023-10-19...2023-10-29',
                asd: '2'
            });
        }, 2000);
    }, [])
    const buttons = [
        <>
            <div>
                <Button>Add</Button>
            </div>
            <div>
                <Button>New</Button>
            </div>
        </>
    ]

    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/" });


    return <>
        <div ref={pngRef}>
            <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
                <PalmyraForm storeFactory={storeFactory}
                    formData={data} onValidChange={() => { }}
                    mode="new" ref={formRef} >
                    <MuiServerLookup attribute="parameterConfig" label="Data Group Configuration"
                        lookupOptions={{ idAttribute: 'id', displayAttribute: "name" }}
                        defaultParams={{ filter: { id: 1 } }}
                        storeOptions={{ endPoint: "palmyra/masterdata/configGroup" }} />
                    <SectionContainer title='Welcome' customButton={buttons} hideTitle>
                        <FormFieldContainer>
                            <MuiTextField attribute="serverHost"
                                title="Server Host"
                                required={true} ref={sd}
                                placeHolder="welcome"
                                length={{ min: 3, message: "Minimum of 3 letters" }} />
                            <MuiRadioGroup attribute="gender" label="Gender"
                                options={{ M: 'Male', F: 'Female' }} required />
                            <MuiTextField attribute="genders" label="gender" />
                            <MuiRadioGroup attribute="genders" title="Gender"
                                options={{ M: 'Male', F: 'Female' }} />
                        </FormFieldContainer>
                    </SectionContainer>
                    <br />

                    <Button onClick={() => { exportComponentAsPNG(pngRef, { fileName: "pngComponent" }) }}>Export as png</Button>
                    <Button onClick={() => { exportComponentAsJPEG(pngRef, { fileName: "jpegComponent" }) }}>Export as jpeg</Button>
                    <Button onClick={() => { exportComponentAsPDF(pngRef, { fileName: "pdfComponent", pdfOptions: { w: "250", h: "148", orientation: 'p', unit: 'mm' } }) }}>Export as pdf</Button>
                </PalmyraForm>
            </ErrorBoundary>
        </div>

    </>
}

export default ExportComponentPage;