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
                    <h3>
                        <b>
                            Lana Rose
                        </b>
                    </h3>
                    <small>Dubai, 15 MINUTES AGO</small>
                </div>
            </div>
            <span className="edit">
                <i className="uil uil-ellipsis-h"></i>
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
                <div className="like-item-container">
                    <button>
                        <div className="heart-container" title="Like">
                            <input type="checkbox" className="checkbox" id="Give-It-An-Id"/>
                            <div className="svg-container">
                                <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                    </path>
                                </svg>
                                <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                    </path>
                                </svg>
                                <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
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

                <div className="save-item-container">
                    <button>
                        <label className="save-draw">
                            <input type="checkbox"/>
                            <svg className="save-regular" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path></svg>
                            <svg className="save-solid" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
                        </label>
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

                <div className="shareto-item-container">
                    <button>
                        <svg 
                        viewBox="0 0 512 512" 
                        className="shareto-item-icon"
                        >
                            <path
                            d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                            ></path>
                        </svg>
                    </button>

                    <span className="quantity-item">300</span>
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

                    <span className="quantity-item">300</span>
                </div>
        </div>
    </div>
    )

}

export default FeedPictureItemElement;