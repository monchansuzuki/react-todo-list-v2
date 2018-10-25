import React , {Component} from 'react'

class AddTodo extends Component{

    state={
        content : ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
       console.log( e.target.id.value )

    }
    handleOnChange = (e) =>{
        this.setState(
            {
                [e.target.id]: e.target.value
            }
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='input-todo' id='content' onChange={this.handleOnChange} value={this.state.content}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo