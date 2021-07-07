import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

class Info extends React.Component {
    constructor(){
        super();
        this.state={
            info: []
        }
    }

    componentDidMount(){
        console.log('component mounted')
        axios.get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response)
                this.setState({
                    info: response.data
                })
                console.log(this.state.info)
            })
            .catch(err => {
                console.log(err)
            })
    }




    render(){
        return(
            <div>
                <h1>BaseBall Players</h1>
              {this.state.info.map( e => {
                  return(<PlayerCard player={e}/>)
              } )}
            </div>
        )
    }



}


export default Info;