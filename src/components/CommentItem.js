import React from 'react'


import styles from './styles.module.css'

function CommentItem({ item, index }) {

  return (
    <li className={styles.chatItem} style={{color: commentStyleBg(index), background: commentStyleText(index)} }>{item.comments}</li>
  )
}

function commentStyleBg(index){
   if(index % 2 === 0){
    return "#DD5E89" 
   }else{
    return "#F7BB97"
   }
   
}

function commentStyleText(index){
    if(index % 2 === 0){
        return "#F7BB97"
    }else{
        return "#DD5E89"
    }
}


export default CommentItem