import { AutoAwesomeMosaic, CreditCard, Dashboard, Feed, Home, InsertChart, TableView } from "@mui/icons-material";


// Update new icon references here
const iconMap = {
    'grid' : TableView,
    'home':Home,
    'form':Feed,
    'chart':InsertChart,
    'card':CreditCard,
    'dashboard':Dashboard,
    'layout':AutoAwesomeMosaic
}


const getIcon = (name:string) : any => {
    return iconMap[name];
}

export {getIcon};