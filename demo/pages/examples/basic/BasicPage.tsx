import TabFormX from "../../../components/tab/TabFormX";
import { BasicForm, BasicFormSetup } from "./BasicForm";

const BasicPage = () => {
  return (
    <div className="form-box-container">
      <TabFormX labels={['Example.tsx']} Children={[BasicFormSetup]} Form={BasicForm} 
             title="Basic Example"/>
    </div>
  )
}

export default BasicPage;