import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, BottomNav, Card } from '../Components';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    axios({
      method: 'get',
      url: 'https://bd260ed4f3b7.ngrok.io/api/v1/test',
    }).then((resp) => {
      const commentArray = JSON.parse(localStorage.getItem('commentArray'));
      for (var i = 0; i < resp.data.data.length; i++) {
        if (commentArray.findIndex(x => x.identifier === resp.data.data[i].identifier) === -1) {
          commentArray.push(resp.data.data[i]);
        }
      }
      console.log(commentArray)
      this.setState({
        commentArray: commentArray
      })
    })
  }

  render() {
    const { commentArray } = this.state;
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div>
          <Navbar />
        </div>
        {console.log(commentArray)}
        <div style={{ marginBottom: '90px' }}>
          {commentArray?.map((comment) => (
            <Card key={comment.identifier} comment={comment} />
          ))}
        </div>
        <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <BottomNav />
        </div>
      </div>
    )
  }

}


export default HomeContainer;