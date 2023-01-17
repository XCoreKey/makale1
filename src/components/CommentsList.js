import React from 'react'

import styles from './styles.module.css'
import { useComment } from '../context/CommentsContext'

import CommentItem from './CommentItem'

function CommentsList() {
    const {comments} = useComment([])


    return (
        <div className={styles.chatlist}>
           <ul>
            {
                [...comments].reverse().map((item, key) => { return <CommentItem key={key} index={key} item={item}/>})
            }
           </ul>
        </div>
    )
}

export default CommentsList