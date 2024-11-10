import { useState } from 'react';
import './App.css';

const Bookshelf= ()=>{

    const [books, setBooks] = useState([
        { title: 'Be Water, My Friend: The Teachings of Bruce Lee', author: 'Shannon Lee' },
        { title: 'The Daily Laws: 366 Meditations ', author: 'Robert Greene' },
        { title: 'Nineteen Eighty-Four', author: 'George Orwell' },
        { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki ' },
        { title: 'Crime and Punishment', author: 'Dostoevsky' },
        { title: 'The Power of Now', author: 'Robert Kiyosaki' },

      ]);

      const [newBook, setNewBook] = useState({
        title: '',
        author: '',
      });


      const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewBook({ ...newBook, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
      };
    
      return (
        <div className="bookshelfDiv">
          <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  id='title'
                  name='title'
                  value={newBook.title}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Author:
                <input
                  id='author'
                  name='author'
                  value={newBook.author}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Add Book</button>
            </form>
          </div>
          <div className="bookCardsDiv">
            {books.map((book, index) => (
              <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
              </div>
            ))}
          </div>
        </div>
      );
    

};

export default Bookshelf ;


