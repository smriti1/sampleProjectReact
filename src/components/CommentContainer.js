import React from 'react'


const commentData = [
    {
        name: "Smriti1",
        text: "lorem ipsum",
        replies: [{
            name: "Smriti replies1",
            text: "lorem ipsum replies",
        },
        {
            name: "Smriti replies11",
            text: "lorem ipsum replies",
        },
        {
            name: "Smriti replies111",
            text: "lorem ipsum replies",
        }
    ]
    },
    {
        name: "Smriti2",
        text: "lorem ipsum",
        replies: [{
            name: "Smriti replies2",
            text: "lorem ipsum replies",
        }]
    },
    {
        name: "Smriti3",
        text: "lorem ipsum",
        replies: [{
            name: "Smriti replies3",
            text: "lorem ipsum replies",
        },
    {
            name: "Smriti replies33",
            text: "lorem ipsum replies",
        }]
    },
    {
        name: "Smriti4",
        text: "lorem ipsum",
        replies: []
    }
]

const Comments = ({data}) => {
    const {name, text} = data
return (
    <div className='flex shadow-sm py-2 px-5'>
<img
          className="h-6"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        ></img>
        <div>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
)
}
const CommentsList = ({ comments = [] }) => {
  return comments.map((comment, index) => (
    <div key={index} className='py-2 px-4'>
      <Comments data={comment} />

      {comment.replies?.length > 0 && (
        <div className="pl-5 border-l-2 bg-gray-100">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};
export const CommentContainer = () => {
  return (
    <div>
        
        <h1>Comments:</h1>
        <CommentsList comments={commentData}/>
        </div>
  )
}
