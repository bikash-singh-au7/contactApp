import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import { Card, FAB } from 'react-native-paper'

function Home(props) {
    const [user, setUser] = useState([
        { id: "1", name: "Bikash Singh", designation: "Web Developer", salary: "4lpa", img: "https://bit.ly/3aRADfg" },
        { id: "2", name: "Akash Bansal", designation: "Android Developer", salary: "4lpa", img: "https://bit.ly/3u8ihhw" },
        { id: "3", name: "Tannu Singh", designation: "Web Designer", salary: "4lpa", img: "https://bit.ly/3nyKtaW" },
        { id: "4", name: "Nisha Singh", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3u7Ahsn" },
        { id: "5", name: "Guriya", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3xxLEfr" },
        { id: "6", name: "Akash Bansal", designation: "Android Developer", salary: "4lpa", img: "https://bit.ly/3u8ihhw" },
        { id: "7", name: "Tannu Singh", designation: "Web Designer", salary: "4lpa", img: "https://bit.ly/3nyKtaW" },
        { id: "8", name: "Nisha Singh", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3u7Ahsn" },
        { id: "9", name: "Guriya", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3xxLEfr" },
        { id: "10", name: "Akash Bansal", designation: "Android Developer", salary: "4lpa", img: "https://bit.ly/3u8ihhw" },
        { id: "11", name: "Tannu Singh", designation: "Web Designer", salary: "4lpa", img: "https://bit.ly/3nyKtaW" },
        { id: "12", name: "Nisha Singh", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3u7Ahsn" },
        { id: "13", name: "Guriya", designation: "Content Writer", salary: "4lpa", img: "https://bit.ly/3xxLEfr" },
    ])

    // Return Function
    return (
        <View>
            <FlatList
                data={user}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.card} onPress={() => props.navigation.navigate("Profile")}>
                            <View style={styles.cardBody}>
                                <Image
                                    style={styles.imgIcon}
                                    source={{ uri: item.img }}
                                />
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={{ ...styles.text, fontWeight: "bold" }}> {item.name} </Text>
                                    <Text style={{ ...styles.text, fontSize: 14 }}> {item.designation} </Text>
                                </View>
                            </View>
                        </Card>
                    )
                }}
                keyExtractor={item => item.id}
            />
            <FAB
                style={styles.fab}
                small={0}
                theme={{ colors: { accent: '#1e90ff', } }}
                icon="plus"
                onPress={() => props.navigation.navigate("Create")}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        padding: 5,
    },
    cardBody: {
        flexDirection: "row",
    },
    text: {
        marginLeft: 10,
        padding: 0,
        fontSize: 18,
    },
    imgIcon: {
        height: 50,
        width: 50,
        borderRadius: 25
    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
export default Home
