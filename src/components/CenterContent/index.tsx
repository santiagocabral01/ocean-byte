export const CenterContent = ()=>{

    return(
        <section className="centerContent-container">
            <div className="middle">
                <div className="stories">
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-1.jpg" alt="pic"/>
                        </div>
                        <p className="name">Your Story</p>
                    </div>
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-9.jpg" alt="pic"/>
                        </div>
                        <p className="name">Lilla James</p>
                    </div>
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-10.jpg" alt="pic"/>
                        </div>
                        <p className="name">Winnie hale</p>
                    </div>
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-11.jpg" alt="pic"/>
                        </div>
                        <p className="name">Daniel Beal</p>
                    </div>
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-12.jpg" alt="pic"/>
                        </div>
                        <p className="name">Jemes Roy</p>
                    </div>
                    <div className="story">
                        <div className="profile-photo">
                            <img src="/profile-13.jpg" alt="pic"/>
                        </div>
                        <p className="name">Tina Roy</p>
                    </div>
                </div>
                <form className="create-post">
                    <div className="profile-photo">
                        <img src="/profile-1.jpg" alt=""/>
                    </div>
                    <input type="text" placeholder="what's on your mind, Diana?" id="create-post"/>
                    <input type="submit" value="post" className="btn btn-primary"/>
                </form>
                
                <div className="feeds">
                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-13.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Lana Rose</h3>
                                    <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-1.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-10.jpg"/></span>
                            <span><img src="/profile-4.jpg"/></span>
                            <span><img src="/profile-15.jpg"/></span>
                            <p>liked-by <b>Ernest Achiver</b> and <b>2,323 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Lana Rose</b> Beautifull pic of my sister mona. <span className="harsh-tag">#lifestyle</span></p>
                        </div>
                        <div className="comments text-muted">View all 277 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-14.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Kumar Boss</h3>
                                    <small>Goa, 35 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-2.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-12.jpg"/></span>
                            <span><img src="/profile-14.jpg"/></span>
                            <span><img src="/profile-10.jpg"/></span>
                            <p>liked-by <b>Lana Rose</b> and <b>5,15 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Kumar Boss</b> Another good day with myself  <span className="harsh-tag">#glass</span></p>
                        </div>
                        <div className="comments text-muted">View all 52 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-2.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Jasmin Roy</h3>
                                    <small>Mumbai, 1 HOUR AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-3.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-5.jpg"/></span>
                            <span><img src="/profile-6.jpg"/></span>
                            <span><img src="/profile-7.jpg"/></span>
                            <p>liked-by <b>Milan Saron</b> and <b>1,303 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Jasmin Roy</b> Happy Life is the best <span className="harsh-tag">#flower</span></p>
                        </div>
                        <div className="comments text-muted">View all 177 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-16.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Mrinal Santos</h3>
                                    <small>Dubai, 25 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-4.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-10.jpg"/></span>
                            <span><img src="/profile-4.jpg"/></span>
                            <span><img src="/profile-15.jpg"/></span>
                            <p>liked-by <b>Ernest Achiver</b> and <b>2,023 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Mrinal Santos</b> Beautifull pic of my friends. <span className="harsh-tag">#friend</span></p>
                        </div>
                        <div className="comments text-muted">View all 270 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-17.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Samoli Das</h3>
                                    <small>Kolkata, 50 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-6.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-10.jpg"/></span>
                            <span><img src="/profile-12.jpg"/></span>
                            <span><img src="/profile-5.jpg"/></span>
                            <p>liked-by <b>Ernest Achiver</b> and <b>1,123 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Samoli Das</b> A busy day... <span className="harsh-tag">#lifestyle</span></p>
                        </div>
                        <div className="comments text-muted">View all 717 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-18.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Rohon Roy</h3>
                                    <small>Dubai, 55 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-7.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-5.jpg"/></span>
                            <span><img src="/profile-4.jpg"/></span>
                            <span><img src="/profile-1.jpg"/></span>
                            <p>liked-by <b>Ernest Achiver</b> and <b>2,323 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Rohon Roy</b> My Beautifull sister <span className="harsh-tag">#sister</span></p>
                        </div>
                        <div className="comments text-muted">View all 555 comments</div>
                    </div>

                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src="/profile-19.jpg" alt="pic"/>
                                </div>
                                <div className="info">
                                    <h3>Bhola Rose</h3>
                                    <small>Dubai, 15 MINUTES AGO</small>
                                </div>
                            </div>
                            <span className="edit">
                                <i className="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div className="photo">
                            <img src="/feed-5.jpg"/>
                        </div>

                        <div className="action-buttons">
                            <div className="interaction-buttons">
                                <span><i className="uil uil-heart"></i></span>
                                <span><i className="uil uil-comment-dots"></i></span>
                                <span><i className="uil uil-share-alt"></i></span>
                            </div>
                            <div className="bookmark">
                                <span><i className="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div className="liked-by">
                            <span><img src="/profile-10.jpg"/></span>
                            <span><img src="/profile-4.jpg"/></span>
                            <span><img src="/profile-1.jpg"/></span>
                            <p>liked-by <b>You</b> and <b>2,323 others</b></p>
                        </div>
                        <div className="caption">
                            <p><b>Bhola Rose</b> Beautifull pic of pic <span className="harsh-tag">#lifestyle</span></p>
                        </div>
                        <div className="comments text-muted">View all 277 comments</div>
                    </div>
                </div>

            </div>

            <div className="right">
                <div className="messages">
                    <div className="heading">
                        <h4>Messages</h4><i className="uil uil-edit"></i>
                    </div>
                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Search messages" id="message-search"/>
                    </div>
                    <div className="category">
                        <h6 className="active">Primary</h6>
                        <h6 className="messages-requests">General</h6>
                        <h6 className="messages-requests">Requests(7)</h6>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-17.jpg"/>
                        </div>
                        <div className="message-body">
                            <h5>Edem Quist</h5>
                            <p className="text-muted">Just woke up bruh</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-3.jpg"/>
                        </div>
                        <div className="message-body">
                            <h5>France Deila</h5>
                            <p className="text-muted">Recived bruh, thanks</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-4.jpg"/>
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Jane Doe</h5>
                            <p className="text-muted">Ok</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-5.jpg"/>
                        </div>
                        <div className="message-body">
                            <h5>Daniel Jakson</h5>
                            <p className="text-muted">2 new messages</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-6.jpg"/>
                        </div>
                        <div className="message-body">
                            <h5>Justin Heoi</h5>
                            <p className="text-muted">Lol u right</p>
                        </div>
                    </div>
                    <div className="message">
                        <div className="profile-photo">
                            <img src="/profile-7.jpg"/>
                            <div className="active"></div>
                        </div>
                        <div className="message-body">
                            <h5>Chantel Msiza</h5>
                            <p className="text-muted">Birthday Tomorrow!</p>
                        </div>
                    </div>
                </div>

                <div className="friend-requests">
                    <h4>Requests</h4>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="/profile-12.jpg"/>
                            </div>
                            <div>
                                <h5>Hajia Bintu</h5>
                                <p className="text-muted">5 mutual friends</p>
                            </div>
                        </div>
                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="/profile-19.jpg"/>
                            </div>
                            <div>
                                <h5>Jakline Mensa</h5>
                                <p className="text-muted">8 mutual friends</p>
                            </div>
                        </div>
                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                    <div className="request">
                        <div className="info">
                            <div className="profile-photo">
                                <img src="/profile-20.jpg"/>
                            </div>
                            <div>
                                <h5>Mohou Sanol</h5>
                                <p className="text-muted">3 mutual friends</p>
                            </div>
                        </div>
                        <div className="action">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn">Decline</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CenterContent;