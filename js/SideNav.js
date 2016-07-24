var React=require('react');

var SideNav=React.createClass({
    render:function(){
        var renderItem=this.props.itemData.map(function(item,index){
            return (
                <NavItem tit={item.tit} isActive={item.isActive} key={index}/>
            )
        })
        return (
            <div className="side-nav">
                <h3 className="nav-tit">CATEGORIES</h3>
                <ul className="nav-list" >
                    {renderItem}
                </ul>
            </div>
        )
    }
});
var NavItem=React.createClass({
    render:function(){
        return (
            <li className={this.props.isActive?"nav-item active":"nav-item"} href="javascript:;">{this.props.tit}</li>
        )
    }
})
module.exports=SideNav;
