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
                height: 300,
                visible: true
            },
            content: [
                {
                    type: 'label',
                    props: {
                        caption: 'test',
                        visible: true
                    }
                },
                 
                {
                    type: 'panel',
                    props: {
                        width: 300,
                        height: 200,
                        visible: true
                    },
                    content: [
                        {
                            type: 'button',
                            props: {
                                width: 100,
                                height: 50,
                                visible: true
                                }
                        },
                        
                    ]
                    
                }    
            ]

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
            let path = state.textPath
            let newValue = eval(`(${state.textNewValue})`)
            let pathArr = path.split(/\W/).filter(i => i != '' && i != 'content')
            let degreeOfNesting = path.split(/\W/).filter(i => i == 'content').length
            if(typeof newValue !== 'object' && newValue !== null){
                let n = 0
                return {
                    ...state, 
                    content: [...state.content.map(pathItem => {
                        if(pathItem !== state.content[pathArr[n]]) return pathItem
                        return updateValueElement(pathArr, degreeOfNesting, pathItem, n)})]
                }
                function updateValueElement (arr, degreeOfNesting, item, n){
                    if (degreeOfNesting === 1) {
                        return {
                            ...item,
                            props: {...item[arr[arr.length-2]],
                            [arr[arr.length-1]]: newValue
                            }    
                        }
                    }else if (degreeOfNesting > 1) {
                        degreeOfNesting -= 1
                        state.content = state.content[arr[n]].content
                        n += 1
                        return {
                            ...item,
                            content: [...state.content.map(item => {
                                if(item !== state.content[arr[n]]) return item
                                return updateValueElement(arr, degreeOfNesting, item, n)
                                
                            })]
                        }
                    }
                }
            }
            
            
            let n = -1
            let item = state
            return addNewElement(degreeOfNesting, item, n, pathArr)
            
            function addNewElement(degreeOfNesting, item, n, arr){
                
                if(degreeOfNesting === 1){
                    return {
                        ...item,
                        content: [...state.content, newValue]
                    }
                }
                degreeOfNesting -= 1
                n += 1
                return {
                ...item,
                content: [...state.content.map(item => {
                    if(item != state.content[arr[n]])return item
                    state.content = state.content[arr[n]].content
                    return addNewElement(degreeOfNesting, item, n, arr)
                })
                ]
                }
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