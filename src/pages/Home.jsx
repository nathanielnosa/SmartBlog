import { useEffect, useState } from "react"
import Slider from "../components/slider/Slider"
import BlogList from "../components/BlogList/BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newPost = blogs.filter((blog) => blog.id !== id)
        setBlogs(newPost)
    }

    useEffect(() => {
        fetch("http://localhost:5050/blogs")
            .then(res => {
                if (res.ok) return res.json()
                throw Error('Data could not be fetched')
            })
            .then(data => {
                setTimeout(() => {
                    setBlogs(data)
                    setLoading(false)
                }, 3000);
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])


    return (
        <div>
            <Slider />

            <div className="container py-4">
                <h4 className="text-center">Our Blog Post</h4>
                {loading && (<div className="text-center"><div className="spinner-border" role="status">
                </div></div>)
                }
                {
                    error && (<div className="text-center text-danger">{error}</div>)
                }

                {blogs && <BlogList blogs={blogs} onHandleDelete={handleDelete} />}
            </div>



        </div>
    )
}

export default Home