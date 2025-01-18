import { useState } from 'react'
import './App.css'
import KanbanBoard from './components/KanbanBoard'


function App() {
  

  return (
    <>
      <div className='App'>
        <header className='App-header'></header>
          <h1>Customizable Kanban Board</h1>
      </div>
      <main>
        <KanbanBoard />
      </main>
    </>
  )
}

export default App
