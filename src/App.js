import React, { Component } from 'react';
import './App.css';
import PhotosPage from './PhotosPage';
import PhotosPageNoCTA from './PhotosPageNoCTA';

class App extends Component {
  state = {
    currentPage: 'photos-with-cta'
  }

  switchPage = (page) => {
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        {currentPage === 'photos-with-cta' && <PhotosPage />}
        {currentPage === 'photos-no-cta' && <PhotosPageNoCTA />}
        
        {/* Simple navigation for demo purposes */}
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 3000,
          background: 'white',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          gap: '10px'
        }}>
          <button 
            onClick={() => this.switchPage('photos-with-cta')}
            style={{
              padding: '8px 16px',
              background: currentPage === 'photos-with-cta' ? '#3b82f6' : '#e5e7eb',
              color: currentPage === 'photos-with-cta' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            With CTA
          </button>
          <button 
            onClick={() => this.switchPage('photos-no-cta')}
            style={{
              padding: '8px 16px',
              background: currentPage === 'photos-no-cta' ? '#3b82f6' : '#e5e7eb',
              color: currentPage === 'photos-no-cta' ? 'white' : '#374151',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Without CTA
          </button>
        </div>
      </div>
    );
  }
}

export default App;


