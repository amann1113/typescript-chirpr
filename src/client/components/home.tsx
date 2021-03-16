import React, { Component } from 'react';
import { IChirp } from '../utils/interfaces';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class Home extends Component<IHomeProps, IHomeState> {

  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      chirps: []
    }
  }

  componentDidMount() {
    fetch('/api/chirps')
      .then(res => res.json())
      .then(chirps => this.setState({ chirps }));
  }

  render() {
    return (
      <main className="container timeline">
        <section className="row justify-content-center">
          <>
            {/* modifies and styles each new chirp */}
            {this.state.chirps.map(chirp => {
              return (
                <div key={chirp.id} className="col-md-7">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{chirp.user}</h5>
                      <p className="card-text">{chirp.text}</p>
                      <Link className="link" to={`/admin/${chirp.id}`} >
                        <button
                          id="adminButton"
                          className="btn" 
                        >Admin</button>
                      </Link>

                    </div>
                  </div>
                </div>
              )
            })}
          </>
        </section>
      </main>
    );
  }



}

export interface IHomeProps extends RouteComponentProps <{ id: string }>{ }

export interface IHomeState {
  chirps: IChirp[]
}