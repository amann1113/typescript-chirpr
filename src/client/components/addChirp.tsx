
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

export default class AddChirp extends Component<IAddProps, IAddState> {

  constructor(props: IAddProps) {
    super(props);
    this.state = {
      user: '',
      value: '',
    };
  }

  handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: event.target.value });
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: event.target.value });
  }

  addChirp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {user: this.state.user, text: this.state.value}
    fetch('/api/chirps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.history.push('/');
      })
  }

  render() {
    return (
      <section className="newChirp">
        <div className="container">
          <section className="row justify-content-center">
            <article className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form className="form-group">
                    <input value={this.state.user} onChange={this.handleUserChange} id="username" type="text" className="form-control shadow-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <textarea
                      className="shadow-sm form-control mb-3"
                      aria-label="With textarea"
                      placeholder="What say you?"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <button
                      id="addChirp"
                      className="btn"
                    onClick={this.addChirp}  //adds new chirp when "Chirp" is clicked
                    >Chirp</button>
                  </form>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    );
  }



}

export interface IAddProps extends RouteComponentProps { }

export interface IAddState {
  user: string;
  value: string;
}