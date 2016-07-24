var React=require('react');
var Search=React.createClass({
    render:function(){
        return (
            <div className="search-box">
                <span className="search-bg"></span>
                <input className="search-inpuy" type="text" placeholder="Search files"/>
            </div>
        )
    }
});
module.exports=Search;
