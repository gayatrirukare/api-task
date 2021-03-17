import react, { Component } from 'react'
import axios from 'axios' 
import 'antd/dist/antd.css';
import './index.css';
import styles from './mystyle.module.css'; 

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
        
        return  (
            <div className={styles.detailDiv}>
                <h5>Market Details</h5>
                <div className={styles.detailInfo}>
                    <p className={styles.detailInfoHeader}>Address:</p> {this.props.details.Address}
                </div>
                <div className={styles.detailInfo}>
                    <p className={styles.detailInfoHeader}><a target="_blank" href={this.props.details.GoogleLink}>GoogleLink</a></p>
                </div>
                <div className={styles.detailInfo}> 
                    <p className={styles.detailInfoHeader}>Products:</p> {this.props.details.Products}
                </div>
                <div className={styles.detailInfo}>
                    <p className={styles.detailInfoHeader}>Schedule:</p> {this.props.details.Schedule}
                </div>
                
            </div>
        )
    }
   
    }
                
    
     
export default Details

