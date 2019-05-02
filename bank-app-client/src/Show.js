import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charge: {},
      err: false
    };
  }


  componentDidMount() {
      const { match: { params } } = this.props;

      fetch('/api/charges/' + params.chargeId )
        .then(res => res.json())
        .then(charge => this.setState({ charge }))
        .catch(err => this.setState({ err }));
  }

  render() {
    return (
      <div className="Show">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Detalle</h3>
          </div>
          <div className="panel-body">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                  <tr key={this.state.charge.id}>
                    <td>{this.state.charge.id}</td>
                    <td>{this.state.charge.description}</td>
                    <td className="text-danger">- {this.state.charge.amount} €</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

export default Show;
