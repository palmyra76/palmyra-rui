import { ITitle } from '../../form';
import { IServerQueryInput } from '../../form/ServerQueryManager';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC;
    childProps?: any;
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    title?: ITitle;
    customButton?: React.ReactNode[];
    preProcess?: (data: any) => any;
}
declare const ServerCardLayout: import('react').ForwardRefExoticComponent<ServerCardLayoutInput & import("react").RefAttributes<any>>;
export default ServerCardLayout;
export type { ServerCardLayoutInput };
