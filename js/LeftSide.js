var React=require('react');
var SideHeader=require('./SideHeader');
var Search=require('./Search');
var SideNav=require('./SideNav');
var SideFooter=require('./SideFooter');
var ItemData=[
    {
        tit:"Photos",
        isActive:true
    },
    {
        tit:"Videos",
        isActive:false
    },
    {
        tit:"Projects",
        isActive:false
    }
];
var LeftSide=React.createClass({
    render:function(){
        return (
            <div className="left-side">
                <SideHeader />
                <Search />
                <SideNav itemData={ItemData}/>
                <SideFooter/>
            </div>
        )
    }
});
module.exports=LeftSide;
