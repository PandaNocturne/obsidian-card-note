import { ItemView, WorkspaceLeaf } from "obsidian";
import Search from "./components/Search.svelte"
import type CardNote from "main";


export const VIEW_TYPE_NODEPREVIEW = "node-preview-view"
export class NodePreviewView extends ItemView {
    plugin: CardNote;
    constructor(leaf: WorkspaceLeaf, plugin: CardNote) {
        super(leaf);
        this.plugin = plugin;
    }
    getViewType(): string {
        return VIEW_TYPE_NODEPREVIEW
    }
    getDisplayText(): string {
        return "Canvas Node Preview"
    }
    protected async onOpen(): Promise<void> {
        super.onOpen();
    }
    // protected async onClose(): Promise<void> {
    //     super.onClose();
    // }
}