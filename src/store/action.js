import { createActions } from "redux-actions";

let currentUserAction = createActions({
    CURRENT_USER: {
        LOGIN: () => {
            return {
                currentUser: {
                    account: "fakeAccount"
                }
            }
        },
        LOGOUT: payload => payload
    }
});

export default Object.assign({}, currentUserAction);