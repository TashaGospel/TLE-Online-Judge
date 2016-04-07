var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

module.exports = React.createClass({
    render: function() {
        var tabs = this.props.tabs.map(function(tab, index) {
            return <Tab eventKey={index} key={index} title={tab.title}>{tab.content}</Tab>
        });
        return (
            <nav className="navbar navbar-nav">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TLE online judge</a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li>
                            <div className="right-inner-addon ">
                                <i className="glyphicon glyphicon-search"></i> 
                                <input type="search" className="form-control" placeholder="Search" />
                            </div>
                        </li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        <li><div id="UploadModalButton"></div></li> 
                    </ul>
                </div>
                <Tabs defaultActiveKey={1}>
                    {tabs}
                </Tabs>
            </nav>
        );
    }
});

