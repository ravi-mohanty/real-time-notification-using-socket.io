import React from 'react'
import comment from '../../../public/comment.svg'
import heartFilled from '../../../public/heartFilled.svg'
import heart from '../../../public/heart.svg'
import message from '../../../public/message.svg'
import share from '../../../public/share.svg'
import info from '../../../public/info.svg'
import './card.css'





const Card = ({ post }) => {

  return (
    <div className="card">
      <div className='info'>
        <img src={post.userImg} alt="" className='userImg' />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className='postImg' />
      <div className='interaction'>
        <img src={heart} alt="" className='cardIcon' />
        <img src={share} alt="" className='cardIcon' />
        <img src={comment} alt="" className='cardIcon' />
        <img src={info} alt=""  className='cardIcon infoIcon' />

      </div>
    </div>
  )
}

export default Card
