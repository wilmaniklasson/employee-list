import { create } from 'zustand'
import AddEmployee from '../components/AddEmployee'

// set, create

const useStore = create(set => ({
	employees: [ ],

	setEmployees: newEmployees => set(state => ({
        employees: newEmployees
    })),

	addEmployee: employee => set(state => ({
		employees: [ ...state.employees, employee ]
	})),
    deliteEmployee: employee => set(state => ({
        employees: state.employees.filter(e => e.key !== employee.key)
    }))
}))

export { useStore }
