
import SectionRenderer from '../lib/palmyra/layout/flexiLayout/SectionRenderer.js';
import './App.css'

import { viewSftpClientLayout } from './FormTest/FormDef.js'

function App() {

  console.log(viewSftpClientLayout.tabs[0].sections[0]);

  const def: any = viewSftpClientLayout.tabs[0].sections[1];

  return (
    <div>
      <SectionRenderer
        sectionLayout={def} formContext={{rules:{}, data:{}, onDataChange:(d) => {console.log(d)}}}
      ></SectionRenderer>
    </div>
  )
}

export default App
