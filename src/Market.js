import react, { Component } from 'react' 
import 'antd/dist/antd.css';
import './index.css';
import { Button , Input } from 'antd';
import styles from './mystyle.module.css'; 



class Market extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            zips:''
        }    
    }
      
    handleTopicChange = (event) =>{
        this.setState({
            zip: event.target.value
        
        })
    }
    handleKeypress = event => {

        if (event.charCode === 13) {
            
          this.handleSubmit(event);
        }
        
      };
    handleSubmit =event =>{
        event.preventDefault();
        const zip =this.state.zip;
        this.props.getZipCode(zip);
        console.log(zip)
        
            
    }

    
    render(){
        return (
            <div className={styles.pt}>
                <h1 style={{
                color: 'rgb(241 236 236)',
              }}>Markets near you</h1>
                <div>
                    <div className={styles.inputGroup }>
                        <Input type="number"  className={styles.inputText} placeholder="Enter ZIP"
                        aria-label="Enter ZIP Code" aria-describedby="basic-addon2" onChange={this.handleTopicChange} onKeyPress={this.handleKeypress} />
                        <div  className={styles.btn} >
                        <Button type="primary"  className={styles.primaryBtn} onClick={this.handleSubmit} >
                            Search 
                        </Button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
     
}
export default Market

