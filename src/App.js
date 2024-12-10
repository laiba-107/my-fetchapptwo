import React, { useState } from 'react';
import FetchPostsByUser from './Components/DynamicDataFetch';
import PaginatedUsers from './Components/Paginateduser';
import SearchablePosts from './Components/SearchablePost';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'task1':
        return <FetchPostsByUser />;
      case 'task2':
        return <PaginatedUsers />;
      case 'task3':
        return <SearchablePosts />;
      default:
        return (
          <div className="container">
            <h1>Welcome to the Multi-Task App</h1>
            <p>Choose a task to get started:</p>
            <nav>
              <button onClick={() => setCurrentPage('task1')}>Task 1</button>
              <button onClick={() => setCurrentPage('task2')}>Task 2</button>
              <button onClick={() => setCurrentPage('task3')}>Task 3</button>
            </nav>
          </div>
        );
    }
  };

  return (
    <div>
      <header>Multi-Task App</header>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('task1')}>Task 1</button>
        <button onClick={() => setCurrentPage('task2')}>Task 2</button>
        <button onClick={() => setCurrentPage('task3')}>Task 3</button>
      </nav>
      <div className="container">{renderPage()}</div>
      {currentPage !== 'home' && (
        <div className="pagination-buttons">
          <button
            onClick={() => setCurrentPage((prev) => (prev === 'task1' ? 'home' : 'task1'))}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev === 'task1' ? 'task2' : prev === 'task2' ? 'task3' : 'home'
              )
            }
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
