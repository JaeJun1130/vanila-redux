import React from "react";
import { connect } from "react-redux";
//import { useParams } from "react-router-dom";

const Deatil = ({}) => {
    //const id = useParams();
    //console.log(id);
    //console.log(toDos.id);
    return <h1>Detail</h1>;
};

function mapStateToProps(state, ownProps) {
    console.log(ownProps);
}

export default connect(mapStateToProps)(Deatil);
