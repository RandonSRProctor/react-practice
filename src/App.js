import React from 'react';
import Tweet from './Tweet';


function App() {
  return(
    <div className={"app"}>
      
      <Tweet name="Randy" message="I made this web-site" likes="505"/>
      <Tweet name="Sarah" message="I learned React before Randy :-P" likes="23"/>
      <Tweet name="Ben" message="I like to Rock and Roll!" likes="0"/>
      <Tweet name="Brandon" message="I'm the back end dude!" likes="697"/>
    </div>
  );
}

export default App;