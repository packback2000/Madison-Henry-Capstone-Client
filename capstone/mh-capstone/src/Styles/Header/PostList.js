import { Link } from "react-router-dom"

const PostList = ({list=[]}) => {
    return(
        <>
            {list.map((data,index) => {
                if(data) {
                    return (
                        <div key={data.post_id} className='search-post__links'>
                            <Link to={`/posts/${data.post_id}/comments`}><p className="searched-posts">{data.body}</p></Link>
                        </div>
                    )
                }
                return null
            })}
        </>
    )
}

export default PostList