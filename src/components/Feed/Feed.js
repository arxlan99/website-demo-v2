import React from "react";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__leftSide">
        <div className="feed__image">
          <img src="/images/nyt-icon.png" width="50" alt="" />
        </div>
      </div>
      <div className="feed__rightSide">
        <div className="feed__top">
          <h3 className="feed__title">The New York Times</h3>
          <div className="feed__dot">
            <img src="/images/dot.svg" width={8} alt="" />
            <div className="feed__dot-dropdown">
              <span>Share</span>
              <span>Archive</span>
            </div>
          </div>
        </div>
        <div className="feed__paragraph">
          At first, Discord was only popular with gamers. But driven in part by
          the pandemic, it has exploded into the mainstream. <br /> While adults
          working from home flocked to Zoom, their kids downloaded Discord.
        </div>
        <div className="feed__descriptionPath">
          <div className="feed__descriptionImage">
            <img
              src="https://images.unsplash.com/photo-1640729792585-8582081ff55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="feed__descriptionText">
            <div className="feed__descriptionText-url">nytimes.com</div>
            <div className="feed__descriptionText-title">
              How Discord, Born From an Obscure Game, Became a Social Hub
            </div>
            <div className="feed__descriptionText-paragraph">
              Jason Citron created a video game that was going nowhere fast. So
              he stripped it down to a chatting feature that eventually boomed
              during the pandemic
            </div>
          </div>
        </div>
        <div className="feed__icons">
          <div>
            <img src="/images/comment.svg" width="20" alt="" />
            <span> 10 </span>
          </div>
          <div>
            <img src="/images/retweet.svg" width="25" alt="" />
            <span> 2 </span>
          </div>
          <div>
            <img src="/images/like.svg" width="20" alt="" />
            <span> 32 </span>
          </div>
          <div>
            <img src="/images/share.svg" width="20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
