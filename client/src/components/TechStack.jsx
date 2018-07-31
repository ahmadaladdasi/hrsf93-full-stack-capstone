var React = require('react');

function TechStack() {
  return (
      <div className="technology-stack container-fluid">
        <div className="row">
          <div className="technologies-container col-sm-12">
            <p className="heading">Twitteration was built with these technologies:</p>
            <div className="row">
              <div className="nodejs col-sm-4 col-xs-12"><a href="https://nodejs.org/en/">
                <div className="nodejs-logo"></div></a></div>
              <div className="socketio col-sm-4 col-xs-12"><a href="http://socket.io/">
                <div className="socketio-logo"></div></a></div>
              <div className="postgres col-sm-4 col-xs-12"><a href="https://www.postgresql.org/">
                <div className="postgres-logo"></div></a></div>
            </div>
            <div className="row">
              <div className="react col-sm-4 col-xs-12"><a href="https://facebook.github.io/react/index.html">
                <div className="react-logo"></div></a></div>
              <div className="d3 col-sm-4 col-xs-12"><a href="http://d3js.org" target="_blank">
                <div className="d3-logo"></div></a></div>
              <div className="twitter col-sm-4 col-xs-12"><a href="https://dev.twitter.com/streaming/overview">
                <div className="twitter-logo"></div></a></div>
            </div>
          </div>
        </div>
        <div className="row">
          <p></p>
        </div>
      </div>
    )
}

module.exports = TechStack;
