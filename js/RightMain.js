var React=require('react');
var $=require('jquery');
var MainList=require('./MainList');
var ShadowBox=require('./ShadowBox');
var ImgData=require('./ImgData.json');
var RightMain=React.createClass({
    getInitialState:function(){
        return {
            imgData:ImgData,
            activeData:[]
        }
    },
    render:function(){
        var mainList=this.state.imgData.map(function(item,index){
            return (
                <MainList imgData={item} key={index} handleShow={this.showShadowBox}/>
            )
        }.bind(this));
        return (
            <div className="right-main">
                {mainList}
                <ShadowBox hideShadow={this.hideShadowBox} imgInfo={this.state.activeData}/>
            </div>
        )
    },
    showShadowBox:function(data){
        this.setState({
            activeData:data
        });
        $("html").css("overflowY","hidden");
        $(".shadow-box").height($(window)
            .height())
            .css({
                "top":$(document).scrollTop(),
                "display":"block"
            }).stop().animate({
                opacity:1
            },200,function(){
                $(".imgBig-box").css("display","block").stop().animate({
                    opacity:1,
                    top:"0"
                },300)
            });
    },
    hideShadowBox:function(){
        $(".imgBig-box").stop().animate({
            opacity:0,
            top:"-20%"
        },300,function(){
            $(".imgBig-box").css("display","none");
            $(".shadow-box").animate({
                    opacity:0
                },200).css("display","none");
            $("html").css("overflowY","scroll");
        });

    }
});
module.exports=RightMain;
