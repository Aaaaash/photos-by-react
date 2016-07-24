var React=require('react');
var BigContent=require('./BigContent');
var $=require('jquery');
var ShadowBox=React.createClass({
    render:function(){
        var href=this.shareQzone();
        return (
            <div className="shadow-box" tabIndex="1" >
                <div className="imgBig-box">
                    <span className="close-button" onClick={this.props.hideShadow}></span>
                    <div className="img-ctrl clearfix fl">
                        <div className="left-ctrl ctrl"></div>
                        <div className="right-ctrl ctrl"></div>
                        <img className="img-big" src={this.props.imgInfo.url}/>
                    </div>
                    <BigContent href={href} imgInfo={this.props.imgInfo}/>
                </div>
            </div>
        )
    },
    shareQzone:function(){
        var p = {
        url:"https://sakub.github.io/learn-React/responsive-page_2/",
        showcount:'1',/*是否显示分享总数,显示：'1'，不显示：'0' */
        desc:'qzone分享API测试',/*默认分享理由(可选)*/
        summary:'qzone分享API测试',/*分享摘要(可选)*/
        title:'qzone分享API测试',/*分享标题(可选)*/
        site:'qzone分享API测试',/*分享来源 如：腾讯网(可选)*/
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
        console.log(href);
        return href;
    }
});
module.exports=ShadowBox;
