import React from 'react';
import Article from '../components/Article'
const articles = [
    {
        id: 1,
        titel: "Czym jest teoria strun",
        author: 'Jan Nowak',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a vitae nostrum asperiores illo officiis nulla, libero saepe voluptatibus facilis nesciunt aliquid minima sapiente dolor obcaecati? Magnam molestias minima nemo?"
    },
    {
        id: 2,
        titel: "Czym jest paradoks fermiego",
        author: 'Jan Kowalski',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a vitae nostrum asperiores illo officiis nulla, libero saepe voluptatibus facilis nesciunt aliquid minima sapiente dolor obcaecati? Magnam molestias minima nemo?"
    },
    {
        id: 3,
        titel: "Odległość z Ziemi na Słońce",
        author: 'Jan Michalski',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis a vitae nostrum asperiores illo officiis nulla, libero saepe voluptatibus facilis nesciunt aliquid minima sapiente dolor obcaecati? Magnam molestias minima nemo?"
    },
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article  key={article.id} {...article}/>
    ) )
    return ( 
        <div className='home'>
            {artList}
        </div>
     );
}
 
export default HomePage;