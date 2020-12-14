import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
    const { id } = useParams();
    const idd = parseInt(id);
    return (
        <>
            {toDos.map((todo, key) => (
                <div>
                    <h1>{todo.text}</h1>
                    {console.log(idd)}
                    {console.log(typeof todo.id)}
                    <span>{todo.id === idd && todo.id}</span>
                </div>
            ))}
        </>
    );
}

function mapStateToProps(state) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
