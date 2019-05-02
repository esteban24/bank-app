import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  perPage = 10;

  constructor(props) {
    super(props);

    this.state = {
      charges: [],
      offset: 0,
      err: false
    };
  }

  componentDidMount() {
    this.loadCharges();
  }

  loadCharges() {
    fetch('/api/charges')
      .then(res => res.json())
      .then(charges => this.setState({
        charges: charges,
        pageCount: Math.ceil(charges.length / this.perPage)
      }))
      .catch(err => this.setState({ err }));
  }

  handleDelete(id) {
    fetch('/api/charges/' + id, {
        method: 'DELETE'
    }).then(res => {
        this.removeCharge(id);
        return res;
    }).catch(err => err);
  }

  removeCharge(id) {
    let currentCharges = this.state.charges.filter(function(currentCharge) { return currentCharge.id !== id });
    this.setState({ charges: currentCharges });
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.perPage);

    this.setState({ offset: offset }, () => {
      this.loadCharges();
    });
  };

  render() {
    if (this.state.err) {
      return (
        <div className="Home">
          <div className="container-fluid">
            <h3>Error loading page.</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Home">
          <h3>Charges list</h3>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.charges.map(charge =>
                <tr key={charge.id}>
                  <td>{charge.description}</td>
                  <td className="text-danger">- {charge.amount} €</td>
                  <td>
                    <Link to={`/charges/show/${charge.id}`}>
                      <button className="btn btn-default">Show</button>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => { this.handleDelete(charge.id) }} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="container-fluid">
            <Link to="/charges/new">
              <button className="btn btn-success" type="button">Nuevo cargo</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Home;
