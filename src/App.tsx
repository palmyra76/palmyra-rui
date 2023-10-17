
import { FlexiLayoutRenderer } from '../lib/main.js';
import './App.css'

import { viewSftpClientLayout } from './FormTest/FormDef.js'

function App() {

  console.log(viewSftpClientLayout.tabs[0].sections[0]);
  
  var formContext = { rules: {}, data: {}, onDataChange: (d) => { console.log(d.data) } };

  const pageContext = {
    formContext
  };

  return (
    <div>
      <FlexiLayoutRenderer
        layout={viewSftpClientLayout}
        formContext={formContext}
      ></FlexiLayoutRenderer>
    </div>
  )
}

export default App
