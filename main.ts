import { Plugin, MarkdownView, Editor } from 'obsidian';

export default class DateInserterPlugin extends Plugin {
    async onload() {
        console.log('loading plugin');

        this.addCommand({
            id: 'insert-current-date',
            name: 'Insert Current Date and Time',
            editorCallback: (editor: Editor) => {
                const currentDate = new Date().toLocaleString();
                editor.replaceSelection(currentDate);
            }
        });
    }

    onunload() {
        console.log('unloading plugin');
    }
}