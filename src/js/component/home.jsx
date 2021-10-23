import React, { useState } from "react";
import ReactDOM from "react-dom";

//create your first component
export const Home = () => {
	const [valueRojo, setValueRojo] = useState("rojo");
	const [valueAmarillo, setValueAmarillo] = useState("amarillo");
	const [valueVerde, setValueVerde] = useState("verde");

	return (
		<>
			<div className="tubo"></div>
			<div className="semaforo d-flex flex-column justify-content-around">
				<div
					className={valueRojo}
					onClick={e => {
						if (valueRojo == "rojo iluminado") {
							setValueRojo("rojo");
							setValueAmarillo("amarillo");
							setValueVerde("verde");
						} else {
							e.className = setValueRojo("rojo iluminado");
							setValueAmarillo("amarillo");
							setValueVerde("verde");
						}
					}}></div>
				<div
					className={valueAmarillo}
					onClick={e => {
						if (valueAmarillo == "amarillo iluminado") {
							setValueRojo("rojo");
							setValueAmarillo("amarillo");
							setValueVerde("verde");
						} else {
							e.className = setValueAmarillo(
								"amarillo iluminado"
							);
							setValueRojo("rojo");
							setValueVerde("verde");
						}
					}}></div>
				<div
					className={valueVerde}
					onClick={e => {
						if (valueVerde == "verde iluminado") {
							setValueRojo("rojo");
							setValueAmarillo("amarillo");
							setValueVerde("verde");
						} else {
							e.className = setValueVerde("verde iluminado");
							setValueAmarillo("amarillo");
							setValueRojo("rojo");
						}
					}}></div>
			</div>
		</>
	);
};

export default Home;
