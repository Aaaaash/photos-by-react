var React=require('react');
var $=require('jquery');
var MainList=React.createClass({
    render:function(){
        var imgItem=this.props.imgData.imgInfo.map(function(item,index){
            return (
                <ImgItem {...item} key={index} mouseEnter={this.handleMouseEnter} mouseLeave={this.handleMouseLevae} handleShow={this.props.handleShow}/>
            )
        }.bind(this));
        return (
            <div className="img-box">
                <h4 className="list-tit">{this.props.imgData.tit}<span className="img-num">({this.props.imgData.num}photos)</span></h4>
                <ul className="img-list">
                    {/*it's photos*/}
                    {imgItem}
                </ul>
            </div>
        )
    },
    handleMouseEnter:function(e){
        var theImg=e.target;
        $(theImg).next().stop().animate({
            height:'0.4rem',
            opacity:1
        },300);
    },
    handleMouseLevae:function(e){
        var theImg=e.target;
        $(theImg).next().stop().animate({
            height:'0',
            opacity:0
        },300);
    }
});
var ImgItem=React.createClass({
    render:function(){
        return (
            <li className="img-item">
                <img className="photo" alt={this.props.tit} src={this.props.url} title={this.props.tit} onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} onClick={this.props.handleShow.bind(this,this.props)}/>
                <span className="photo-content">{this.props.content}</span>
                <p className="time">{this.props.time}</p>
            </li>
        )
    }
});
module.exports=MainList;
