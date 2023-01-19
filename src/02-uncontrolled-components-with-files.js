/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los componentes no controlados son aquellos que son evaluados
 *         cuando se presiona el botón de enviar.
 * 
 * 
 * IMPORTANTE:
 *  			  - <FormData()> = Inicializa o construye un formulario.
-------------------------------------------------------------------------- */

function App() {
	// Obtengo los campos del formulario y sus valores
	const submit = (e) => {
		e.preventDefault();
		const data = Array.from(new FormData(e.target));
		console.log(Object.fromEntries(data));
	};

	return (
		<form onSubmit={submit}>
			<div>
				<span>Lala</span>
				<input name="firstInput" />
			</div>
			<input name="secondInput" />
			<input
				type="file"
				name="thirdInput"
			/>
			<input
				type="submit"
				value="Enviar"
			/>
		</form>
	);
}

export default App;
