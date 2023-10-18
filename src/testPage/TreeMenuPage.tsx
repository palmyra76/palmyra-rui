
import { useState } from "react";
import TreeMenu from "../../lib/palmyra/layout/tree/TreeMenu"

const TreeMenuPage = () => {
    const [isRender, setIsRender] = useState(false);

    const orgRoutes = [
        {
            name: "Master Data"
        }
    ];

    setTimeout(() => setIsRender(true), 5000);

    const appRoutes = [
        {
            path: "/home",
            name: "Home",
        },
        {
            name: "Administration",
            children: [
                {
                    name: "User Management",
                    state: "usermgmt",
                    children: [
                        {
                            path: "/admin/usermgmt/group",
                            name: "Groups"
                        },
                        {
                            name: "Users"
                        },
                    ]
                },
                {
                    name: "Master Data",
                    children: [
                        {
                            name: "Anganwadi"
                        }
                    ]
                }
            ]

        }
    ]


    return (
        <TreeMenu appRoutes={isRender ? appRoutes : orgRoutes} />
    )
}

export default TreeMenuPage;