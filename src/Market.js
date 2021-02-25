import react, { Component } from 'react'
import axios from 'axios'


class Market extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            zip:''
        }
        console.log(props)
    }
    
    handleTopicChange = (event) =>{
        this.setState({
            zip: event.target.value
        })
    }
    
    handleSubmit =event =>{
        event.preventDefault();
        const zip =this.state.zip
        axios.get ('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip='+zip)
        .then(response => {
            console.log(this.props.a)
          this.props.dataFromMarket(response.data.results)
           
            
        })
        .catch(error => {
           console.log(error)
        })
            
    }

    
    render(){
        return (
            <div>
                <h1>Markets near you</h1>
                <div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter ZIP"
                        aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleTopicChange} />
                        <div className="input-group-append">
                            <button className="input-group-text" id="basic-addon2" onClick={this.handleSubmit}>Zip </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
     
}
export default Market

