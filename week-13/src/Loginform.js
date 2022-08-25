import React, { Component } from 'react'

export default class Loginform extends Component {
  render() {
    return (
       <div className='container'>
        <h3>Log In</h3>
        <form>
        <div className="mb-3">
          <label for="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
      </div>
    )
  }
}

