import TabFormX from "../../../components/tab/TabFormX";
import { ServerLookupForm, ServerLookupFormData, ServerLookupFormSetup } from "./ServerLookupForm";

const ServerLookupPage = () => {
    return (
        <div>
            <div className="form-box-container">
                <TabFormX labels={['Example.tsx', 'Form Data']} Children={[ServerLookupFormSetup, ServerLookupFormData]} Form={ServerLookupForm}
                    title="ServerLookup Example" />
            </div>
        </div>
    )
}

export default ServerLookupPage;