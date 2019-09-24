import React,{Component} from "react";


class App extends Component{

constructor(props){
super(props);
this.state={
name:'',
pass:''
}
this.handler=this.handler.bind(this);
}
onchangehandler=(event)=>{
this.setState={
name=event.target.value,
pass=event.target.value
}

}

handler=(event)=>{
console.log("We are in event handler"+ this.state.name);
}
render(){
return (
<form onSubmit={this.handler}>
<table>
<tr>
<td>User name</td>
<td>
<input type="text" value={this.state.username} />
</td>
</tr>
<tr>
<td>
Password
</td>
<td>
<input type="password" value={this.state.password} />
</td>
</tr>
<tr>
<td>Email Id</td>
<td><input type="text" value={this.state.email} />
</td>

</tr>
<tr>
<td colspan="2">
<input type="submit" value="Submit" />
</td>
</tr>
</table>
</form>

);

}
}
