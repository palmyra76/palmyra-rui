import { IChildTreeRequest } from '../../store/palmyra/PalmyraTreeStore';
import { TreeQueryStore } from '../../store';

interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>;
}
export default function AsyncTreeMenu(props: IAsyncTreeMenuInput): import("react/jsx-runtime").JSX.Element;
export {};
