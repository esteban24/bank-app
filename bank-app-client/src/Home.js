import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charges: [],
      err: false
    };
  }

  componentDidMount() {
    fetch('/api/charges')
      .then(res => res.json())
      .then(charges => this.setState({ charges }))
      .catch(err => this.setState({ err }));
  }

  render() {
    if (this.state.err) {
      return (
        <div className="Home">
          <div className="container-fluid">
            <h3 >Error al cargar la página</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Home">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Listado de cargos</h3>
            </div>
            <div className="panel-body">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.charges.map(charge =>
                    <tr key={charge.id}>
                      <td>{charge.description}</td>
                      <td className="text-danger">- {charge.amount} €</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container-fluid">
            <Link to="/create">
              <div className="btn btn-success" type="button"><span className="glyphicon glyphicon-plus"></span> Nuevo cargo</div>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Home;
