
import React, { Component } from 'react'
import axios from 'axios';

 class Form extends Component {
     
    constructor(props) {
        super(props)

        this.state = {
            username :'',
            comments :'',
            topics:'React'
        }


    }

    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    
    handleCommentChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) =>{
        this.setState({
            topics: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, comments, topics } = this.state;
        axios({url: '/form', baseURL: 'http://localhost:8080', method:'POST', data: {
            method: 'POST',
            body: { username, comments, topics },
          }}).then((res) => {console.log(res)})
          
    }


    

    render(){
        return (
            <form>
                  <div className="form-group">

                    <label>Username</label>
                    <input 
                    type="text" 
                    value ={this.state.username} 
                    onChange={this.handleUsernameChange} 
                    />
                </div>
                <div className="form-group">
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentChange} />

                </div>
                <div className="form-group">
                    <label>Topics</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="React">React</option>
                        <option value="Node">Node</option>
                        <option value="vue">vue</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
    
                
        
        )
    }
    
}
export default Form