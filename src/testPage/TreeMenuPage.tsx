
import { useEffect, useState } from "react";

import TreeMenu from "../../lib/palmyra/layout/tree/TreeMenu"


const orgRoutes = {children:[
    {
        name: "Master Data"
    }
]};

const TreeMenuPage = () => {
    const [routes, setRoutes] = useState(orgRoutes);

    const loadMenu = () =>{
        fetch('MenuDef.json').then((response) => response.json()).then((d) => setRoutes(d));
    }

    useEffect(()=>{
        loadMenu();
    }, []);

    // setTimeout(() => setIsRender(true), 5000);

    // const appRoutes = [
    //     {
    //         path: "/home",
    //         name: "Home",
    //     },
    //     {
    //         name: "Administration",
    //         children: [
    //             {
    //                 name: "User Management",
    //                 state: "usermgmt",
    //                 children: [
    //                     {
    //                         path: "/admin/usermgmt/group",
    //                         name: "Groups"
    //                     },
    //                     {
    //                         name: "Users"
    //                     },
    //                 ]
    //             },
    //             {
    //                 name: "Master Data",
    //                 children: [
    //                     {
    //                         name: "Anganwadi"
    //                     }
    //                 ]
    //             }
    //         ]

    //     }
    // ]


    return (
        <TreeMenu appRoutes={routes.children} />
    )
}

export default TreeMenuPage;