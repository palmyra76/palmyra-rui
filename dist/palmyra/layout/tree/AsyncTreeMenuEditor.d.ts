import { TreeQueryStore } from "../../store";
import { IChildTreeRequest } from "../../store/palmyra/PalmyraTreeStore";
interface IAsyncTreeMenuInput {
    store: TreeQueryStore<IChildTreeRequest, any>;
}
export default function AsyncTreeMenu(props: IAsyncTreeMenuInput): import("react/jsx-runtime").JSX.Element;
export {};
