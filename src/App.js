import './App.css';
import Testimonio from './components/Testimonio';

function App() {
	return (
		<div className='App'>
			<div className='contenedor-principal'>
				<h1>
					Esto es lo que dicen nuestros alumnos sobre <u>freeCodeCamp</u>
				</h1>
				<Testimonio />
			</div>
		</div>
	);
}

export default App;
