import { TreeQueryStore } from '@palmyralabs/palmyra-wire';
import { IChildTreeRequest } from './types';

interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>;
}
export default function AsyncTreeMenu(props: IAsyncTreeMenuInput): import("react/jsx-runtime").JSX.Element;
export {};
