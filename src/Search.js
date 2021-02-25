import React, { Component} from 'react'
import axios from 'axios';


class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            isLoaded : false,

        }
    }
    
    componentDidMount (){
        fetch('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=05828')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items:json,
            })
        })
    }

    render(){
        var {isLoaded , items} = this.state;
        if(!isLoaded){
            return <div>Loading</div>
        }
        else{
            return (
                <div className="Search">
                    <ul> {items.map(item =>(
                        <li key= {item.id}>
                            Id:{item.id} | marketName:{item.marketname}

                        </li>
                    ))};
                        
                    </ul>

                </div>
            )
        }
{ /* 

    return (
            
            <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter ZIP"
                 aria-label="Recipient's username" aria-describedby="basic-addon2"  />
                <div className="input-group-append">
                    <button className="input-group-text" id="basic-addon2" onClick={this.handleSubmit}>Zip </button>
                </div>
            </div>
        </div>

        
            )

*/}
       
    }
    
}
export default Search



{/*

    function getResults(zip) {
        // or
        // function getResults(lat, lng) {
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            // submit a get request to the restful service zipSearch or locSearch.
            url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,
            // or
            // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng,
            dataType: 'jsonp',
            jsonpCallback: 'searchResultsHandler'
        });
    }
    //iterate through the JSON result object.
    function searchResultsHandler(searchResults) {
        for (var key in searchresults) {
            alert(key);
            var results = searchresults[key];
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                for (var key in result) {
                    //only do an alert on the first search result
                    if (i == 0) {
                        alert(result[key]);
                    }
                }
            }
        }
    }
*/}
