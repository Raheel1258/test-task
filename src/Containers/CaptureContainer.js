import React, { Component } from 'react';
import axios from 'axios';

import { Navbar, BottomNav, CustomModal } from '../Components';

import './styles.css'

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      image: ""
    };
  }

  handleModal = (value) => {
    this.setState({
      isOpen: value
    })
  }

  handleFile = (event) => {
    this.setState({
      image: event.target.files[0],
    }, () => {
      this.handleModal(true);
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const { history } = this.props;
    var commentArray = JSON.parse(localStorage.getItem("commentArray"));
    const commentObj = {
      comment: this.state.comment,
      image: URL.createObjectURL(this.state.image),
      identifier: Math.floor(Math.random() * 10000000000000)
    };
    if (commentArray) {
      commentArray.push(commentObj)
      localStorage.setItem("commentArray", JSON.stringify(commentArray))
    }
    else {
      localStorage.setItem("commentArray", JSON.stringify([commentObj]))
    }
    history.push('/');
    axios({
      method: 'post',
      url: 'https://bd260ed4f3b7.ngrok.io/api/v1/test',
      data: commentObj
    }).then((resp) => {
      var commentArray = JSON.parse(localStorage.getItem("commentArray"));
      var foundIndex = commentArray?.findIndex(x => x.identifer === resp.data.data.identifer);
      console.log(commentArray[foundIndex])
      commentArray[foundIndex] = resp.data.data;
      localStorage.setItem("commentArray", JSON.stringify(commentArray))
    })

  }

  render() {
    const { isOpen, image } = this.state;
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div>
          <Navbar component={"capture"} />
        </div>
        <div className="capture-text__container">
          {image ?
            <div style={{ width: '100%', height: '100%' }}>
              <img style={{ width: '100%', height: '100%' }} alt="" src={URL.createObjectURL(image)} />
            </div>
            :
            <div className="capture-text">
              CAPTURE IMAGE
        </div>
          }
        </div>
        <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <BottomNav handleFile={this.handleFile} component={"capture"} />
        </div>
        <CustomModal
          isOpen={isOpen}
          handleChange={this.handleChange}
          handleModal={this.handleModal}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }

}


export default HomeContainer;