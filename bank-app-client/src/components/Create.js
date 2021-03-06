import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      amount: 0,
      redirectToNewPage: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    return fetch('/api/charges', {
        method: 'POST',
        body: JSON.stringify({
          description: this.state.description,
          amount: this.state.amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        this.setState({ redirectToNewPage: true });
        return res;
    }).catch(err => err);
  }

  render() {
    if (this.state.redirectToNewPage){
      return (
        <Redirect to={{
          pathname: '/charges'
        }}/>
      );
    } else {
      return (
        <div className="Create">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Nuevo cargo</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Descripción</label>
                  <input type="text" className="form-control" name="description" id="description" placeholder="Introduzca una descripción" required="required" value={this.state.description} onChange={this.handleInputChange} maxLength="255"/>
                </div>
                <div className="form-group">
                  <label>Cantidad</label>
                  <input type="number" className="form-control" name="amount" id="amount" placeholder="Introduzca una cantidad" required="required" value={this.state.amount} onChange={this.handleInputChange} min="1" step="0.01"/>
                  <small id="amountHelp" className="form-text text-muted">Introduzca una cantidad positiva.</small>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
}

export default Create;
