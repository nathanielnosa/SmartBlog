import { useState } from "react"
import Slider from "../components/slider/Slider"
import BlogList from "../components/BlogList/BlogList"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Learn HTML & CSS",
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odit, error qui est sit nobis maiores! At, corporis inventore?",
            author: 'Nathaniel',
            img: "https://extremehowto.com/wp-content/uploads/2003/03/91007933_s.jpg"
        },
        {
            id: 2,
            title: "Learn Javascript",
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odit, error qui est sit nobis maiores! At, corporis inventore?",
            author: 'Ncode',
            img: "https://extremehowto.com/wp-content/uploads/2003/03/91007933_s.jpg"

        },
        {
            id: 3,
            title: "Learn Git & Git Bash",
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odit, error qui est sit nobis maiores! At, corporis inventore?",
            author: 'DevNaija',
            img: "https://extremehowto.com/wp-content/uploads/2003/03/91007933_s.jpg"

        },
        {
            id: 4,
            title: "Learn React",
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur animi odit, error qui est sit nobis maiores! At, corporis inventore?",
            author: 'Nosa',
            img: "https://extremehowto.com/wp-content/uploads/2003/03/91007933_s.jpg"

        },
    ])

    const handleDelete = (id) => {
        const newPost = blogs.filter((blog) => blog.id !== id)
        setBlogs(newPost)
    }


    return (
        <div>
            <Slider />

            <div className="container py-4">
                <h4 className="text-center">Our Blog Post</h4>
                <BlogList blogs={blogs} onHandleDelete={handleDelete} />
            </div>



        </div>
    )
}

export default Home