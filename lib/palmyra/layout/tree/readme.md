

Data Provider -- TreeQueryStore<MenuDef>


TreeListener
    onClick
    expand
    collapse


interface MenuDef extends Tree<MenuDef> {
    name: string, // internal reference
    title?: string // Menu Label
    path?: string, // useNavigate
    children?: MenuDef[],   
    hasChild:Function,
    icon?: string,  // Icon
    isExternal?: boolean;  
}

Optional Data Enhancer -  convert icon String to React.FC


Tree level - 
    Functions --
        titleAccessor
        pathAccessor
        childAccessor
        idAccessor -   to get name
        iconAccessor        
    Property -- 
        expandIcon
        collapseIcon
        TreeListener
        accordianMode - true or false

Item Level
    property 
    status - selected, not selected, partially selected
    expanded - true or false