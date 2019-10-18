import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { createOrder} from '../../store/actions/orderActions'

export class CreateOrder extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createOrder(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-test text darken-3">Create New Order</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Order Content</label>
                        <textarea id="content" className="materialize-textarea"onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        createOrder: (order) => dispatch(createOrder(order))
    }
}

export default connect(null, mapDispatchToProps) (CreateOrder)
