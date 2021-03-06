// exerciselibrary.js
import Template from './template.js';

export default class ExerciseLibrary extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render([
            { label: 'Jump Rope', type: 'cardio', thumb: '', time: 300, sets: 1},
            { label: 'Jog', type: 'cardio', thumb: '', time: 300, sets: 1},
            { label: 'Pushups', type: 'strength', thumb: '', count: 5, sets: 2, estimatedTimePerCount: 5 },
            { label: 'Pullups', type: 'strength', thumb: '', count: 5, sets: 2, estimatedTimePerCount: 5},
            { label: 'Chin ups', type: 'strength', thumb: '', count: 5, sets: 2, estimatedTimePerCount: 5},
            { label: 'Plank', type: 'strength', thumb: '', time: 60, sets: 1}
    ]);
    }
}

if (!customElements.get('wkout-exercise-lib')) {
    customElements.define('wkout-exercise-lib', ExerciseLibrary);
}