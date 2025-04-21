import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import List from "./component/list";
import Task from "./component/task";
import App from "./App";
import { Provider } from 'react-redux';
import Counter from './component/counter';
import AddTodo from './redux/app/addtodo';
import { store } from './redux/store/store';
import Accordion from './component/accordion';
import Booking from './component/stopwatch';
import Progressbar from './component/progressbar';
import FileExplorer from './component/fileexplorer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="blog" element={<List />}>
            <Route path=":id" element={<Task />} />
          </Route>
          <Route path='counter' element={<Counter />} />
          <Route path='add' element={<AddTodo />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='flight' element={<Booking />} />
          <Route path='bar' element={<Progressbar />} />
          <Route path='file' element={<FileExplorer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

