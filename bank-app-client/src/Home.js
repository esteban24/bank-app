import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charges: []
    };
  }

  componentDidMount() {
    fetch('/api/charges')
      .then(res => res.json())
      .then(charges => this.setState({ charges }));
  }

  render() {
    return (
      <div className="Home">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Listado de gastos</h3>
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
            <div className="btn btn-success" type="button"><span className="glyphicon glyphicon-plus"></span> Nuevo gasto</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
