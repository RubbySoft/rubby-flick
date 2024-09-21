import React from 'react';
import Post from '../components/Post';

function Home() {
  return (
    <div>
      <h1>Welcome to Rubby Flick</h1>
      <p>Your social media experience, brought to you by Rubbysoft.</p>
      {/* Include Post Component */}
      <Post />
    </div>
  );
}

export default Home;
