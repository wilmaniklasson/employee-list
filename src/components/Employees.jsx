import { useState } from 'react'
import { getEmployees } from '../data/crud.js'
import { useStore } from '../data/store.js'
import ViewEmployee from './ViewEmployee.jsx'

const Employees = () => {
	const { employees, setEmployees } = useStore(state => ({
		employees: state.employees,
		setEmployees: state.setEmployees
	}))

	const handleGetEmployees = async () => {
		setEmployees(await getEmployees())
	}

	return (
		<div>
			<h2> Our team </h2>
			<div>
				<button onClick={handleGetEmployees}
				className='get-employees-btn'> Get employees </button>
			</div>
			{employees.map(e => (
				<ViewEmployee key={e.key} employee={e} />
			))}
		</div>
	)
}
export default Employees;
