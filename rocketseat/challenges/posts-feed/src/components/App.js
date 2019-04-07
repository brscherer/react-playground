import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://i.pinimg.com/originals/e3/31/57/e33157ea21bd33ddea822beb78f6df16.jpg',
        name: 'Bruno Scherer',
        time: '3 min ago',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 2,
        avatar: 'https://i.pinimg.com/originals/e3/31/57/e33157ea21bd33ddea822beb78f6df16.jpg',
        name: 'Bruno Scherer',
        time: '30 min ago',
        body:
          'Pellentesque diam volutpat commodo sed egestas egestas fringilla. Quis lectus nulla at volutpat diam ut. Sit amet consectetur adipiscing elit ut aliquam purus. Imperdiet proin fermentum leo vel. Senectus et netus et malesuada fames ac turpis egestas maecenas. Sit amet est placerat in egestas erat imperdiet sed. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Eu nisl nunc mi ipsum faucibus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Enim ut sem viverra aliquet. Justo laoreet sit amet cursus sit amet dictum sit. Lorem mollis aliquam ut porttitor leo a.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <section className="container">
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </section>
      </Fragment>
    );
  }
}
