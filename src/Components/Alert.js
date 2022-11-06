import React from 'react'

function Alert(props) {
const Capitalize=(word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
}

    return(
<>
        {props.alert != null ?
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong> {props.alert.message}
        {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button> */}
        </div>: null}


</>
)}


export default Alert;
