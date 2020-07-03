import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../../components/contacts/ContactItem'
import { getContacts } from '../../store/actions/contact'

const ContactListScreen = () => {
    const contacts = useSelector(state => state.contacts.contacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())
    }, [])

    let list = null

    if(contacts) {
        list = (
            <FlatList 
                data={contacts}
                keyExtractor={item => item.recordID}
                renderItem={({ item }) => (
                    <ContactItem 
                        name={item.displayName}
                        fav={item.favourite}
                        changeFavourite={() => dispatch({
                            type: 'FAVOURITE_STAR',
                            id: item.recordID
                        })} />
                )} />
        )
    }

    return list
}

export default ContactListScreen
