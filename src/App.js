/* --------------------------------------------------------------------------
 * APUNTES:
 *         Los componentes controlados son aquellos que son evaluados en
 *         tiempo real. Un componente controlado, necesariamente, debe poseer
 *         un valor por defecto en las etiquetas <input>.
-------------------------------------------------------------------------- */

import { useState } from 'react';

function App() {
	// Función de estados dinámica, con valores por defecto.
	const [value, setValue] = useState({
		firstInput: '',
		secondInput: '',
		thirdInput: '',
		fourthInput: false,
		fivethInput: 'Feliz'
	});

	// Modifico el atributo <value> dinámicamente
	const handleChange = ({ target }) => {
		setValue({
			...value,
			[target.name]: target.type !== 'checkbox' ? target.value : target.checked
		});
	};

	console.log(value);

	return (
		<div>
			{value.length < 5 ? <span>Longitud minima de 5</span> : null}
			<input
				type="text"
				name="firstInput"
				value={value.firstInput}
				onChange={handleChange}
			/>

			<textarea
				name="secondInput"
				value={value.secondInput}
				onChange={handleChange}
			/>

			<select
				name="thirdInput"
				value={value.thirdInput}
				onChange={handleChange}
			>
				<option value="">--- Seleccione ---</option>
				<option value="Cerdo Feliz">Cerdo Feliz</option>
				<option value="Cerdo Triste">Cerdo Triste</option>
				<option value="Cerdo Emocionado">Cerdo Emocionado</option>
			</select>

			<input
				type="checkbox"
				name="fourthInput"
				onChange={handleChange}
				checked={value.fourthInput}
			/>

			<div>
				<label>Cerdo</label>
				Feliz
				<input
					type="radio"
					name="fivethInput"
					value="Feliz"
					onChange={handleChange}
					checked={value.fivethInput === 'Feliz' ? true : false}
				/>
				Triste
				<input
					type="radio"
					name="fivethInput"
					value="Triste"
					onChange={handleChange}
					checked={value.fivethInput === 'Triste' ? true : false}
				/>
				Emocionado
				<input
					type="radio"
					name="fivethInput"
					value="Emocionado"
					onChange={handleChange}
					checked={value.fivethInput === 'Emocionado' ? true : false}
				/>
			</div>
		</div>
	);
}

export default App;
