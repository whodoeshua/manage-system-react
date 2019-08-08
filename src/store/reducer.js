import { handleActions } from "redux-actions";

let reducer = handleActions({
    CURRENT_USER: {
        LOGIN: (state, action) => action.payload,
        LOGOUT: (state, action) => {
            return {
                currentUser: null
            }
        }
    }
}, { currentUser: null })

export default reducer;