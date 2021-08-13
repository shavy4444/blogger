import React,{useReducer} from 'react';
import createDataContext from './createDataContext';


const blogReducer =(state,action) => {
switch(action.type){
    case 'delete_blog':
        return state.filter(blogPost => blogPost.id !== action.payload)
    case 'add_Blogpost':
        return [...state,{id : Math.floor(Math.random()*9999),title:`Blog Post #${state.length+1}`}];
        default:
        return state;
  }
};

  const deleteBlog=dispatch=>{
     return id  => {
         dispatch({type:'delete_blog',payload :id})
     };
  };

    const addBlogPost =dispatch => {
        return ()  =>{
       dispatch ({type :'add_Blogpost'});
        };
    };

 export const {Context,Provider}=createDataContext(
    blogReducer,
    {addBlogPost,deleteBlog},
    []);