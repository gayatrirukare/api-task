import { Component, useReducer } from "react";

class Display extends Component{
    constructor(props) {
        super(props);
        this.state = {
            a: [],
            isLoading:false,
            isError:false 
        }
    }
    async  componentDidMount(){
        this.setState({isLoading:true})
        const response = await fetch('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=05828')
        if(response.ok){
            const b = await response.json()
            
            this.setState(
                {
                    a:b.results,isLoading:false
                }
                )
        }
        else{
            this.setState({isError : true,isLaoding : false})
        }
    }
    renderTableHeader=() => {
        return Object.keys(this.state.a[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th> )
        
    }
    renderTableRows= () => {
        return this.state.a.map (result =>{
            return(
                <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.marketname}</td>
                </tr>
            )
        })
    }
    render(){
        const {a,isLaoding,isError}=this.state
        if(isLaoding){
            return <div>Loading.....</div>
        }if(isError){
            return<div>Error....</div>
        }
    

        return a.length > 0
        ?(
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </table>
        ):(
            <div>No Result</div>
        )
    }
    
}
export default Display