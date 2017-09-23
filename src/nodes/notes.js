import React, {Component} from 'react'
import './notes.css'


class Note extends Component {
    constructor(props) {
        super(props)
        this.message="note component"
    }
    render(props) {
        return(
            <div>
                <h1>{this.message}</h1>
            </div>
        )
    }

}