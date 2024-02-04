import React from "react";
import Banner from "../Banner";
import AsideAd from "../AsideAd";
import SimilarArticles from "./SimilarArticles";

const ArticleItem = () => {
    return (
        <article className="article__wrapper">
            <div className="article">
                <Banner title="Lorem ipsum is simply dummy" />

                <div className="article__main">
                    <div className="article__main-text">
                        <p className="article__main-text-path">
                            Home &gt; Lorem ipsum is &gt;{" "}
                            <strong>Lorem ipsum is simply dummy</strong>
                        </p>
                        <h2 className="article__main-text-title">
                            Lorem Ipsum is simply dummy
                        </h2>
                        <p className="article__main-text-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <SimilarArticles />
                    </div>

                    <div className="article__main-ad">
                        <AsideAd />
                    </div>

                </div>
            </div>
        </article>
    );
};

export default ArticleItem;
