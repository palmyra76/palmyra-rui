import { TableView } from "@mui/icons-material"

// Update new icon references here
const iconMap = {
    'grid' : TableView
}


const getIcon = (name:string) : any => {
    return iconMap[name];
}

export {getIcon};