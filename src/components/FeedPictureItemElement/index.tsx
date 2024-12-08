import { FunctionComponent } from "react";

export const FeedPictureItemElement: FunctionComponent = ()=>{

    return(
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src="/profile-13.jpg" alt="pic"/>
                    </div>
                    <div className="info">
                        <h3 className="profile-class-styles">
                            <b>
                                Lana Rose
                            </b>
                        </h3>
                        <span className="date-info-post">15 Minutes ago</span>
                    </div>
                </div>
                <span className="edit">
                    <button className="edit-action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                    </button>
                </span>
            </div>

        <div className="caption">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis accusamus, quo cumque blanditiis fugiat exercitationem quod provident iure, et at culpa voluptatum rerum, beatae ab harum dicta nam doloribus.<span className="harsh-tag">#lifestyle</span></p>
        </div>

        <div className="photo">
            <img src="/feed-1.jpg"/>
        </div>
        
        <div className="liked-by">
            <span><img src="/profile-10.jpg"/></span>
            <span><img src="/profile-4.jpg"/></span>
            <span><img src="/profile-15.jpg"/></span>
            <p>liked-by <b>Ernest Achiver</b> and <b>2,323 others</b></p>
        </div>

        <div className="reactions-date-container">
                <div className="left-reactions-container">
                    <div className="like-item-container">
                        <button>
                            <div className="heart-container" title="Like">
                                <input type="checkbox" className="checkbox" id="Give-It-An-Id"/>
                                <div className="svg-container">
                                    <svg strokeWidth="2" viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 17.5 1.917 a 6.4 6.4 0 0 0 -5.5 3.3 a 6.4 6.4 0 0 0 -5.5 -3.3 A 6.8 6.8 0 0 0 0 8.967 c 0 4.547 4.786 9.513 8.8 12.88 a 4.974 4.974 0 0 0 6.4 0 C 19.214 18.48 24 13.514 24 8.967 A 6.8 6.8 0 0 0 17.5 1.917 Z m -3.774 18.1 a 2.973 2.973 0 0 1 -3.701 -0.352 C 4.947 16.006 2 11.87 2.378 8.987 a 4.8 4.8 0 0 1 4.431 -4.702 A 4.8 4.8 0 0 1 10.695 8.917 a 1 1 0 0 0 2.643 0.035 a 4.8 4.8 0 0 1 4.602 -4.737 A 4.8 4.8 0 0 1 21.619 8.987 C 22 11.87 19.053 16.006 13.796 19.982 Z">
                                        </path>
                                    </svg>
                                    <svg strokeWidth="2" viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                        </path>
                                    </svg>
                                    <svg strokeWidth="2" className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="10,10 20,20"></polygon>
                                        <polygon points="10,50 20,50"></polygon>
                                        <polygon points="20,80 30,70"></polygon>
                                        <polygon points="90,10 80,20"></polygon>
                                        <polygon points="90,50 80,50"></polygon>
                                        <polygon points="80,80 70,70"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </button>

                        <span className="quantity-item">300</span>
                    </div>

                    <div className="shareto-item-container">
                        <button>
                            <svg 
                                viewBox="0 0 512 512" 
                                stroke="currentColor"
                                strokeWidth="1.7"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shareto-item-icon"
                            >
                                <path d="M 16.1 260.2 c -22.6 12.9 -20.5 47.3 3.6 57.3 L 160 376 V 479.3 c 0 18.1 14.6 32.7 32.7 32.7 c 9.7 0 18.9 -4.3 25.1 -11.8 l 62 -74.3 l 123.9 51.6 c 18.9 7.9 40.8 -4.5 43.9 -24.7 l 64 -416 c 1.9 -12.1 -3.4 -24.3 -13.5 -31.2 s -23.3 -7.5 -34 -1.4 l -448 256 z m 24.007 26.644 L 444.035 52.33 L 192.266 343.315 l 0.785 1.569 L 39.323 287.628 z M 413.446 435.866 L 227.561 362.139 L 475.408 60.174 L 414.231 436.65 z"></path>
                            </svg>
                        </button>

                        <span className="quantity-item">300</span>
                    </div>

                    <div className="comment-item-container">
                        <button>
                            <svg
                                className="comment-item-icon"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                >
                                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>

                                <path
                                    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
                                ></path>
                            </svg>
                        </button>

                        <span className="quantity-item">300</span>
                    </div>
                </div>

                <div className="right-reactions-container">
                    <div className="save-item-container">
                        <button>
                            <label className="save-draw">
                                <input type="checkbox"/>
                                <svg className="save-regular" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path></svg>
                                <svg className="save-solid" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
                            </label>
                        </button>
                    </div>

                    <div className="download-item-container">
                        <button>
                        <svg
                            className="download-item-icon"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                            </svg>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    )

}

export default FeedPictureItemElement;