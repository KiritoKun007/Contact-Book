import { PermissionsAndroid } from "react-native"
import { getAll } from 'react-native-contacts'

export const getContacts = () => {
    return dispatch => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts',
                'buttonPositive': 'OK',
                'buttonNegative': 'CANCEL'
            }
        ).then(() => {
            getAll((err, contacts) => {
                if(err === 'denied') {
                    dispatch({
                        type: 'DENIED_ACCESS',
                        message: err
                    })
                } else {
                    dispatch({
                        type: 'GET_CONTACTS',
                        contacts: contacts
                    })
                }
            })
        })
    }
}