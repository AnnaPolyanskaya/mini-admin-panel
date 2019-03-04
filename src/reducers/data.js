import * as C from '../actions/constants';

const initialState = [
    {
        id: 1,
        name: 'John Down',
        content: 'This is good item',
        accepted: false
    },
    {
        id: 2,
        name: 'Jane Down',
        content: "I don't like it",
        accepted: true
    }
]

const initialAdmin = {
    isAdmin: false
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type){
        case C.ADD_COMMENT:
            return [...state, 
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    content: action.payload.content,
                    accepted: false
                }
            ] 
        case C.ACCEPT_COMMENT:
            return state.map( it => 
                it.id === action.id ? Object.assign({}, it,  {accepted: action.accepted}) : it
            )  
        case C.REJECT_COMMENT:
            return state.filter(it => it.id !== action.id)
        default:
            return state
    }
}

export const adminReducer = (state = initialAdmin, action) => {
    switch (action.type){
        case C.CHANGE_TO_ADMIN:
            return Object.assign({}, state, {isAdmin: action.isAdmin});
        default:
            return state;
    }
}