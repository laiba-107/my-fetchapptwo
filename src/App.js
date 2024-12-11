import React, { useState } from 'react';
import FetchPostsByUser from './Components/DynamicDataFetch';
import PaginatedUsers from './Components/Paginateduser';
import SearchablePosts from './Components/SearchablePost';
import CachedFetch from './Components/CachedFetch';
import MasterDetail from './Components/MasterDetail';
import DebouncedSearch from './Components/DebouncedSearch';
import InfiniteScroll from './Components/InfiniteScroll';
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
      case 'task4':
        return <CachedFetch />;
      case 'task5':
        return <MasterDetail />;
      case 'task6':
        return <DebouncedSearch />;
      case 'task7':
        return <InfiniteScroll />;
      case 'task8':
        return <FetchPostsByUser />; // Placeholder for Task 8: Fetch Data and Cache Results
      case 'task9':
        return <PaginatedUsers />; // Placeholder for Task 9: Master-Detail View
      case 'task10':
        return <SearchablePosts />; // Placeholder for Task 10: Debounced Search with REST API
      default:
        return (
          <div className="container">
            <h1>Welcome to the Multi-Task App</h1>
            <p>Choose a task to get started:</p>
            <nav>
              <button onClick={() => setCurrentPage('task1')}>Task 1</button>
              <button onClick={() => setCurrentPage('task2')}>Task 2</button>
              <button onClick={() => setCurrentPage('task3')}>Task 3</button>
              <button onClick={() => setCurrentPage('task4')}>Task 4</button>
              <button onClick={() => setCurrentPage('task5')}>Task 5</button>
              <button onClick={() => setCurrentPage('task6')}>Task 6</button>
              <button onClick={() => setCurrentPage('task7')}>Task 7</button>
              <button onClick={() => setCurrentPage('task8')}>Task 8</button>
              <button onClick={() => setCurrentPage('task9')}>Task 9</button>
              <button onClick={() => setCurrentPage('task10')}>Task 10</button>
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
        <button onClick={() => setCurrentPage('task4')}>Task 4</button>
        <button onClick={() => setCurrentPage('task5')}>Task 5</button>
        <button onClick={() => setCurrentPage('task6')}>Task 6</button>
        <button onClick={() => setCurrentPage('task7')}>Task 7</button>
        <button onClick={() => setCurrentPage('task8')}>Task 8</button>
        <button onClick={() => setCurrentPage('task9')}>Task 9</button>
        <button onClick={() => setCurrentPage('task10')}>Task 10</button>
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
                prev === 'task1' ? 'task2' : prev === 'task2' ? 'task3' : prev === 'task3' ? 'task4' : prev === 'task4' ? 'task5' : prev === 'task5' ? 'task6' : prev === 'task6' ? 'task7' : prev === 'task7' ? 'task8' : prev === 'task8' ? 'task9' : prev === 'task9' ? 'task10' : 'home'
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
