import React from "react";
export default class Forms extends React.Component{

    constructor()
    {
        super()
        this.state = {
            city:null,
            result:{
                main :{}
            },
            
        }
    }

    submit(){
        let searchSubmit = {
            city:this.state.city
        }

        var formData = new FormData();
        formData.append('city', this.state.city);

        fetch('http://localhost:8080/api',
            {
                method:'POST',
                headers:{
                    'Content-type' : 'application/json'
                },
                body:JSON.stringify(searchSubmit)
            }).then(r=>r.json()).then(res=>{
                if(res.status_code === 200){
                    this.setState({result:res.result})
                }
                
            })

            
        
    }



    render()
    {
        return(
            <div>
                <div>
                    Search weather By city Name
                </div>
                <div className='add-form' >
                    <br/>
                    <div className='form-control'>
                        <label>Enter City</label>&nbsp;
                        <input
                        type='text'
                        name='city'
                        placeholder='Enter City'
                        onChange={(e)=>{this.setState({city:e.target.value})}}
                        />
                    </div>
                    <br/>
                    <div>
                    <input 
                    type='submit' 
                    value='Search' 
                    className='btn btn-block'
                    onClick={() => this.submit()}
                     />
                    </div>
                    
                </div>
                <br/>
                <div>
                    <div>
                        Weather Result
                    </div>
                    <br/>
                    <br/>
                    <div className="col-md-12">
                        <label>Searched City </label>&nbsp;{this.state.result.name}
                        <br/>
                        <div className="col-md-6">Current temperature : 
                            <span>{ this.state.result.main.temp }°c</span>
                        </div>
                        <br/>
                        <div className="col-md-6">Feels Like : 
                            <span>{ this.state.result.main.feels_like }°c</span>
                        </div>
                        <br/>
                        <div className="col-md-6">Humidity : 
                            <span>{ this.state.result.main.humidity }%</span>
                        </div>
                        <br/>
                        <div className="col-md-6">Pressure : 
                            <span>{ this.state.result.main.pressure }mBar</span>
                        </div>
                        <br/>
                        <div className="col-md-6">Max. temperature : 
                            <span>{ this.state.result.main.temp_max }°c</span>
                        </div>
                        <br/>
                        <div className="col-md-6">Min. temperature : 
                            <span>{ this.state.result.main.temp_min }°c</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
