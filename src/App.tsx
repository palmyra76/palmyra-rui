
import { useRef } from 'react';
import { FlexiLayoutRenderer } from '../lib/main.js';
import { FlexiEventHandlers } from '../lib/palmyra/layout/flexiLayout/Types.js';
import './App.css'
import '../lib/palmyra/styles/Layout.css';
import '../src/themes/blue/Colors.css';
import '../src/themes/colorDef.css';
import { viewSftpClientLayout } from './FormTest/FormDef.js'

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

  return (
    <div>
      <FlexiLayoutRenderer
        ref={form}
        data={data}
        layout={viewSftpClientLayout}
        callbacks={callbacks}
      ></FlexiLayoutRenderer>
    </div>
  )
}

export default App
