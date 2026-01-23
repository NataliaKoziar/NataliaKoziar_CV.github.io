import { Istate } from "./models";
import { actionTypes, TypeOfAction } from "./actionTypes";


const initialState: Istate = {
    user: {
        img: null,
        imgName: null,
        about: null,
        dateOfBirth: null,
        position: null,
        skills: [],
        id: '',
        address: null,
        education: [],
        experience: [],
        phone: null,
        linkedIn: null,
        facebook: null,
        gitHub: null,
        hobbies: null,
        languages: [],
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        isPublic:false
    },
    error: null,
    loading: false
}
export const UserReducer = (state = initialState, action: TypeOfAction): Istate => {
    switch (action.type) {
        case actionTypes.ADD_INIT:
            return {
                ...state,
                user: action.payload

            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload

            };

        default:
            return state;

    }
}