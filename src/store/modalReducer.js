const HIDE_MODAL = 'modal/hideModal'
const SHOW_MODAL = 'modal/showModal'

export const showModal = (info) => {
    console.log(info)
    return {
        type: SHOW_MODAL,
        info: info
    };
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    };
};
// highLightedTitle, imageURL, tvGenres, movieGenres
const initialState = { showModal: false };

const modalReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SHOW_MODAL:
            const info = action.info
            return { showModal: true, info};
        case HIDE_MODAL:
            newState = { showModal: false }
            return newState;
        default:
            return state;
    }
};

export default modalReducer;