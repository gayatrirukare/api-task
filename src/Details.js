import react, { Component } from 'react'
import axios from 'axios' 
import 'antd/dist/antd.css';
import './index.css';
import { Button , Input } from 'antd';
import styles from './mystyle.module.css'; 
import Table from './Table'



class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            mid:''
        }
    

       function getData(id) {
            
            this.preventDefault();

            const mtid =this.state.mid
            axios.get ('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id='+id)
            .then(response => {
                console.log(response)
              this.marketDetails(response)
               
                
            })
            .catch(error => {
               console.log(error)
            })
        }

        
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
                
    
     
}
export default Details

