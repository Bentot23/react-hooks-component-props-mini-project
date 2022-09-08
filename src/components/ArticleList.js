import Article from "./Article"


function ArticleList({ posts }) {
    const postsArr = posts.map(post => {
        return (
            <Article 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
            />
        )
    })
    console.log(posts)
    return (
        <main>
            {postsArr}
            {/* an array of Article components for each post passed down as a prop to ArticleList */}
            {/* make sure to assign a unique key prop to each Article */}
        </main>
    )
}
export default ArticleList