import React from 'react'
class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            count1 : 1 ,
    };
    }

render(){
    const {name , Location , Contact} = this.props;
    const {count , count1}  = this.state;
    return(
        <div className='user-card'>
            <h1>count = {count}</h1>
            <button onClick={()=>{
            this.setState({
             count : this.state.count + 1,
       })
         }
            }>Count Increase</button>
            <h1>count1 = {count1} </h1>
   <h1>Name :-{name}</h1>
   <h2>Location :-{Location}</h2>
   <h3>Contact :-{Contact}</h3>
        </div>
    )
}
}
export default User;