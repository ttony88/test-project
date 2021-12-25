import { createStore } from 'redux'

const TEXT_PATH_CHANGE = 'TEXT_PATH_CHANGE'
const TEXT_NEW_VALUE_CHANGE = 'TEXT_NEW_VALUE_CHANGE'
const STATE_CHANGE = 'STATE_CHANGE'

let initialState = {
    content: [
        {
            type: 'panel',
            props: {
                width: 500,
                height: 200,
                visible: true
            },
            content: [{
                
                type: 'label',
                props: {
                    caption: 'test',
                    visible: true
                }
                
            }]
        },
        {
            type: 'label',
            props: {
                caption: 'test',
                visible: true
            }
        },
        {
            type: 'button',
            props: {
                width: 100,
                height: 50,
                visible: true
            }
        }
    ],
    textPath: '',
    textNewValue: ''
}

let reducer = (state=initialState, action) => {
    switch(action.type){
        case(TEXT_PATH_CHANGE):{
            return {
                ...state,
                textPath: action.textPath
            }
        }
        case(TEXT_NEW_VALUE_CHANGE):{
            return {
                ...state,
                textNewValue: action.textNewValue
            }
        }
        case(STATE_CHANGE):{
            /*let newElement = eval(`(${state.textNewValue})`)
            let Path = eval(state.textPath)
            state.textNewValue = ''
            state.textPath = ''
            if (newElement !==null && typeof(newElement) === 'object') {
                return {
                    ...state,
                    content: [...state.content, newElement]
                }
            }*/ 
                let newElement = state.textPath
                let x = newElement.split(/\W/).filter(i => i != '')
                state[x[0]][x[1]][x[2]][x[3]] = eval(state.textNewValue)
                console.log(x)
                
                return {...state,
                    content: [...state.content]
                }

              
        }
    }
    return state 
}

export const textPathChange = (text) => 
    ({type: TEXT_PATH_CHANGE, textPath: text})

export const textNewValueChange = (text) =>
    ({type: TEXT_NEW_VALUE_CHANGE, textNewValue: text})

export const stateChange = () =>
    ({type: STATE_CHANGE})

let store = createStore(reducer)

export default store