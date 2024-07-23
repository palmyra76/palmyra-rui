import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main/MainLayout";
import HomePage from "./pages/home/HomePage";
import AutoCompletePage from "./pages/components/AutoCompletePage";
import CheckboxPage from "./pages/components/CheckboxPage";
import BasicPage from "./pages/examples/basic/BasicPage";
import ServerLookupPage from "./pages/examples/lookup/ServerLookupPage";
import TextFieldPage from "./pages/components/TextFieldPage";
import TextFieldDefnPage from "./pages/api/TextFieldDefnPage";
import TextAreaPage from "./pages/components/TextAreaPage";
import NumberFieldPage from "./pages/components/NumberFieldPage";
import NumberFieldDefnPage from "./pages/api/NumberFieldDefnPage";
import IntegerFieldPage from "./pages/components/IntegerFieldPage";
// import PasswordPage from "./pages/components/PasswordPage";
import ServerLookupFieldPage from "./pages/components/ServerLookupFieldPage";
import ServerLookupDefnPage from "./pages/api/ServerLookupDefnPage";
import SwitchPage from "./pages/components/SwitchPage";
import SwitchDefnPage from "./pages/api/SwitchDefnPage";
import RadioGroupPage from "./pages/components/RadioGroupPage";
import RadioGroupDefnPage from "./pages/api/RadioGroupDefnPage";
import SelectFieldPage from "./pages/components/SelectFieldPage";
import SelectFieldDefnPage from "./pages/api/SelectFieldDefnPage";
import TextAreaDefnPage from "./pages/api/TextAreaDefnPage";
import DatePickerPage from "./pages/components/DatePickerPage";
import DatePickerDefnPage from "./pages/api/DatePickerDefnPage";
import DateTimePickerPage from "./pages/components/DateTimePickerPage";
import IntegerFieldDefnPage from "./pages/api/IntegerFieldDefnPage";
import SliderPage from "./pages/components/SliderPage";
import SliderDefnPage from "./pages/api/SliderDefnPage";
import ViewPage from "./pages/components/viewComponent/ViewPage";
import ViewDefnPage from "./pages/api/ViewDefnPage";
import RatingFieldPage from "./pages/components/RatingFieldPage";
import RatingFieldDefnPage from "./pages/api/RatingFieldDefnPage";
import CheckBoxDefnPage from "./pages/api/CheckBoxDefnPage";
import CheckboxGroupPage from "./pages/components/CheckboxGroupPage";
import ServerCheckboxPage from "./pages/components/ServerCheckboxPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Palmyra UI' />} >
            <Route path="/home" element={<HomePage />} />
            {/* Component */}
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/checkBox" element={<CheckboxPage />} />
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/textField" element={<TextFieldPage />} />
            <Route path="/palmyra-ui/textArea" element={<TextAreaPage />} />
            <Route path="/palmyra-ui/numberField" element={<NumberFieldPage />} />
            <Route path="/palmyra-ui/integerField" element={<IntegerFieldPage />} />
            {/* <Route path="/palmyra-ui/password" element={<PasswordPage />} /> */}
            <Route path="/palmyra-ui/serverlookup" element={<ServerLookupFieldPage />} />
            <Route path="/palmyra-ui/switch" element={<SwitchPage />} />
            <Route path="/palmyra-ui/radioGroup" element={<RadioGroupPage />} />
            <Route path="/palmyra-ui/select" element={<SelectFieldPage />} />
            <Route path="/palmyra-ui/datePicker" element={<DatePickerPage />} />
            <Route path="/palmyra-ui/dateTimePicker" element={<DateTimePickerPage />} />
            <Route path="/palmyra-ui/slider" element={<SliderPage />} />
            <Route path="/palmyra-ui/rating" element={<RatingFieldPage />} />
            <Route path="/palmyra-ui/checkBoxGroup" element={<CheckboxGroupPage />} />            
            <Route path="/palmyra-ui/serverCheckBox" element={<ServerCheckboxPage />} />            
            <Route path="/palmyra-ui/view" element={<ViewPage />} />

            {/* Api */}
            <Route path="/palmyra-ui/api/textField" element={<TextFieldDefnPage />} />
            <Route path="/palmyra-ui/api/numberField" element={<NumberFieldDefnPage />} />
            <Route path="/palmyra-ui/api/integerField" element={<IntegerFieldDefnPage />} />
            <Route path="/palmyra-ui/api/serverlookup" element={<ServerLookupDefnPage />} />
            <Route path="/palmyra-ui/api/switch" element={<SwitchDefnPage />} />
            <Route path="/palmyra-ui/api/radioGroup" element={<RadioGroupDefnPage />} />
            <Route path="/palmyra-ui/api/select" element={<SelectFieldDefnPage />} />
            <Route path="/palmyra-ui/api/textArea" element={<TextAreaDefnPage />} />
            <Route path="/palmyra-ui/api/datePicker" element={<DatePickerDefnPage />} />
            <Route path="/palmyra-ui/api/dateTimePicker" element={<DatePickerDefnPage />} />
            <Route path="/palmyra-ui/api/slider" element={<SliderDefnPage />} />
            <Route path="/palmyra-ui/api/rating" element={<RatingFieldDefnPage />} />
            <Route path="/palmyra-ui/api/checkBox" element={<CheckBoxDefnPage />} />
            <Route path="/palmyra-ui/api/view" element={<ViewDefnPage />} />

            {/* Example */}
            <Route path="/palmyra-ui/example/basic" element={<BasicPage />} />
            <Route path="/palmyra-ui/example/serverlookup" element={<ServerLookupPage />} />

            <Route path="*" element={<h1>Under Construction</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;