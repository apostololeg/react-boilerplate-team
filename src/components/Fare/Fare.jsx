import React, { Component } from 'react';
import './Fare.styl'

class Fare extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            name,
            price,
            description,
            onClick } = this.props

        return <div className='Fare'>
            <div className="Fare__header">
                <div className="Fare__title">{name}</div>
                <div className="Fare__price">{price}</div>
            </div>
            <div className="Fare__descrition">
                {description.map(item => <div className="Fare__descrition-item">{item}</div>)}
            </div>
            <button className="Fare__button" onClick={onClick}>Buy</button>
        </div>
    }
}

export default Fare
