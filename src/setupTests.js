import React, { useState } from 'react';

const DataGrid = () => {
  const [activeGrid, setActiveGrid] = useState('users');

  const handleGridChange = (grid) => {
    setActiveGrid(grid);
  };

  // Rest of the Data-Grid component code
  return (
    <div>
      <button onClick={() => handleGridChange('users')}>Users</button>
      <button onClick={() => handleGridChange('posts')}>Posts</button>
      <button onClick={() => handleGridChange('comments')}>Comments</button>

      {activeGrid === 'users' && <UserGrid />}
      {activeGrid === 'posts' && <PostGrid />}
      {activeGrid === 'comments' && <CommentGrid />}
    </div>
  );
};
