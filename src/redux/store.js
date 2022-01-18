import { createStore } from 'redux'

const TEXT_PATH_CHANGE = 'TEXT_PATH_CHANGE'
const TEXT_NEW_VALUE_CHANGE = 'TEXT_NEW_VALUE_CHANGE'
const CONTENT_CHANGE = 'CONTENT_CHANGE'

let initialState = {
    content: [
        {
            id: 1,
            type: 'panel',
            props: {
                width: 500,
                height: 300,
                visible: true
            },
            content: [
                {
                    id: 2,
                    type: 'label',
                    props: {
                        caption: 'test',
                        visible: true
                    }
                },
                 
                {
                    id: 3,
                    type: 'panel',
                    props: {
                        width: 300,
                        height: 200,
                        visible: true
                    },
                    content: [
                        {
                            id: 4,
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
            id: 5,
            type: 'label',
            props: {
                caption: 'test',
                visible: true
            }
        },
        {
            id: 6,
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
        case(CONTENT_CHANGE):{
            let path = state.textPath
            let newValue = eval(`(${state.textNewValue})`)
            let pathArr = path.split(/\W/).filter(i => i !== '' && i !== 'content')
            let nestingLevel = path.split(/\W/).filter(i => i === 'content').length
            
            if(typeof newValue !== 'object'){
                let n = 0
                return {
                    ...state, 
                    content: [...state.content.map(pathItem => {
                        if(pathItem !== state.content[pathArr[n]]) return pathItem
                        return updateValueElement(pathArr, nestingLevel, pathItem, n)})]
                }
                function updateValueElement (arr, nestingLevel, item, n){
                    if (nestingLevel === 1) {
                        return {
                            ...item,
                            props: {...item[arr[arr.length-2]],
                            [arr[arr.length-1]]: newValue
                            }    
                        }
                    }else if (nestingLevel > 1) {
                        nestingLevel -= 1
                        n += 1
                        return {
                            ...item,
                            content: [...item.content.map(i => {
                                if(i !== item.content[arr[n]]) return i
                                return updateValueElement(arr, nestingLevel, i, n)
                               
                            })]
                        }
                    }
                }
            }
            
            
            let n = -1
            let item = state
            
            return addNewElement(nestingLevel, item, n, pathArr)
            
            function addNewElement(nestingLevel, item, n, arr){
                
                if(nestingLevel === 1){
                    return {
                        ...item,
                        content: [...item.content, newValue]
                    }
                } else if(nestingLevel > 1){
                    nestingLevel -= 1
                    n += 1
                    return {
                        ...item,
                        content: [...item.content.map(i => {
                            if(i !== item.content[arr[n]])return i
                        
                            console.log(n)
                            return addNewElement(nestingLevel, i, n, arr)
                        })]
                    }
                }
            }

        }
        default:
            return state 
    }
         
}


export const textPathChange = (text) => 
    ({type: TEXT_PATH_CHANGE, textPath: text})

export const textNewValueChange = (text) =>
    ({type: TEXT_NEW_VALUE_CHANGE, textNewValue: text})

export const stateChange = () =>
    ({type: CONTENT_CHANGE})

let store = createStore(reducer)


export default store