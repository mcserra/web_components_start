import Exercise from '../exercise/exercise.js';

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    html() {
        return `<h1>My Plan</h1>
                <div id="container"></div>
                <div id="time">Total Time:</div>`;
    },

    css() {
        return `<style>
                    :host {
                        display: flex;
                        flex-direction: column;
                        font-family: var(--font);
                        color: var(--text-color);
                     }
                      
                     h1 {
                        font-size: var(--header-font-size);
                     }
                  
                    #time {
                        height: 30px;
                    }
                                      
                    #container {
                        background: linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(208,208,208,1) 100%);
                        height: calc(100% - 60px);
                        overflow-y: scroll;
                    }
                    
                     :host-context(wkout-plan) {
                        width: 100%;
                        height: 50px;
                        margin-bottom: 1px;
                        background-size: contain;
                     }
                </style>`;
    },
    mapDOM(scope) {
        return {
            exercises: scope.querySelector('#container')
        }
    },

    renderExercise(exercise) {
        console.log(exercise.type)
        return `<wkout-exercise class="${exercise.type} plan" ${Exercise.toAttributeString(exercise.serialize())}></wkout-exercise>`
    }
}