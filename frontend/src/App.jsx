import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8083/api'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/todos`)
      setTodos(response.data || [])
      setError('')
    } catch (err) {
      setError('Failed to fetch todos')
      console.error('Error fetching todos:', err)
    } finally {
      setLoading(false)
    }
  }

  // Load todos on component mount
  useEffect(() => {
    fetchTodos()
  }, [])

  // Add new todo
  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    try {
      setLoading(true)
      const response = await axios.post(`${API_BASE_URL}/todos`, {
        title: newTodo,
        description: ''
      })
      setTodos([response.data, ...todos])
      setNewTodo('')
      setError('')
    } catch (err) {
      setError('Failed to add todo')
      console.error('Error adding todo:', err)
    } finally {
      setLoading(false)
    }
  }

  // Toggle todo completion
  const toggleTodo = async (id) => {
    try {
      await axios.patch(`${API_BASE_URL}/todos/${id}`)
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ))
      setError('')
    } catch (err) {
      setError('Failed to update todo')
      console.error('Error toggling todo:', err)
    }
  }

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`)
      setTodos(todos.filter(todo => todo.id !== id))
      setError('')
    } catch (err) {
      setError('Failed to delete todo')
      console.error('Error deleting todo:', err)
    }
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <p className="text-blue-100">
            {completedCount} of {totalCount} completed
          </p>
        </div>

        {/* Add Todo Form */}
        <div className="p-6 border-b">
          <form onSubmit={addTodo} className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newTodo.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="p-6 text-center text-gray-500">
            Loading...
          </div>
        )}

        {/* Todo List */}
        <div className="divide-y divide-gray-200">
          {todos.length === 0 && !loading ? (
            <div className="p-6 text-center text-gray-500">
              No todos yet. Add one above!
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`p-4 flex items-center gap-3 hover:bg-gray-50 ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-2 py-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {todos.length > 0 && (
          <div className="px-6 py-4 bg-gray-50 text-sm text-gray-600">
            Total: {totalCount} todos • Completed: {completedCount} • Remaining: {totalCount - completedCount}
          </div>
        )}
      </div>
    </div>
  )
}

export default App