import { useState } from 'react';
import { useParams } from "react-router-dom";
import { PalmyraStoreFactory, usePalmyraEditForm, PalmyraForm, MuiTextField } from '../../../lib/main';
import { Button } from '@mui/material';


const BackendViewFormPage = () => {
    const params = useParams();

    const [isValid, setValid] = useState<boolean>(false);
    const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });

    const { data, saveData, formRef } = usePalmyraEditForm({
        storeFactory,
        endPoint: '/userManagement',
        id: params.id
    })

    return (
        <div className='form-container'>
            <div className='form-header-container'>
                <div>Test Edit Form</div>
                <Button disabled={!isValid}
                    className={!isValid ? 'form-disabled-button' : 'form-filled-button'}
                    disableRipple onClick={saveData}>Save</Button>
            </div>
            <PalmyraForm formData={data} mode="edit" onValidChange={setValid} ref={formRef}>
                <MuiTextField attribute='name' label='Name'/>
            </PalmyraForm>
        </div>
    );
}

export default BackendViewFormPage;