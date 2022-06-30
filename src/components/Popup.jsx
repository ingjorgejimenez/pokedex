import React from "react";
import Portal from "./Portal";
const style = {
    fondo: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "black",
        opacity: 0.5,
    },
    ventana: {
        position: "relative",
        background: "#fff",
        border: 1,
        boxShadow: "2px 2px 10px rgba(0,0,0,3)",
        zIndex: 10,
    },
    modal: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
};

function Popup({ pokemon }) {
    return (
        <div>
            <h1>Popup</h1>

            <div id="modal" style={style.modal}>
                <div id="ventana" style={style.ventana}>
                    <button onClick={this.props.toggle}>X</button>
                    <h1>Hola soy un modal</h1>
                    {this.props.children}
                </div>
                <div
                    id="fondo"
                    onClick={this.props.toggle}
                    style={{ background: "black" }}
                ></div>
            </div>



        </div>
    );

}
export default Popup;