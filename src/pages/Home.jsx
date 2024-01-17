import { useEffect, useState } from "react"
import Slider from "../components/slider/Slider"
import BlogList from "../components/BlogList/BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
        const newPost = blogs.filter((blog) => blog.id !== id)
        setBlogs(newPost)
    }

    useEffect(() => {
        fetch("http://localhost:5050/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(err => ('Error in endpoint'))
    }, [])


    return (
        <div>
            <Slider />

            <div className="container py-4">
                <h4 className="text-center">Our Blog Post</h4>
                {blogs && <BlogList blogs={blogs} onHandleDelete={handleDelete} />}
            </div>



        </div>
    )
}

export default Home