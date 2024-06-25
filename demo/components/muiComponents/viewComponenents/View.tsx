import { useEffect, useState } from "react";
import { DateView, LookupView, OptionsView, PalmyraForm, PalmyraStoreFactory, StoreFactory, TextView } from "../../../../lib/main";


const BasicSetup = `<TextView
    attribute="textView"
    textAlign='center'
    label="Text View"
    variant="outlined"
/>

<OptionsView
    attribute="optionsView"
    textAlign='center'
    label="Options View"
    variant="outlined"
    options={{ 1: 'Male', 2: 'Female' }}
/>

<LookupView
    attribute="lookupView.id"
    textAlign='center'
    label="Lookup View"
    variant="outlined"
    lookupOptions={{
        idAttribute: "lookupView.id",
        displayAttribute: "lookupView.name"
    }}
    displayAttribute="lookupView.name"
/>

<DateView
    attribute="date"
    textAlign='center'
    label="Date View"
    variant="outlined"
    displayPattern="dd/MM/yyyy"
/>
`;

const BasicView = () => {
    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({});

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            textView: "Hello",
            optionsView: 2,
            lookupView: { id: 1, name: 'Tamil Nadu' },
            date: '2024-06-24'
        })
    }, [])

    return (
        <PalmyraForm storeFactory={storeFactory}
            formData={data} mode="new" onValidChange={() => { }}>
            <TextView
                attribute="textView"
                textAlign='center'
                label="Text View"
                variant="outlined"
            />
            <OptionsView
                attribute="optionsView"
                textAlign='center'
                label="Options View"
                variant="outlined"
                options={{ 1: 'Male', 2: 'Female' }}
            />
            <LookupView
                attribute="lookupView.id"
                textAlign='center'
                label="Lookup View"
                variant="outlined"
                lookupOptions={{ idAttribute: "lookupView.id", displayAttribute: "lookupView.name" }}
                displayAttribute="lookupView.name"
            />
            <DateView
                attribute="date"
                textAlign='center'
                label="Date View"
                variant="outlined"
                displayPattern="dd/MM/yyyy"
            />
        </PalmyraForm>
    )
}


export {
    BasicSetup, BasicView
}