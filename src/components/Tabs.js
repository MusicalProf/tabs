import React from 'react';

const Tabs = (props) =>{
    const selectStyle = {
        backgroundColor: "seagreen",
        dislplay: "inline-block",
        width: "200px",
        margin: '5px'
    }

    const notSelected = {
        backgroundColor: "lightgrey",
        display: "inline-block",
        width: "200px",
        margin: '5px'
    }

    return(
        <div style={props.selected ? selectStyle : notSelected} onClick={() => props.handleClick(props.index)}>
            Tab # {props.index + 1}: {props.title}
        </div>
    )
}
export default TabHeader;