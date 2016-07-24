var React=require('react');
var SideHeader=React.createClass({
    render:function(){
        return (
            <section className="side-header">
                <div className="header-img">
                    <img className="img" src="../img/header-img.jpg" alt="it's me!" title="it's me!"/>
                    <h2 className="header-tit">Sakura</h2>
                    <p className="head-sm-tit">2390 photos</p>
                    <a className="head-link" href="javascript:;">UPLOAD</a>
                </div>
            </section>
        )
    }
});
module.exports=SideHeader;
