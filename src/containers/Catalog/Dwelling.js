import React from "react";
import CardItem from "components/CardItem/CardItem"

const Dwelling = ({ searchResults }) => {

    const results = searchResults.map(post => <CardItem key={post.id} post={post} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <main>{content}</main>
    )
}
export default Dwelling