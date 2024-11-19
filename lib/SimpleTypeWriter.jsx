import React from "react";
import useTypeWriter from "./useTypeWriter";
import './styles.css';

const SimpleTypeWriter = ({ words,
	loop,
	typeSpeed,
	deleteSpeed,
	delay,
	cursor = true,
	cursorStyle = "|",
	fontSize,
	color,
	styles = {},
} = {}) => {

	const [textToShow] = useTypeWriter({
		words,
		loop,
		typeSpeed,
		deleteSpeed,
		delay,
	});

	const defaultStyles = {
		...styles,
		fontSize,
		color,
	}


	return <div style={defaultStyles}><span>{textToShow}</span><span className={cursor ? "blinking" : ""}>{cursor ? cursorStyle : ""}</span></ div>
}

export default SimpleTypeWriter;

