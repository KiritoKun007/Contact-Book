import { REHYDRATE } from 'redux-persist'

const initialState = {
    contacts: null,
    favouriteContacts: null,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS': 

            if(!state.contacts) {
                for (let contact in action.contacts ) {
                    contact.favourite = false
                } 
    
                return {
                    ...state,
                    contacts: action.contacts
                }
            }

            return state

        case 'FAVOURITE_STAR': 
            let newContacts = [...state.contacts]
            let index = newContacts.findIndex(contact => contact.recordID === action.id)
            newContacts[index].favourite = !newContacts[index].favourite

            let favoutiteStars = newContacts.filter(contact => contact.favourite)

            return {
                ...state,
                contacts: newContacts,
                favouriteContacts: favoutiteStars
            }

        case 'DENIED_ACCESS': 
            return {
                ...state,
                message: action.message
            }

        default:
            return state
    }
}