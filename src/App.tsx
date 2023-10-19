import { useRef } from 'react';
import { FlexiLayoutRenderer } from '../lib/main.js';
import { FlexiEventHandlers } from '../lib/palmyra/layout/flexiLayout/Types.js';
import './App.css'
import '../lib/palmyra/styles/Layout.css';
import '../src/themes/blue/Colors.css';
import '../src/themes/colorDef.css';
import { viewSftpClientLayout } from './FormTest/FormDef.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './testPage/HomePage.js';
import GroupPage from './testPage/GroupPage.js';
import TreeMenuPage from './testPage/TreeMenuPage.js';
import CardLayout from './../lib/palmyra/layout/card/CardLayout';
import ChildCard from './CardTest/ChildCard.js';

function App() {
  const form = useRef(null);
  console.log(viewSftpClientLayout.tabs[0].sections[0]);


  function onValidChange(isValid) {
    console.log("validityChange called " + isValid);
    console.log(form.current.getData());
  }

  const callbacks: FlexiEventHandlers = {
    onFormValidChange: onValidChange
  }

  const data = {
    "config": {
      "scanInterval": "15",
      "fileTransfer": "Upload",
      "serverHost": "127.0.0.1",
      "port": "2023",
      "targetFolder": "asf",
      "auth": {
        "userName": "hgasfg",
        "password": "24234s"
      },
      "baseFolder": "asfdasdf"
    },
    "serviceName": "asfdfileupload"
  }

const dataList =[
  {
    name:"surya",
  },{
    name:"karthi",
  }
]


  return (
    <div>
      <BrowserRouter>
        <TreeMenuPage />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin/:usermgmt/:group" element={<GroupPage />} />
          <Route path="/flexyra/edit/:pagename" element={<GroupPage />} />
          <Route path="/flexyra/view/:pagename" element={<GroupPage />} />
          <Route path="/flexyra/grid/:pagename" element={<GroupPage />} />
          <Route path="/flexyra/dashboard/:pagename" element={<GroupPage />} />
        </Routes>
      </BrowserRouter>

      {/* <FlexiLayoutRenderer
        ref={form}
        data={data}
        layout={viewSftpClientLayout}
        callbacks={callbacks}
      ></FlexiLayoutRenderer> */}

      <CardLayout Child={ChildCard} dataList={dataList}/>
    </div>
  )
}

export default App
