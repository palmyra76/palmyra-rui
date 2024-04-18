import { IChildTreeRequest } from './types';
import { TreeQueryStore } from 'palmyra-wire';

interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>;
}
export default function AsyncTreeMenu(props: IAsyncTreeMenuInput): import("react/jsx-runtime").JSX.Element;
export {};
