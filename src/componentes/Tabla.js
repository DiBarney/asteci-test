import React from "react";

export default function Tabla(props){
    var datosTabla = props.datosTabla;

    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabilityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lastreporttime</th>
                        <th>Llueve</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map((iterator) => {
                        return(
                            <tr id={iterator._id}>
                                <td>{iterator._id}</td>
                                <td>{iterator.cityid}</td>
                                <td>{iterator.name}</td>
                                <td>{iterator.state}</td>
                                <td>{iterator.probabilityofprecip}%</td>
                                <td>{iterator.relativehumidity}</td>
                                <td>{iterator.lastreporttime}</td>
                                <td>{(iterator.probabilityofprecip > 60 || iterator.relativehumidity > 50)?'Llueve':'No llueve'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}