import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addEmployee, getEmployees } from '../data/crud.js'

const AddEmployee = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [occupation, setOccupation] = useState('')
	const setEmployees = useStore(state => state.setEmployees)

	const handleSubmit = async (event) => {
		// skapa ett objekt för ny employee
		// lägg till i databasen
		// hämta listan med anställda igen

        setIsLoading(true)
		event.preventDefault()
		const newEmployee = { name: name, occupation: occupation }
		// TODO: meddela användaren att vi väntar på databasen - visa spinner t.ex.
		try {
			await addEmployee(newEmployee)
			setName('')
			setOccupation('')
			setEmployees(await getEmployees())
		} catch {
			// TODO: visa felmeddelande för användaren

		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section>
			<form className="form">
			<h3> Register a new employee </h3>
			<section className="column">
				<label> Name </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> Occupation </label>
				<input type="text"
					value={occupation}
					onChange={e => setOccupation(e.target.value)}
					/>
			</section>

			<button
				disabled={isLoading}
				onClick={handleSubmit} type="submit" 
				className='submit-btn'> Register </button>
			</form>
		</section>
	)
}

export default AddEmployee
