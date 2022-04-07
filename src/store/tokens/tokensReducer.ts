import { Action } from "./actions";
//importando a action

export interface TokenState {
    tokens: string,
    id: string
}
//define que meu token tem um estado do tipo string

const initialState = {
    tokens: "",
    id: ""
}
//define que esse estado inicia vazio

export const tokensReducer = (state: TokenState = initialState, action: Action) => {

    switch(action.type){
        case "ADD_Token": {
            return {tokens: action.payload, id: state.id}
        }
        case "ADD_ID": {

            return {id: action.payload, tokens: state.tokens}
        }

        default:
            return state
    }
}