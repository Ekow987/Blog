import React,{useState,useContext}from 'react';
import { Theme } from './ThemeProvider';
import {postArray} from './Posts';
import Post from './Post';
import Carousel from './Carousel';
import Card from './Card';
import Footer from './Footer';
import ImgCard from './ImgCard';
import Grid from './Grid';








function Home(props) {
    const currentTheme = useContext(Theme)[0];
    const[posts,setPosts]=useState(postArray);
    console.log(postArray);
    return (
        <div className={ `bg-${currentTheme}` }
        >
            

        {posts.map((post)=>{

         return <Post key={post.id} post={post}/>;
        })}
        <Carousel/>
        <Card/>
        <Footer/>
        <ImgCard/>
        <Grid/>
        
        </div>
    )
}

export default Home;
