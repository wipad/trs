//Reducer for character information Initialize State
const initState = {
    studentId: null,
}

//Define Actions
const inputReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'CHANGE_STUDENTID':
            return {
                ...state,
                studentId: action.payload
            }

        case 'UPDATE_STUDENTID':
        default:
            return state
    }
}

export default inputReducer;