
import './App.css';
import Materi from './components/Expor';
import { datos } from './components/Materias'
import { useState } from 'react';
import MateriaAdd from './components/MateriaAdd';
function App() {
  const [data, setData] = useState(datos);

  const eliminar = (item) => {
    if (window.confirm("Confirme que desea eliminar esta materia?")) {
      const nuevaLista = data.filter((tarea) => {
        return tarea.Asignatura !== item.Asignatura;
      });

      setData(nuevaLista);
    }
  };
  const guardarTarea = (tarea) => {
    console.log("esta es la nueva tarea", tarea);
    setData([...data, tarea]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-2">
            <MateriaAdd guardarTarea={guardarTarea} />
          </div>
          <div className='col-10'>
            <Materi datos={data} eliminar={eliminar} />
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
