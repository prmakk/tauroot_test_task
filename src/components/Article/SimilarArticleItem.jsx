import React from "react";
import articleImage from "../../assets/article_bg.png";

const SimilarArticleItem = () => {
    return (
        <div className="similar__article">
            <div className="similar__article-image">
                <img src={articleImage} alt="article_image" />
            </div>

            <div className="similar__article-info">
                <a href="#a">Lorem Ipsum is simply dummy</a>
                <div className="about">
                    <p className="about__user">
                        <svg
                            width="10.000000"
                            height="12.000000"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                        >
                            <desc>Created with Pixso.</desc>
                            <defs />
                            <path
                                id=""
                                d="M10 9.92969C10 7.875 9.49219 5.5 7.44531 5.5C6.8125 6.11719 5.95312 6.5 5 6.5C4.04688 6.5 3.1875 6.11719 2.55469 5.5C0.507812 5.5 0 7.875 0 9.92969C0 11.0703 0.75 12 1.66406 12L8.33594 12C9.25 12 10 11.0703 10 9.92969ZM8 3C8 1.34375 6.65625 0 5 0C3.34375 0 2 1.34375 2 3C2 4.65625 3.34375 6 5 6C6.65625 6 8 4.65625 8 3Z"
                                fill="#B3B3B1"
                                fillOpacity="1.000000"
                                fillRule="nonzero"
                            />
                        </svg>
                        ALCO
                    </p>
                    <p className="about__date">
                        <svg
                            width="12.000000"
                            height="12.000000"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                        >
                            <desc>Created with Pixso.</desc>
                            <defs />
                            <path
                                id=""
                                d="M7 3.25C7 3.10938 6.89062 3 6.75 3L6.25 3C6.10938 3 6 3.10938 6 3.25L6 6L4.25 6C4.10938 6 4 6.10938 4 6.25L4 6.75C4 6.89062 4.10938 7 4.25 7L6.75 7C6.89062 7 7 6.89062 7 6.75L7 3.25ZM10.25 6C10.25 8.34375 8.34375 10.25 6 10.25C3.65625 10.25 1.75 8.34375 1.75 6C1.75 3.65625 3.65625 1.75 6 1.75C8.34375 1.75 10.25 3.65625 10.25 6ZM12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 9.3125 2.6875 12 6 12C9.3125 12 12 9.3125 12 6Z"
                                fill="#B3B3B1"
                                fillOpacity="1.000000"
                                fillRule="nonzero"
                            />
                        </svg>
                        26 janvier 2023
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimilarArticleItem;
