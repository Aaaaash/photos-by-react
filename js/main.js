var React=require('react');
var ReactDOM=require('react-dom');
var LeftSide=require('./LeftSide');
var RightMain=require('./RightMain').RightMain;
var MainCom=React.createClass({
    render:function(){
        return (
            <div>
                <LeftSide/>
                <RightMain/>
            </div>
        )
    }
});
ReactDOM.render(
    <MainCom/>,
    document.getElementById('app')
);
