import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext'
import Button from './Button';
import Like from './Like';
import Makale from './Makale';
import Comments from './Comments';
import CommentsList from './CommentsList';
import { CommentProvider } from '../context/CommentsContext';
import background from '../assets/img/space.jpg'



function Container () {

    const {theme} = useContext(ThemeContext)


    return <div className={`arka ${theme === "dark" ? theme : ""}`}>
    <h1>
       <Makale/>     
    </h1>

    <hr/>
    <div className='resim' style={{background: `url(./${background})`}}>
    <Like/>
    <Button/>
    <CommentProvider>
        <Comments/>
        <CommentsList/>
    </CommentProvider>
    
    </div>
    </div>
}

export default Container;