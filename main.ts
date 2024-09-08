import { Plugin, MarkdownView } from 'obsidian';

export default class DateInserterPlugin extends Plugin {
    async onload() {
        // Загрузка CSS
        this.loadStyles();

        this.addCommand({
            id: 'insert-current-date',
            name: 'Insert Current Date and Time',
            editorCallback: (editor) => {
                const currentDate = new Date().toLocaleString();
                editor.replaceSelection(`<span class="custom-date">${currentDate}</span>`);
            }
        });
    }

    loadStyles() {
        const styleEl = document.createElement('style');
        styleEl.textContent = `
      .custom-date {
        font-weight: bold;
        color: #ff4081;
        background-color: #f3f3f3;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
      }
    `;
        document.head.appendChild(styleEl);
    }
}