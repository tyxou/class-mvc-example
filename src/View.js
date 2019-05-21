class View {
  constructor(rootEl) {
    this.root = rootEl;
    this.display = 'home';
  }

  _intro() {
    return (`
      <div class="intro">
        <h2>Welcome to <code>class</code> in JavaScript</h2>
        <button id="start">Start</button>
      </div>
    `);
  }

  _showInfo(obj) {
    return (`
      <div class="info">
        <h2>${obj.question}</h2>
        <div class="controls">
          <button id="prev">Prev</button>
          <button id="next">Next</button>
        </div>
      </div>
    `);
  }

  _outro() {
    return (`
      <div class="outro">
        <h2>Goodbye to <code>class</code> from JavaScript</h2>
        <button id="end">End</button>
      </div>
    `);
  }

  _setDisplay(display) {
    this.display = display;
  }

  startView() {
    this._setDisplay('home');
  }
  
  render(obj) {
	  const rootElement = document.getElementById(this.root);
	  if(this.display === 'home') {
	    return rootElement.innerHTML = this._intro();
	  } else if(this.display === 'info') {
	    return rootElement.innerHTML = this._showInfo(obj);
	  } else if(this.display === 'outro') {
      return rootElement.innerHTML = this._outro();
    } else {
      return rootElement.innerHTML = `<h2>Something Went Wrong</h2>`
    }
  }
}

export default View;