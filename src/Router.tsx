import { Route, Routes } from 'react-router-dom'
import { Post } from './pages/Post'
import { Posts } from './pages/Posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  )
}
