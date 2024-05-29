
import { PalmyraTreeStore } from "palmyra-wire";
import { AsyncTreeMenu } from "../../../lib/main";

const DynamicMenu = ({ sidebarWidth }) => {



    const treeStore = new PalmyraTreeStore({ target: '/demo/components/menu' }, "/flatMenu.json");

    return (
        <div style={{ width: "100%" }}>
            <div>
                <AsyncTreeMenu store={treeStore} />
            </div>
        </div>
    )
}

export default DynamicMenu;
