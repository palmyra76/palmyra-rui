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
import PasswordPage from "./pages/components/PasswordPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Palmyra UI' />} >
            <Route path="/home" element={<HomePage />} />
            {/* Component */}
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/checkbox" element={<CheckboxPage />} />
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/autoComplete" element={<AutoCompletePage />} />
            <Route path="/palmyra-ui/textField" element={<TextFieldPage />} />
            <Route path="/palmyra-ui/textArea" element={<TextAreaPage />} />
            <Route path="/palmyra-ui/numberField" element={<NumberFieldPage />} />
            <Route path="/palmyra-ui/integerField" element={<IntegerFieldPage />} />
            {/* <Route path="/palmyra-ui/password" element={<PasswordPage />} /> */}

            {/* Api */}
            <Route path="/palmyra-ui/api/textField" element={<TextFieldDefnPage />} />
            <Route path="/palmyra-ui/api/numberField" element={<NumberFieldDefnPage />} />

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
