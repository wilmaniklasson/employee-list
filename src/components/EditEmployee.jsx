
import React, { useState } from 'react'
import {  editEmployee, getEmployees } from '../data/crud'
import { useStore } from '../data/store.js'


const EditEmployee = ({ whenEditDone, employee }) => {

	const [isLoading, setIsLoading] = useState(false)
	const setEmployees = useStore(state => state.setEmployees)
	
	const [name, setName] = useState(employee.name);
	const [occupation, setOccupation] = useState(employee.occupation);

const handleSave = async () => {
    setIsLoading(true);
    const updatedEmployee = { name, occupation }; // Skapa ett objekt med den nya datan
    await editEmployee(employee.key, updatedEmployee);
    const updatedList = await getEmployees();
    setEmployees(updatedList);
    whenEditDone(); // Återgå till visningsläge
    
}

	return (
		<>
		<div className="constiner-change-Info">
		<section className="change-Info">
			<section className="name-change">
				<label>Name: </label>
				<input type="text" value={name} onChange={e => setName(e.target.value)} />
			</section>
			<section className="occ-change">
				<label>Occupation: </label>
				<input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} />
			</section>
		</section>
		<button disabled={isLoading} onClick={handleSave} className="save-btn">Save</button>

		</div>
		
		</>
	)
}

export default EditEmployee