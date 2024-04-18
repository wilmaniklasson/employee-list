import {  deleteEmployee, getEmployees } from '../data/crud'
import { useStore } from '../data/store.js'
import { useState } from 'react'
import EditEmployee from './EditEmployee'

const ViewEmployee = ({ employee }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const setEmployees = useStore(state => state.setEmployees)
        const handleDelete = async () => {
        setIsLoading(true)
		await deleteEmployee(employee.key)
		const employeesFromDb = await getEmployees()
		setEmployees(employeesFromDb)
		setIsLoading(false)
        }

        

	return (
		<section className="row border-bottom alternate">
			{isEditing ? (
				<EditEmployee  employee={employee} whenEditDone={() => setIsEditing(false)} />
			) : (
				<>
                <div className="flex-grow"> {employee.name} works as {employee.occupation}. </div>
                <button className='edit-btn' onClick={() => setIsEditing(true)}>Edit</button>
                <button disabled={isLoading} onClick={handleDelete} className="delete-btn"> Delete </button>
                </>
			)}
			
            
		</section>
	)
}

export default ViewEmployee


