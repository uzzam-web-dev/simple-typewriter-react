import { useReducer, useEffect, useCallback, useRef } from "react";
import reducer, { ACTIONS } from "./reducer/reducer";

const useTypeWriter = ({
	words = ['Hello World!', 'This is', 'a simple Typewriter'],
	loop = true,
	typeSpeed = 80,
	deleteSpeed = 50,
	delay = 1500,
} = {}) => {
	const [{ textToShow, typing, speed, isDeleting, idx, currentTextIndex }, dispatch] = useReducer(reducer, {
		textToShow: "",
		typing: true,
		speed: typeSpeed,
		isDeleting: false,
		idx: 0,
		currentTextIndex: 0,
	});

	const doneTyping = useRef(false);
	const wait = useRef(false);
	const hasWaited = useRef(false);

	const type = useCallback(() => {
		if (wait.current) return;
		const wordToType = words[idx];
		if (idx == words.length && loop == false) return;
		if (wordToType) {
			if (currentTextIndex < wordToType.length && !isDeleting) {
				dispatch({ type: ACTIONS.TYPE_CHARACTER, payload: wordToType, typeSpeed });
			} else {
				if (!hasWaited.current) {
					wait.current = true;
					hasWaited.current = true;
					setTimeout(() => {
						wait.current = false;
						dispatch({ type: ACTIONS.DELETE, payload: wordToType })
					}, delay);
				} else {
					if (textToShow === "" && idx < words.length) {
						doneTyping.current = false;
						wait.current = false;
						hasWaited.current = false;
						dispatch({ type: ACTIONS.GO_TO_NEXT });
					} else {
						doneTyping.current = true;
						doneTyping.current = false;
						dispatch({ type: ACTIONS.DELETE, payload: wordToType });
					}
				}
			}
		} else {
			dispatch({ type: ACTIONS.RESET })
		}
	}, [delay, textToShow, typing, idx, currentTextIndex]);

	useEffect(() => {
		const typingTimeout = setTimeout(type, isDeleting ? deleteSpeed : speed);
		return () => clearTimeout(typingTimeout);
	}, [type, speed]);

	return [textToShow];
};

export default useTypeWriter;

