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
        
            "Address" : '',
            "GoogleLink" :'',
            "Products":'',
            "Schedule":''           
        }
    }
    
    render(){
        return (
            <div className={styles.d1}>
                <h5>Market Details</h5>
                <div className={styles.d2}>
                    <p className={styles.d1A}>Address:</p> {this.props.details.Address}
                </div>
                <div className={styles.d2}>
                    <p className={styles.d1A}><a target="_blank" href={this.props.details.GoogleLink}>GoogleLink</a></p>
                </div>
                <div className={styles.d2}> 
                    <p className={styles.d1A}>Products:</p> {this.props.details.Products}
                </div>
                <div className={styles.d2}>
                    <p className={styles.d1A}>Schedule:</p> {this.props.details.Schedule}
                </div>
                
            </div>
        )
    }
   
    }
                
    
     
export default Details

