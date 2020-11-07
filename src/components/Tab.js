import React from 'react';

const Tab = (props) =>{
    const selectStyle = {
        backgroundColor: "#A80003",
        dislplay: "inline-block",
        width: "200px",
        margin: '5px'
    }

    const notSelected = {
        backgroundColor: "#00EB40",
        display: "inline-block",
        width: "200px",
        margin: '5px'
    }

    return(
        <div style={props.selected ? selectStyle : notSelected} onClick={() => props.handleClick(props.index)}>
            Tab # {props.index + 1}
        </div>
    )
}
export default Tab;