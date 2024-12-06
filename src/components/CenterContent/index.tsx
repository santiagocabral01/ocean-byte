import FeedImageDescriptionElement from "../FeedImageDescriptionElement";
import FeedPictureItemElement from "../FeedPictureItemElement";
import FeedtextPostItemElement from "../FeedtextPostItemElement";
import FeedVideoPreviewPostItemElement from "../FeedVideoPreviewPostItemElement";

export const CenterContent = ()=>{

    return(
        <section className="centerContent-container">
            <div className="middle">
                <section className="section-stories-scroll" >
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
                </section>

                    <div className="text-box">
                        <div className="box-container">
                        <textarea placeholder="Reply"></textarea>
                        <div>
                            <div className="formatting">
                            <button type="button">
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z" clipRule="evenodd" fillRule="evenodd"></path>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"></path>
                                </svg>
                            </button>
                            <button type="button">
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M12 4H19"></path>
                                <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M8 20L16 4"></path>
                                <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5 20H12"></path>
                                </svg>
                            </button>
                            <button type="button">
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3"></path>
                                <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M3 21H21"></path>
                                </svg>
                            </button>
                            <button type="button">
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M4 12H20"></path>
                                <path strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12"></path>
                                </svg>
                            </button>
                            <button type="button">
                                <svg fill="none" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <circle strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" r="10" cy="12" cx="12"></circle>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#707277" d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"></path>
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#707277" d="M8.00897 9L8 9M16 9L15.991 9"></path>
                    </svg>
                            </button>
                            <button type="submit" className="send" title="Send">
                                <svg fill="none" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M12 5L12 20"></path>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#ffffff" d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                
                <div className="feeds">

                    <FeedPictureItemElement/>
                    <FeedtextPostItemElement/>
                    <FeedImageDescriptionElement/>
                    <FeedVideoPreviewPostItemElement/>

                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

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