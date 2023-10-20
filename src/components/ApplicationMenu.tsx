
import { useEffect, useState } from "react";

import TreeMenu from "../../lib/palmyra/layout/tree/TreeMenu"


const orgRoutes = {
    children: [
        {
            name: "Master Data"
        }
    ]
};

const ApplicationMenu = () => {
    const [routes, setRoutes] = useState(orgRoutes);

    const loadMenu = () => {
        fetch('/MenuDef.json').then((response) => response.json()).then((d) => setRoutes(d));
    }

    useEffect(() => {
        loadMenu();
    }, []);

    return (
        <div style={{ width: "250px" }}>
            <TreeMenu appRoutes={routes.children} />
        </div>
    )
}

export default ApplicationMenu;