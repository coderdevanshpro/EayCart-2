import {Component, ReactNode} from "react";
type Greeting2Props ={
    name:string;
};
type Greeting2State={count:number, reviews:string[]}
class Greeting2 extends Component <Greeting2Props,Greeting2State> {

    constructor(props: Greeting2Props)
    {
        super(props);
        this.state={count:0 , reviews:['Awesome', ' Fantastic']};
        this.Increment=this.Increment.bind(this);
    }
    
    Increment()
    {
        this.setState({count: this.state.count+1});
    }
    
    render(): ReactNode {
        console.log("this.state",this.state);
        return ( <>
        <h1 className="text-3xl text-indigo-700">Hello {this.props.name} {this.state.count} {this.state.reviews}</h1> 
        <button className="bg-indigo-700 border-2 text-white px-4 py-2" onClick={this.Increment}>Increment</button>  
        </>);
    }
   
};

export default Greeting2;