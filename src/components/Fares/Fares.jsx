import React, { Component } from 'react';
import { bind } from 'decko'

import Fare from '../Fare/Fare.jsx'
import './Fares.styl'

const FARES = [
    {
        name: 'start',
        price: 9000,
        description: [
            '45 откликов',
            'видео-интервью'
        ]
    },
    {
        name: 'standart',
        price: 20900,
        description: [
            '110 откликов',
            'видео-интервью',
            'аккаунт-менеджер'
        ]
    },
    {
        name: 'special',
        price: 36000,
        description: [
            '200 откликов',
            'видео-интервью',
            'аккаунт-менеджер'
        ]
    }
]
class Fares extends Component {
    constructor(props) {
        super(props)
    }

    @bind onClick() {
        // do smth...
    }

    render() {
        return <div className="Fares">
            {FARES.map(props => <Fare {...props} onClick={this.onClick}/>)}
        </div>
    }
}

export default Fares
