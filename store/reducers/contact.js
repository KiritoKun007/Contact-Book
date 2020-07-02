import CONTACTS from "../../data/dummy-data";
import { REHYDRATE } from 'redux-persist'

const initialState = {
    contacts: CONTACTS,
    favouriteContacts: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FAVOURITE_STAR': 
            let newContacts = [...state.contacts]
            let index = newContacts.findIndex(contact => contact.id === action.id)
            newContacts[index].favourite = !newContacts[index].favourite

            let favoutiteStars = newContacts.filter(contact => contact.favourite)

            return {
                ...state,
                contacts: newContacts,
                favouriteContacts: favoutiteStars
            }

        default:
            return state
    }
}