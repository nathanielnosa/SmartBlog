
const BlogList = ({ blogs, onHandleDelete }) => {

  return (
    <>
      <div className="row" >
        {
          blogs.map(({ id, title, post, author, img }) => (
            <div key={id} className="col-md-3">
              <div className="card">
                <div className="card-img">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="card-header">{title}</div>
                <div className="card-body">
                  <p className="lead">{post}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  By: {author}
                  <button className="btn btn-info" onClick={() => onHandleDelete(id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>

  )
}

export default BlogList