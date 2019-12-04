import { POST_FORM_DATA } from "./../actions/"

const initialState = {
    data: []
};

export default function(state =initialState, action){
    switch (action.type) {

        case POST_FORM_DATA: {
            return Object.assign({}, state, { data: action.payload })
        }



        default:
            return state;
    }
}

