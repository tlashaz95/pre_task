import React from 'react'

const Posts = (props) => {
    return (
      <div className="card">
        <div className="content">
          <div className="contentBx">
            <h3>
              {props.title}
              <p className="content-body">{props.body}</p>
            </h3>
          </div>
        </div>
      </div>
    );
}

export default Posts
