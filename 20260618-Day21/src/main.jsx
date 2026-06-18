import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts from './Posts.jsx'
import App from './App.jsx'

// import 파일의 경로를 알려주는 것!
import App2 from './App2.jsx'

//메인아! 내가 Posts 태그를 만들었어
// 그것로 페이지 갈아 끼울께!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
