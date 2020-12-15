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

function mapStateToProps(state, ownProps) {
    console.log(ownProps);
    return { toDos: state };
}

function mapDispatchToProps() {
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
