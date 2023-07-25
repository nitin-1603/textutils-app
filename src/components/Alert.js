import React from 'react';
let aLH = {
    height: '60px',
    backgroundColor: 'light green',

}
export default function Alert(props) {
    return (
        <div style={aLH}>
            {props.alert && <div style={aLH} className="alert alert-success" role="alert">
                {props.alert.massege} {/* this is alert */}
            </div>}
        </div>
    );
}