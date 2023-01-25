import React from "react";
import { Component } from "react";
import './Gallery.css';

class Gallery extends Component {

    render(){
        return(
            <div>
                {
                    this.props.items.map((item,index) => {
                      let {title,imageLinks ,infoLinks} = item.volumeInfo;
                      return(
                        <a
                         key={index}
                         className="book"
                         href="infoLink"
                         target= "_blank"
                         rel="noopener">
                          
                            <img src= {undefined !== imageLinks ? imageLinks.thumbnail:""}
                            alt = {`Pictured : The Cover Of The Book Is ${title}.`}
                            className = "bookCover"/>
                            
                            <header className="bookTitle">{title}</header>
                        </a>
                      )
                    })
                }
            </div>
        )
    }
}
export default Gallery;