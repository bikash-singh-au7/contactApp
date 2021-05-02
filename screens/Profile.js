import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Title, Button } from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

const Profile = ({ route }) => {
    const { item } = route.params
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#1e90ff', '#0081ff']}
                style={styles.background}
            />
            {/* Profile Image */}
            <View style={{ alignItems: "center" }}>
                <Image style={styles.profileImage} source={{ uri: item.img }} />
            </View>

            {/* Personal Details */}
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Title> {item.name} </Title>
                <Text> {item.designation} </Text>
            </View>

            {/* Other Details */}
            <View style={{ padding: 4, marginTop: 20 }}>
                {/* Email */}
                <Card style={styles.card} onPress={() => Linking.openURL(`mailto:${item.email}`)}>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialIcons name="email" size={24} color="#1e90ff" />
                        <Text style={styles.text}> {item.email} </Text>
                    </View>
                </Card>

                {/* Mobile */}
                <Card style={styles.card} onPress={() => { Linking.openURL(`tel:${item.mobile}`); }}>
                    <View style={{ flexDirection: "row" }}>
                        <Feather name="phone" size={24} color="#1e90ff" />
                        <Text style={styles.text}>+91-{item.mobile}</Text>
                    </View>
                </Card>

                {/* Salary */}
                <Card style={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="inr" size={24} color="#1e90ff" />
                        <Text style={styles.text}> {item.salary} </Text>
                    </View>
                </Card>


                {/* Buttons */}
                <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 20 }}>
                    <Button theme={buttonTheme} style={styles.button} icon="account-edit" mode="contained" onPress={() => console.log("pressed")}>
                        Edit
                    </Button>

                    <Button theme={buttonTheme} style={styles.button} icon="delete" mode="contained" onPress={() => console.log("pressed")}>
                        Delete
                    </Button>
                </View>
            </View>

        </View>
    )
}
const buttonTheme = { colors: { primary: "#1e90ff" } }
const styles = StyleSheet.create({
    background: {
        height: "20%"
    },
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 150 / 2,
        marginTop: -50
    },
    card: {
        marginBottom: 10,
        padding: 14
    },
    text: {
        fontSize: 18,
        marginLeft: 10
    },
    button: {
        margin: 5,
    },
})
export default Profile
