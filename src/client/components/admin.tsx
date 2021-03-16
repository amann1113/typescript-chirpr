import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { IChirp } from '../utils/interfaces';

export default class Admin extends Component<IAdminProps, IAdminState> {

  constructor(props: IAdminProps) {
    super(props);
    this.state = {
      user: '',
      value: ''
    };
  }

  handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ user: event.target.value });
  }

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {

    fetch(`/api/chirps/${this.props.match.params.id}`)
      .then(res => res.json())
      .then((chirp: IChirp) => this.setState({ user: chirp.user, value: chirp.text }));
  }

  editChirp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { user: this.state.user, text: this.state.value }
    fetch(`/api/chirps/${this.props.match.params.id}`, {
      method: 'PUT',
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

  deleteChirp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch(`/api/chirps/${this.props.match.params.id}`, {
      method: 'delete'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.history.push('/');
      })
  }


  render() {
    return (
      <div>
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
                        id="editChirp"
                        className="btn"
                        onClick={this.editChirp}  //updates chirp when clicked
                      >Edit Chirp</button>
                      <button
                        id="deleteChirp"
                        className="btn"
                        onClick={this.deleteChirp}  //deletes chirp when clicked
                      >Delete Chirp</button>
                    </form>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </section>
      </div>


    );
  }

}

interface IAdminProps extends RouteComponentProps<{ id: string }> { }
interface IAdminState {
  user: string;
  value: string;
}