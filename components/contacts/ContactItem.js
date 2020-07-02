import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ContactItem = (props) => {
    return (
        <View style={styles.contactContainer}>
            <Text style={styles.name}>{props.name}</Text>
            {props.fav ? 
                <FontAwesome5 name={'star'} solid style={styles.icon} onPress={props.changeFavourite} /> : 
                <FontAwesome5 name={'star'} light style={styles.icon} onPress={props.changeFavourite} /> }
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: 'red',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5        
    },
    name: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 13
    },
    icon: {
        fontSize: 18
    }
})

export default ContactItem
