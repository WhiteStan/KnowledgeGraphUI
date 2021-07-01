import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return(
            <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            <h1>
              Hello World
            </h1>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  state.rectangles.forEach(function(rect) {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  });
}

export default connect(mapStateToProps)(App);