export const initialState = {
	textToShow: "",
	typing: true,
	speed: 100,
	isDeleting: false,
	idx: 0,
	currentTextIndex: 0,
}



export const ACTIONS = {
	TYPE_CHARACTER: "TYPE_CHARACTER",
	DELAY: "DELAY",
	DELETE: "DELETE",
	GO_TO_NEXT: "GO_TO_NEXT",
	RESET: "RESET"
}


const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.TYPE_CHARACTER:
			return {
				...state,
				speed: action.typeSpeed,
				textToShow: action.payload?.substring(0, state.currentTextIndex + 1),
				currentTextIndex: state.currentTextIndex + 1
			}
		case ACTIONS.DELAY:
			return {
				...state,
				speed: action.typeSpeed,
			}
		case ACTIONS.DELETE:
			return {
				...state,
				textToShow: action.payload?.substring(0, state.textToShow.length - 1),
				currentTextIndex: state.currentTextIndex - 1,
				isDeleting: true,
			}
		case ACTIONS.GO_TO_NEXT:
			return {
				...state,
				idx: state.idx + 1,
				textToShow: "",
				currentTextIndex: 0,
				isDeleting: false,
			}
		case ACTIONS.RESET:
			return {
				...state,
				idx: 0,
			}
		default:
			return state;
	}
}

export default reducer;

