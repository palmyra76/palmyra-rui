import { useRef, useState } from "react";
import { IEndPoint, PalmyraStoreFactory, StoreFactory, TreeQueryStore } from "../../../lib/main";
import { ErrorBoundary } from "../../../lib/palmyra/layout/ErrorBoundary";
import { Button } from "@mui/material";
import AsyncTreeMenuEditor, { IAsyncTreeMenuEditor } from "../../../lib/palmyra/layout/tree/AsyncTreeMenuEditor";
import { PalmyraTreeStore } from "../../../lib/palmyra/store/palmyra/PalmyraTreeStore";
import AsyncTreeMenu from "../../../lib/palmyra/layout/tree/AsyncTreeMenu";


const TreeMenu = () => {
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const groupId = 1;

    const storeFactory: StoreFactory<any> = new PalmyraStoreFactory({ baseUrl: '/api' });
    const treeRef = useRef<IAsyncTreeMenuEditor>();

    const submitValue = () => {
        const formStore = storeFactory.getFormStore({}, '/palmyra/admin/acl/group/{groupId}');
        const rootMenu = treeRef.current.getValue();
        const record = {
            rootMenu,
            id: groupId,
            name: 'admin',
            status: 1
        }
        formStore.put(record, { endPointVars: { groupId } }).then(() => {

        });
    }

    const MenuEndPoint: IEndPoint = '/palmyra/admin/acl/group/' + groupId + '/menuList';
    const SideMenuEndPoint: IEndPoint = '/palmyra/acl/menu/listAll';
    const treeStore: TreeQueryStore<any, any> = new PalmyraTreeStore({ target: "/api" }, SideMenuEndPoint);

    const editMenu = () => {
        setReadOnly(false)
    }

    return (<>
        <ErrorBoundary fallback={<p>FlexiLayoutRenderer: Something went wrong</p>}>
            {readOnly ? <div> <Button className="filled-button" onClick={editMenu}>Edit</Button> </div> :
                <div> <Button className="filled-button" onClick={submitValue}>Submit</Button></div>}
            <div style={{ display: 'flex', backgroundColor: 'white' }}>
                <div style={{ width: "30%", marginTop: '10px' }}>Menu
                    <AsyncTreeMenuEditor ref={treeRef} storeFactory={storeFactory} endPoint={MenuEndPoint}
                        groupId={groupId} readOnly={readOnly} fineGrained={true} />
                </div>
                <div style={{ width: "70%", marginTop: '10px' }}>Side Menu
                    <AsyncTreeMenu store={treeStore} /></div>
            </div>
        </ErrorBoundary>

    </>
    )
}

export default TreeMenu;