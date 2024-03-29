import React from "react";
import gameLogo from "../assets/game_logo.svg";
import rating from "../assets/rating.png";
import RatingBar from "../ui/RatingBar/RatingBar";

const Banner = ({ title }) => {
    return (
        <section className="banner__wrapper">
            <div className="banner">
                <div className="banner__info">
                    <div className="banner__info-image">
                        <img src={gameLogo} alt="game_logo" />
                    </div>
                    <div className="banner__info-text">
                        <h2>{title}</h2>
                        <div className="links">
                            <a href="#a">
                                <svg
                                    width="11.000000"
                                    height="12.994873"
                                    viewBox="0 0 11 12.9949"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id=""
                                        d="M3.85156 2.76855C3.6875 2.76855 3.55469 2.62793 3.55469 2.46387C3.55469 2.2998 3.6875 2.15918 3.85156 2.15918C4.02344 2.15918 4.15625 2.2998 4.15625 2.46387C4.15625 2.62793 4.02344 2.76855 3.85156 2.76855ZM7.14844 2.76855C6.97656 2.76855 6.84375 2.62793 6.84375 2.46387C6.84375 2.2998 6.97656 2.15918 7.14844 2.15918C7.3125 2.15918 7.44531 2.2998 7.44531 2.46387C7.44531 2.62793 7.3125 2.76855 7.14844 2.76855ZM0.804688 4.20581C0.359375 4.20581 0 4.56519 0 5.00269L0 8.36206C0 8.80737 0.359375 9.16675 0.804688 9.16675C1.25 9.16675 1.60156 8.80737 1.60156 8.36206L1.60156 5.00269C1.60156 4.56519 1.24219 4.20581 0.804688 4.20581ZM9.08594 4.35425L1.91406 4.35425L1.91406 9.55737C1.91406 10.0339 2.29688 10.4167 2.77344 10.4167L3.35156 10.4167L3.35938 12.1902C3.35938 12.6355 3.71875 12.9949 4.15625 12.9949C4.60156 12.9949 4.96094 12.6355 4.96094 12.1902L4.96094 10.4167L6.03906 10.4167L6.03906 12.1902C6.03906 12.6355 6.39844 12.9949 6.84375 12.9949C7.28906 12.9949 7.64844 12.6355 7.64844 12.1902L7.64844 10.4167L8.23438 10.4167C8.70312 10.4167 9.08594 10.0339 9.08594 9.55737L9.08594 4.35425ZM7.27344 1.19043L7.82812 0.166992C7.85938 0.112305 7.84375 0.0419922 7.78906 0.0107422C7.73438 -0.0126953 7.66406 0.00292969 7.63281 0.0576172L7.07031 1.08887C6.59375 0.87793 6.0625 0.760742 5.5 0.760742C4.9375 0.760742 4.40625 0.87793 3.92969 1.08887L3.36719 0.0576172C3.33594 0.00292969 3.26562 -0.0126953 3.21094 0.0107422C3.15625 0.0419922 3.14062 0.112305 3.17188 0.166992L3.72656 1.19043C2.625 1.75293 1.88281 2.83105 1.88281 4.073L9.10938 4.073C9.10938 2.83105 8.36719 1.75293 7.27344 1.19043ZM11 5.00269C11 4.55737 10.6406 4.20581 10.1953 4.20581C9.75781 4.20581 9.39844 4.55737 9.39844 5.00269L9.39844 8.36206C9.39844 8.80737 9.75781 9.16675 10.1953 9.16675C10.6406 9.16675 11 8.80737 11 8.36206L11 5.00269Z"
                                        fill="#FFFFFF"
                                        fillOpacity="1.000000"
                                        fillRule="nonzero"
                                    />
                                </svg>
                                Android
                            </a>
                            <a href="#a">
                                <svg
                                    width="10.882812"
                                    height="13.000000"
                                    viewBox="0 0 10.8828 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id=""
                                        d="M10.8828 9.49219C10.4219 9.35156 10.0078 9.02344 9.64844 8.50781C9.28906 7.99219 9.10938 7.40625 9.10938 6.76562C9.10938 6.17188 9.28125 5.63281 9.61719 5.14844C9.80469 4.875 10.1016 4.57031 10.5078 4.22656C10.2422 3.89844 9.96875 3.63281 9.69531 3.44531C9.21094 3.10938 8.65625 2.9375 8.03125 2.9375C7.64844 2.9375 7.19531 3.03125 6.67969 3.20312C6.16406 3.38281 5.78906 3.46875 5.5625 3.46875C5.38281 3.46875 5.02344 3.39062 4.48438 3.23438C3.9375 3.07812 3.48438 3 3.10156 3C2.20312 3 1.46875 3.375 0.882812 4.125C0.296875 4.88281 0 5.85156 0 7.04688C0 8.32812 0.390625 9.63281 1.14844 10.9766C1.92188 12.3203 2.69531 13 3.5 13C3.75781 13 4.10156 12.9141 4.53125 12.7344C4.95312 12.5625 5.32812 12.4766 5.64062 12.4766C5.96094 12.4766 6.35938 12.5547 6.82031 12.7266C7.28906 12.8906 7.64844 12.9766 7.91406 12.9766C8.57812 12.9766 9.25 12.4688 9.92188 11.4453C10.375 10.7656 10.6875 10.1094 10.8828 9.49219ZM7.94531 0.328125C7.94531 0.273438 7.9375 0.226562 7.9375 0.171875C7.92969 0.125 7.91406 0.0703125 7.89844 0C6.99219 0.210938 6.33594 0.59375 5.94531 1.15625C5.55469 1.71875 5.35156 2.39062 5.33594 3.16406C5.70312 3.13281 5.96875 3.08594 6.14844 3.03125C6.42969 2.9375 6.71094 2.75 6.99219 2.46875C7.32031 2.14062 7.5625 1.78125 7.71875 1.39062C7.86719 1.00781 7.94531 0.648438 7.94531 0.328125Z"
                                        fill="#FFFFFF"
                                        fillOpacity="1.000000"
                                        fillRule="nonzero"
                                    />
                                </svg>
                                iOS
                            </a>
                            <a href="#a">
                                <svg
                                    width="16.000000"
                                    height="14.769287"
                                    viewBox="0 0 16 14.7693"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink"
                                >
                                    <desc>Created with Pixso.</desc>
                                    <defs />
                                    <path
                                        id="Vector"
                                        d="M8 10.4617C7.82715 10.4617 7.68262 10.4006 7.56738 10.2791L3.25977 5.97119C3.06055 5.7854 3.01611 5.56104 3.125 5.2981C3.23389 5.04834 3.42285 4.92334 3.69238 4.92334L6.15381 4.92334L6.15381 0.615234C6.15381 0.44873 6.21484 0.304688 6.33643 0.182617C6.4585 0.0610352 6.60254 0 6.76904 0L9.23096 0C9.39746 0 9.5415 0.0610352 9.66357 0.182617C9.78516 0.304688 9.84619 0.44873 9.84619 0.615234L9.84619 4.92334L12.3076 4.92334C12.5771 4.92334 12.7661 5.04834 12.875 5.2981C12.9839 5.56104 12.939 5.7854 12.7402 5.97119L8.43262 10.2791C8.31738 10.4006 8.17334 10.4617 8 10.4617ZM15.0771 9.84644C15.3335 9.84644 15.5513 9.93628 15.731 10.1157C15.9102 10.2952 16 10.5129 16 10.7695L16 13.8464C16 14.1028 15.9102 14.3208 15.731 14.5002C15.5513 14.6797 15.3335 14.7693 15.0771 14.7693L0.922852 14.7693C0.666504 14.7693 0.44873 14.6797 0.269043 14.5002C0.0898438 14.3208 0 14.1028 0 13.8464L0 10.7695C0 10.5129 0.0898438 10.2952 0.269043 10.1157C0.44873 9.93628 0.666504 9.84644 0.922852 9.84644L5.39404 9.84644L6.69238 11.1541C7.06396 11.5132 7.5 11.6924 8 11.6924C8.5 11.6924 8.93604 11.5129 9.30762 11.1541L10.6152 9.84644L15.0771 9.84644ZM11.6924 13.5386C11.8589 13.5386 12.0034 13.4778 12.125 13.356C12.2471 13.2341 12.3076 13.0898 12.3076 12.9233C12.3076 12.7568 12.2471 12.6123 12.125 12.4907C12.0034 12.3689 11.8589 12.3079 11.6924 12.3079C11.5254 12.3079 11.3813 12.3689 11.2598 12.4907C11.1377 12.6123 11.0771 12.7568 11.0771 12.9233C11.0771 13.0901 11.1377 13.2341 11.2598 13.356C11.3813 13.4778 11.5254 13.5386 11.6924 13.5386ZM14.1538 13.5386C14.3203 13.5386 14.4648 13.4778 14.5864 13.356C14.7085 13.2341 14.7695 13.0898 14.7695 12.9233C14.7695 12.7568 14.7085 12.6123 14.5864 12.4907C14.4648 12.3689 14.3203 12.3079 14.1538 12.3079C13.9873 12.3079 13.8428 12.3689 13.7212 12.4907C13.5996 12.6123 13.5386 12.7568 13.5386 12.9233C13.5386 13.0901 13.5996 13.2341 13.7212 13.356C13.8428 13.4778 13.9873 13.5386 14.1538 13.5386Z"
                                        fill="#FFFFFF"
                                        fillOpacity="1.000000"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                Download on PC
                            </a>
                        </div>
                    </div>
                </div>

                <div className="banner__rating">
                    <div className="banner__rating-image">
                        <img src={rating} alt="rating" />
                    </div>
                    <div className="banner__rating-info">
                        <p className="title">Players</p>
                        <p className="votes">12 votes</p>
                        <p className="rating">
                            Your rating: <span>5.2</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom__banner">
                {/* Не понимаю, что именно тут должно быть (жанры или ещё что-то), поэтому пока что как заглушку сделал так. Если бы с АПИ приходило что-то, то нужно использовать map для вывода. */}
                <p>Lorem ipsum is simply dummy | item | item | item | item</p>
                <RatingBar rating={5.2}/>
            </div>
        </section>
    );
};

export default Banner;
