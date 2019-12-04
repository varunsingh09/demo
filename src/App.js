import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './App.css';
import { connect } from 'react-redux';
import { postForm } from '././actions/';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = { userInfo: { email: "", password: "" } }
  }



  handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target
    let { userInfo } = this.state
    this.setState({ userInfo: { ...userInfo, [name]: value } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { userInfo } = this.state
    let result = this.props.postForm(userInfo)
    console.log("date save successfully", result.payload)
  }


  render() {

    return (
      <div className="App">
        
        <Progress percent={60} status="active" />
        <Progress percent={30} status="success" />
        <Progress percent={10} status="error" />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <br />
          Email : <input type="text" placeholder="Name" name="email" required onChange={(e) => this.handleChange(e)} />
          <br />
          Password : <input type="password" placeholder="Password" name="password" required onChange={(e) => this.handleChange(e)} />
          <input type="Submit" name="submit" value="Save" />
        </form>
       
       
      </div>
    );
  }


}


const mapStateToProps = (state) => {
  return {
    data: state.Form.data
  }
};

const mapDispatchToProps = dispatch => ({
  postForm: () => dispatch(postForm())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
