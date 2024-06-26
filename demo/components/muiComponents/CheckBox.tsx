import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { MuiCheckBox } from "../../../lib/main";
import FormX from "../wire/FormX";

const BasicSetup = `<MuiCheckBox
    attribute="checkBox"
    defaultValue={1}
/>
`;

const BasicCheckBox = () => {
    return (
        <FormX>
            <MuiCheckBox
                attribute="checkBox"
                defaultValue={1} />
        </FormX>
    )
}

const CustomIconSetup = `<MuiCheckBox
    attribute="checkBox"
    icon={Favorite}
    checkedIcon={FavoriteBorder}
/>
`;

const CustomIconCheckBox = () => {
    return (
        <FormX>
            <MuiCheckBox
                attribute="checkBox"
                icon={Favorite}
                checkedIcon={FavoriteBorder}
            />
        </FormX>
    )
}


export { BasicSetup, BasicCheckBox, CustomIconSetup, CustomIconCheckBox }