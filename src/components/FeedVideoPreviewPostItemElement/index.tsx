import { FunctionComponent } from "react";

export const FeedVideoPreviewPostItemElement: FunctionComponent = ()=>{

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
                    <small>Dubai, 15 MINUTES AGO</small>
                </div>
            </div>
            <span className="edit">
                <i className="uil uil-ellipsis-h"></i>
            </span>
        </div>

        <div className="video-background-blur-item">
            <video autoPlay loop muted className="background-blur-reproduction" src="/videoexample.mp4"></video>
            <div className="item-reproductor-container-video-act">
                <video autoPlay loop muted className="video-item-post" src="/videoexample.mp4"></video>

                <div className="liked-inf-container-absolute">
                    <div className="liked-by">
                        <span><img src="/profile-10.jpg"/></span>
                        <span><img src="/profile-4.jpg"/></span>
                        <span><img src="/profile-15.jpg"/></span>
                        <p>liked-by <b>Ernest Achiver</b> and <b>2,323 others</b></p>
                    </div>

                    <button className="button-view-more-post-description">
                        <b>
                            More...
                        </b>
                    </button>
                </div>
            </div>
        </div>
        
        <div className="reactions-date-container">
            <div className="reactions-container">

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
                        <svg className="comment-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                    </button>

                    <span className="quantity-item">300</span>
                </div>
            </div>

            <div className="date-container">
                <span className="date-item">
                    25 minutes ago
                </span>
            </div>
        </div>
    </div>
    )
}

export default FeedVideoPreviewPostItemElement;