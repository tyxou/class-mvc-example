class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.current = 0;
  }

  start() {
    this.view.render();
    this._setEvents();
  }

  _setEvents() {
    document.addEventListener('click', (event) => {
      if(event.target.id === 'start') {
        this.view._setDisplay('info');
        this.view.render(this.model.textArr[this.current]);
      } else if (event.target.id === 'prev') {
        this._prev();
        this.view.render(this.model.textArr[this.current]);
      } else if (event.target.id === 'next') {
        this._next();
        this.view.render(this.model.textArr[this.current]);
      } else if (event.target.id === 'end') {
        this.end();
      }
    })
  }

  _next() {
    if(this.current < this.model.textArr.length - 1) {
      this.current = this.current + 1;
    } else if (this.current === this.model.textArr.length - 1) {
      this.view._setDisplay('outro');
    }
  }

  _prev() {
    if (this.current > 0) {
      this.current = this.current - 1;
    } else if (this.current === 0) {
      this.view._setDisplay('home');
    }
  }

  end() {
    console.log('Goodbye')
    const restart = window.confirm('Do You Want To Restart');
    if(restart) {
      this.view._setDisplay('home');
      this.current = 0;
      this.view.render()
    } else {
      window.close();
    }
  }
}

export default Controller;