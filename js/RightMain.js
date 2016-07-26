var React=require('react');
var $=require('jquery');
var MainList=require('./MainList');
var ShadowBox=require('./ShadowBox').ShadowBox;
var ImgData=require('./ImgData.json');
var RightMain=React.createClass({
    render:function(){
        var mainList=ImgData.map(function(item,index){
            return (
                <MainList imgData={item} key={index}/>
            )
        }.bind(this));
        return (
            <div className="right-main">
                {mainList}
                <ShadowBox hideShadow={this.hideShadowBox}/>
            </div>
        )
    },
    hideShadowBox:function(){
        $(".imgBig-box").stop().animate({
            opacity:0,
            top:"-20%"
        },300,function(){
            $(".imgBig-box").css("display","none");
            $(".shadow-box").animate({
                    opacity:0
                },200,function(){
                    $(this).css("display","none");
                })
            $("html").css("overflowY","scroll");
        });
    }
});
module.exports={
    RightMain:RightMain
};
