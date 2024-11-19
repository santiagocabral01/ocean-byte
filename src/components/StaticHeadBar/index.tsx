import Image from "next/image";

export const StaticHeadBar = ()=>{

    return(
        <header className="header-static-constant">
            <div className="logo-img-container">
                <Image className="image-header-static" height={"200"} width={"200"} src={"/social-logo.png"} alt="ocean-logo" ></Image>
            </div>
            <div className="add-post-bars-menu-container">

                <button
                    title="Add New"
                    className="button-add-content"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        className="icon-add-content"
                    >
                        <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        strokeWidth="1.5"
                        ></path>
                        <path d="M8 12H16" strokeWidth="1.5"></path>
                        <path d="M12 16V8" strokeWidth="1.5"></path>
                    </svg>
                </button>

                <label className="hamburger-bars-menu">
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                    <path
                    className="line-bars-menu line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path className="line-bars-menu" d="M7 16 27 16"></path>
                </svg>
                </label>

            </div>
        </header>
    )
}

export default StaticHeadBar;