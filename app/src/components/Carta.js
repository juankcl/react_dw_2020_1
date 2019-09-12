import React, { Component } from 'react';
import './css/carta.css'

export default class Boton extends Component {
    render() {
        return (
            <div 
                className="carta"
                style={{height:this.props.height, width:this.props.width}}
                >
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                <img className="carta-img" src={this.props.img}></img>
            </div>
        );
    }
}

