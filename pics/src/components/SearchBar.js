import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          {this.state.term.length < 4 && <p>Password is too short.</p>}
        </form>
      </>
    );
  }
}
