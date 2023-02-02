import React, { useState } from "react";

export default function MateriaAdd({guardarTarea}) {
    const [asignatura, setAsignatura] = useState  ("")
    const [nrc, setNrc] = useState  ("");
    const [creditos, setCreditos] = useState  ("");
    const [parcial_1, setParcial_1] = useState  ("");
     const [parcial_2, setParcial_2] = useState  ("");
    
    const guardar = (event) => {
      event.preventDefault();
      const tareaNueva = {
        "asignatura": asignatura,
        "nrc": nrc,
        "creditos": creditos,
          "parcial_1": parcial_1,
        "parcial_2":parcial_2,
      };
      //console.log("nueva tarea: ",tareaNueva )
      guardarTarea(tareaNueva);
    };
    const nuevaAsignatura = (event) => {
        setAsignatura(event.target.value);
        console.log(event.target.value);
    };
    const nuevoNrc = (event) => {
      setNrc(event.target.value);
    };
    const nuevoCredito = (event) => {
      setCreditos(event.target.value);
    };
    const nuevoparcial1 = (event) => {
      setParcial_1(event.target.value);
    };
    const nuevoparcial_2 = (event) => {
      setParcial_2(event.target.value);
    };
  return (
    <div className="row mt-4">
      <div className="col">
        <form onSubmit={guardar}>
          <div className="card mt-4">
            <div className="card header">
              <strong>Nueva Materia</strong>
            </div>
            <div className="card-body "></div>
            <div class="form-group">
              <label for="asignatura">Titulo de la asignatura</label>
              <input
                type="text"
                class="form-control"
                id="asignatura"
                name="asignatura"
                placeholder="Ingrese la asignatura"
                value={asignatura}
                onChange={nuevaAsignatura}
                required
              />
            </div>
            <div class="form-group">
              <label for="nrc">nrc de la materia</label>
              <input
                type="text"
                class="form-control"
                id="nrc"
                name="nrc"
                placeholder="Ingrese el nrc de la maeria"
                value={nrc}
                onChange={nuevoNrc}
                required
              />
            </div>
            <div class="form-group">
              <label for="creditos">creditos de la  materia</label>
              <input
                type="text"
                class="form-control"
                id="creditos"
                name="creditos"
                placeholder="Ingrese los creditos de la materia"
                value={creditos}
                onChange={nuevoCredito}
                required
              />
            </div>
            <div class="form-group">
              <label for="parcial_1">Nota dela parcial 1</label>
              <input
                type="text"
                class="form-control"
                id="parcial_1"
                name="parcial_1"
                placeholder="Ingrese la nota del parcial 1"
                value={parcial_1}
                onChange={nuevoparcial1}
                required
              />
            </div>
            <div class="form-group">
              <label for="parcial_2">nota del parcial 2</label>
              <input
                type="text"
                class="form-control"
                id="parcial_2"
                name="parcial_2"
                placeholder="Ingrese la nota del 2 parcial"
                value={parcial_2}
                onChange={nuevoparcial_2}
                required
              />
            </div>
            <div className="card-footer">
              <p>
                <button className="btn btn-success">Guardar</button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
