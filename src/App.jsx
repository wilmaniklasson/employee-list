// import { useState } from 'react'
import './App.css'
import Employees from './components/Employees.jsx'
import AddEmployee from './components/AddEmployee.jsx'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div>
		<AddEmployee />
		<div className='our-team'>
			<Employees />
		</div>
		
		</div>
	)
}

export default App
