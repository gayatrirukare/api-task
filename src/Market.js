import react, { Component } from 'react'
import axios from 'axios' 
import 'antd/dist/antd.css';
import './index.css';
import { Button , Input } from 'antd';
import styles from './mystyle.module.css'; 



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
                    <div className={styles.inputGroup }>
                        <Input type="number"  className={styles.inputText} placeholder="Enter ZIP"
                        aria-label="Enter ZIP Code" aria-describedby="basic-addon2" onChange={this.handleTopicChange} />
                        <div className="input-group-append" >
                        <Button type="primary" className={styles.primaryBtn} onClick={this.handleSubmit} >
                            Search 
                        </Button>
                          {/*  <button className="input-group-text" id="basic-addon2" onClick={this.handleSubmit}>Search</button>  */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
     
}
export default Market

