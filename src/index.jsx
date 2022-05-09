import { createRoot } from 'react-dom/client'

function App() {
    return (
        <div>Hello from React</div>
    )
}

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<App/>)
