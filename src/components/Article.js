import React from 'react';
const Article = ({titel, author, text}) => {
    const styles = {
        marginTop: '40px'
    }
    return ( 
        <article style={styles}>
            <h1 style={{
                marginBottom: 15,
                textTransform: 'uppercase'
            }}>{titel}</h1>
            <span style={{
                display: "block",
                marginBottom: 15,
                fontSize: 15,
            }}>{author}</span>
            <p style = {{
                fontSize: 17,
            }}>{text}</p>
        </article>
     );
}
 
export default Article;