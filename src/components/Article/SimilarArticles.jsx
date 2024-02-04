import React from 'react'
import CustomHr from '../CustomHr'
import SimilarArticlesList from './SimilarArticlesList'

const SimilarArticles = () => {
    return (
        <section className="similar">
            <div className="similar__title">
                <h2>Similar articles</h2>
                <CustomHr />
            </div>
            <SimilarArticlesList/>
        </section>
    )
}

export default SimilarArticles