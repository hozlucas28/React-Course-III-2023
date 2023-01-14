/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo veo otro método para obtener los valores de los
 *         campos de un formulario, siendo el primer método el visto en el
 *         archivo: 'uncontrolled-components.js'.
 *
 *
 * RECORDAR:
 * 		   Los componentes no controlados son aquellos que son evaluados
 * 		   cuando se presiona el botón de enviar.
 * 
 * 
 * IMPORTANTE:
 *  			  - <FormData()> = Inicializa o construye un formulario.
-------------------------------------------------------------------------- */

import { useRef } from 'react';

const App = () => {
	const input = useRef();
	const file = useRef();

	const submit = () => {
		// Accedo al valor del Hook
		console.log(input.current.value);

		// Accedo al primer archivo del Hook
		console.log(file.current.files[0]);

		// Envío los valores al servidor de destino
		const form = new FormData();
		form.append('firstInput', input.current.value);
		form.append('secondInput', file.current.files[0]);
		console.log(form);
		fetch('./lala', { method: 'POST', body: form });
	};

	return (
		<div>
			<div>
				<span>Lala</span>
				<input
					type="text"
					name="firstInput"
					ref={input}
				/>
				<input
					type="file"
					name="secondInput"
					ref={file}
				/>
			</div>
			<input
				type="submit"
				value="Enviar"
				onClick={submit}
			/>
		</div>
	);
};

export default App;
