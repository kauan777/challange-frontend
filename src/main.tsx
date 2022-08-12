import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchContextProvider } from './contexts/SearchContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
)
