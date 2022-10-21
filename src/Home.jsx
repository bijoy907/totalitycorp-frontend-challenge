import React from "react";

const Home = () => {

    return (
        <>
            <div className="parent_container">

                <div className="left_div">

                    <div className="leftdiv_top">
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                        <div className="profile_logo">🌐</div>
                        <h4>Bijoy Rakshit</h4>
                        <p>Fresher || Frontend || React || JavaScript</p>
                        <p>rakshit.bijoy@gmail.com</p>
                    </div>

                    <div className="leftdiv_mid">
                        <div className="leftdiv_midInner">
                            <p>Who viewed You</p>
                            <p className="leftdiv_midInnerNum">7,689</p>
                        </div>

                        <div className="leftdiv_midInner">
                            <p>View on Post</p>
                            <p className="leftdiv_midInnerNum">6,598</p>
                        </div>
                    </div>

                    <div className="leftdiv_bottom">
                        <p className="recent_tag">Recent</p>
                        <div className="bottom_recent">
                            <span className="bottom_hash">#</span>
                            <p>React js</p>
                        </div>
                        <div className="bottom_recent">
                            <span className="bottom_hash">#</span>
                            <p>Node js</p>
                        </div>
                        <div className="bottom_recent">
                            <span className="bottom_hash">#</span>
                            <p>Js</p>
                        </div>
                    </div>
                </div>
                {/* -------------feed----------- */}
                <div className="feed">
                    <div className="feed_inputContainer">
                        <div className="feedInput">
                            <h2>🌐</h2>
                            <input type="post" placeholder="🖊 Start a post..." />
                        </div>
                        <div className="feed_inputOption">
                            <div className="input">
                                <h5>📷 Photo</h5>
                            </div>
                            <div className="input">
                                <h5>📹 Video</h5>
                            </div>
                            <div className="input">
                                <h5>🗓 Event</h5>
                            </div>
                            <div className="input">
                                <h5>📑 Write Article </h5>
                            </div>
                        </div>
                    </div>
                    {/* ---------------Feed Post----------- */}
                    <div className="feed_post">
                        <div className="feedPost_head">
                            <h2>🌐</h2>
                            <div className="headinfo">
                                <h3>Bijoy Rakshit</h3>
                                <p>Fresher || Frontend || React || JavaScript</p>
                            </div>
                        </div>
                        <div className="feedPostBody">
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="feed_inputOption">
                            <div className="input">
                                👍
                                <h5>Like</h5>
                            </div>
                            <div className="input">
                                ✉️
                                <h5>Comment</h5>
                            </div>
                            <div className="input">
                                🔗
                                <h5>Share</h5>
                            </div>
                            <div className="input">
                                📌
                                <h5>Save</h5>
                            </div>
                        </div>
                    </div>
                    {/* ****** */}
                    <div className="feed_post">
                        <div className="feedPost_head">
                            <h2>🌐</h2>
                            <div className="headinfo">
                                <h3>Bijoy Rakshit</h3>
                                <p>Fresher || Frontend || React || JavaScript</p>
                            </div>
                        </div>
                        <div className="feedPostBody">
                            Lorem ipsum dolor sit amet fuga at totam quod corrupti dolore iste eaque provident fugiat consectetur omnis, ipsa temporibus unde quisquam facilis hic.
                        </div>
                        <div className="feed_inputOption">
                            <div className="input">
                                👍
                                <h5>Like</h5>
                            </div>
                            <div className="input">
                                ✉️
                                <h5>Comment</h5>
                            </div>
                            <div className="input">
                                🔗
                                <h5>Share</h5>
                            </div>
                            <div className="input">
                                📌
                                <h5>Save</h5>
                            </div>
                        </div>
                    </div>
                    {/* ********* */}
                    <div className="feed_post">
                        <div className="feedPost_head">
                            <h2>🌐</h2>
                            <div className="headinfo">
                                <h3>Bijoy Rakshit</h3>
                                <p>Fresher || Frontend || React || JavaScript</p>
                            </div>
                        </div>
                        <div className="feedPostBody">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="feed_inputOption">
                            <div className="input">
                                👍
                                <h4>Like</h4>
                            </div>
                            <div className="input">
                                ✉️
                                <h5>Comment</h5>
                            </div>
                            <div className="input">
                                🔗
                                <h5>Share</h5>
                            </div>
                            <div className="input">
                                📌
                                <h5>Save</h5>
                            </div>
                        </div>
                    </div>
                    {/* *********** */}
                    <div className="feed_post">
                        <div className="feedPost_head">
                            <h2>🌐</h2>
                            <div className="headinfo">
                                <h3>Bijoy Rakshit</h3>
                                <p>Fresher || Frontend || React || JavaScript</p>
                            </div>
                        </div>
                        <div className="feedPostBody">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, dolorem.
                        </div>
                        <div className="feed_inputOption">
                            <div className="input">
                                👍
                                <h5>Like</h5>
                            </div>
                            <div className="input">
                                ✉️
                                <h5>Comment</h5>
                            </div>
                            <div className="input">
                                🔗
                                <h5>Share</h5>
                            </div>
                            <div className="input">
                                📌
                                <h5>Save</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------widgets, End Part--------------- */}

                <div className="widgets">
                    <div className="widgets_head">
                    <h4> LinkedIn News </h4>
                    <h3>ℹ</h3>
                    </div>
                    <div className="widgets_article">
                        <div className="widgets_articleleft">
                            <h2>*</h2>
                        </div>
                        <div className="widgets_artclRright">
                            <h4>Current News</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/* ****** */}
                    <div className="widgets_article">
                        <div className="widgets_articleleft">
                            <h2>*</h2>
                        </div>
                        <div className="widgets_artclRright">
                            <h4>Current News</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    {/* ****** */}
                    <div className="widgets_article">
                        <div className="widgets_articleleft">
                            <h2>*</h2>
                        </div>
                        <div className="widgets_artclRright">
                            <h4>Current News</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                {/* ******** */}
            </div>
        </>
    );
}
export default Home;