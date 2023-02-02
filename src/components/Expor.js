import React from 'react'


function Materi(props) {

    console.log("Lista de Materias")
  

    const eliminar = (item) => {
      // console.log("dato a eliminar", item);
      props.eliminarClick(item);
    };

    return (
        <div>
            <div className='container'>
                <div className='row mt-4'>
                    {
                        props.datos.map((item, index) => {
                            return (
                                <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
                                  <div className="card mt-4">
                                    <div className="card header">
                                      <h3>{item.Asignatura}</h3>
                                      </div>
                                      <div className="card-body d-flex flex-column align-items-center my-card-class">
                                         <p><strong>NRC:</strong> {item.Nrc}</p> 
                                         <p><strong>Creditos:</strong>{item.Creditos}</p>
                                         <p><strong>Parcial 1:</strong> { item.Parcial_1}</p>
                                         <p><strong>Parcial 2:</strong> { item.Parcial_2}</p>
                                            
                                            </div>

                                               <div className='card-footer'>
                                     
                                     <p><button className='btn btn-primary' onClick={()=>eliminar(item)}>Eliminar</button></p>

                                      </div>

                                  </div>
                                </div>
                              );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Materi;