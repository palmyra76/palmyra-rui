import { MuiDateTimePicker } from "../../../lib/main";
import FormX from "../wire/FormX";
import dayjs from "dayjs";


const BasicSetup = `<MuiDateTimePicker
    attribute="dateTime"
    label="Date Time"
    serverPattern="YYYY-MM-DD HH:mm:ss"
    displayPattern="DD-MM-YYYY HH:mm:ss"
    defaultValue={"2024-06-20 12:50:30"}
    disableFuture={true}
/>
`;

const BasicDateTimePicker = () => {
    return (
        <FormX>
            <MuiDateTimePicker attribute="dateTime"
                label="Date Time"
                serverPattern="YYYY-MM-DD HH:mm:ss"
                displayPattern="DD-MM-YYYY HH:mm:ss"
                defaultValue={"2024-06-20 12:50:30"}
                disableFuture={true}
            />
        </FormX>
    )
}

const ValidationSetup = `<MuiDateTimePicker
    attribute="dateTime"
    label="Date Time"
    serverPattern="YYYY-MM-DD HH:mm:ss"
    displayPattern="DD-MM-YYYY HH:mm:ss"
    defaultValue={"2024-06-20 12:50:30"}
    range={{
        minDateTime: dayjs("2024-05-01 09:30:00")
        maxDateTime: dayjs("2024-06-22 18:00:30")
    }}
/>
`;

const ValidationDateTimePicker = () => {
    return (
        <FormX>
            <MuiDateTimePicker attribute="dateTime"
                label="Date Time"
                serverPattern="YYYY-MM-DD HH:mm:ss"
                displayPattern="DD-MM-YYYY HH:mm:ss"
                defaultValue={"2024-06-20 12:50:30"}
                range={{
                    minDateTime: dayjs("2024-05-01 09:30:00"),
                    maxDateTime: dayjs("2024-06-22 18:00:30")
                }}
            />
        </FormX>
    )
}

export {
    BasicSetup, BasicDateTimePicker, ValidationSetup, ValidationDateTimePicker
}