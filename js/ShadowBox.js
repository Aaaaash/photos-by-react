var React=require('react');
var BigContent=require('./BigContent');
var ImgData=require('./ImgData.json');
var $=require('jquery');
var PubSub=require('pubsub-js');
var showSha='showSha';
var getNext='getNext';
var getPrev='getPrev';
var ShadowBox=React.createClass({
    getInitialState:function(){
        return {
            activeData:[],
            prevData:[],
            nextData:[]
        }
    },
    componentDidMount:function(){
        PubSub.subscribe(showSha,function(evName,data){
            this.setState({
                activeData:data
            });
        }.bind(this));
        PubSub.subscribe(getNext,function(evName,active){
            var activeData=active;
            var nextIndex;
            var thenextData;
            ImgData.map(function(item,index){
                item.imgInfo.map(function(obj,num){
                    if(obj.url==activeData.url){
                        nextIndex=num+1
                    }
                });
            });
            ImgData.map(function(item,index){
                if(item.num==8){
                    item.imgInfo.map(function(obj,num){
                        if(num==nextIndex){
                            thenextData=obj;
                        }
                    });
                }
            });
            this.setState({
                nextData:thenextData
            });
        }.bind(this));
        PubSub.subscribe(getPrev,function(evName,active){
            var activeData=active;
            var prevIndex;
            var theprevData;
            ImgData.map(function(item,index){
                item.imgInfo.map(function(obj,num){
                    if(obj.url==activeData.url){
                        prevIndex=num-1;
                    }
                });
            });
            ImgData.map(function(item,index){
                if(item.num==8){
                    item.imgInfo.map(function(obj,num){
                        if(num==prevIndex){
                            theprevData=obj;
                        }
                    });
                }
            });
            this.setState({
                prevData:theprevData,
            });
        }.bind(this));
    },
    render:function(){
        var href=this.shareQzone();
        return (
            <div className="shadow-box" tabIndex="1" >
                <div className="imgBig-box"  ref="imgBox" >
                    <span className="close-button" onClick={this.props.hideShadow}></span>
                    <div className="img-ctrl clearfix fl">
                        <div className="left-ctrl ctrl"  onClick={this.handleRightRemove.bind(this,this.state.activeData)}></div>
                        <div className="right-ctrl ctrl"  onClick={this.handleLeftRemove.bind(this,this.state.activeData)}></div>
                        <img className="img-big" src={this.state.activeData.url}/>
                    </div>
                    <BigContent href={href} imgInfo={this.state.activeData}/>
                </div>
            </div>
        )
    },
    shareQzone:function(){
        var p = {
        url:"https://sakub.github.io/learn-React/responsive-page_2/",
        showcount:'1',
        desc:'qzone分享API测试',
        summary:'qzone分享API测试',
        title:'qzone分享API测试',
        site:'qzone分享API测试',
        pics:'https://github.com/SakuB/learn-React/blob/master/responsive-page_2/img/test.jpg', /*分享图片的路径(可选)*/
        style:'202',
        width:105,
        height:31
        };
        var s = [];
        for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
        }
        var href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
        return href;
    },
    handleLeftRemove:function(active){
        PubSub.publish(getNext,active);
        var imgBox=this.refs.imgBox;
        $(imgBox).stop().animate({
            left:"-5%",
            opacity:0
        },200,function(){
            $(imgBox).css('left',"5%").stop().animate({
                left:"0",
                opacity:1
            })
            this.setState({
                activeData:this.state.nextData
            })
        }.bind(this));
    },
    handleRightRemove:function(active){
        PubSub.publish(getPrev,active);
        var imgBox=this.refs.imgBox;
        $(imgBox).stop().animate({
            left:"5%",
            opacity:0
        },200,function(){
            $(imgBox).css('left',"-5%").stop().animate({
                left:"0",
                opacity:1
            })
            this.setState({
                activeData:this.state.prevData
            })
        }.bind(this))
    }
});
module.exports={
    ShadowBox:ShadowBox,
    showSha:showSha
};
