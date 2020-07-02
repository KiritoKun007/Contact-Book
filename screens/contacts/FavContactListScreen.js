import React from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../../components/contacts/ContactItem'

const FavContactListScreen = () => {
    const friendsStars = useSelector(state => state.contacts.favouriteContacts)

    const dispatch = useDispatch()

    return (
        <FlatList 
            data={friendsStars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <ContactItem 
                    name={item.contactName}
                    fav={item.favourite}
                    changeFavourite={() => dispatch({
                        type: 'FAVOURITE_STAR',
                        id: item.id
                    })} />
            )} />
    )
}

export default FavContactListScreen
