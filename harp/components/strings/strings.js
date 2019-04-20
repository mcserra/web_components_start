import String from '../string/string.js';

export default class Strings extends HTMLElement {
    connectedCallback() {
        let strings = '<div class="spacer"></div>';
        for (let c = 0; c < this.getAttribute('strings'); c++) {
            strings += `<webharp-string></webharp-string>`;
        }

        strings += `<style>
                webharp-strings {
                    width: 100%; 
                    height: 100%; 
                    display: flex; 
                } 
                webharp-strings > webharp-string, div.spacer { 
                    flex: 1; 
                } 
                </style>`;

        this.innerHTML = strings;
        this.stringsElements = this.querySelectorAll('webharp-string');
    }
}

if (!customElements.get('webharp-strings')) {
    customElements.define('webharp-strings', Strings);
}