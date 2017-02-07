const React=require('react');
const ReactDOM=require('react-dom');
class Test extends React.Component{
    constructor(...args){
        super(...args);

        this.state={value:''};
    }
    fn(){
        this.setState({
            value: this.refs['txt1'].value
        });
    }
    render(){
        return <div>
            <input ref="txt1" type="text" onChange={this.fn.bind(this)}/>
            <span>{this.state.value}</span>
        </div>;
    }
}
window.onload=function(){
    var oView=document.getElementsByTagName('blue-view')[0];
    ReactDOM.render(
        <Test/>,
        oView
    );
};