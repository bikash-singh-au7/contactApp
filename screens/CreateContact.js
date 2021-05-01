import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper'

const CreateContact = () => {
    // Create State
    const initialState = "";
    const [name, setName] = useState(initialState);
    const [mobile, setMobile] = useState(initialState);
    const [email, setEmail] = useState(initialState);
    const [salary, setSalary] = useState(initialState);
    const [designation, setDesignation] = useState(initialState);
    const [img, setImg] = useState(initialState);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            {/* Name */}
            <TextInput
                label="Name"
                value={name}
                mode={"flat"}
                underlineColor={"transparent"}
                theme={theme}
                style={styles.textInput}
                onChangeText={text => setName(text)}
            />


            {/* Email */}
            <TextInput
                label="Email"
                value={email}
                mode={"flat"}
                underlineColor={"transparent"}
                theme={theme}
                style={styles.textInput}
                onChangeText={text => setEmail(text)}
            />

            {/* Mobile */}
            <TextInput
                label="Mobile"
                value={mobile}
                mode={"flat"}
                underlineColor={"transparent"}
                theme={theme}
                style={styles.textInput}
                onChangeText={text => setMobile(text)}
            />

            {/* Salary */}
            <TextInput
                label="Salary"
                value={salary}
                mode={"flat"}
                underlineColor={"transparent"}
                theme={theme}
                style={styles.textInput}
                onChangeText={text => setSalary(text)}
            />

            {/* Mobile */}
            <TextInput
                label="Designation"
                value={designation}
                mode={"flat"}
                underlineColor={"transparent"}
                theme={theme}
                style={styles.textInput}
                onChangeText={text => setDesignation(text)}
            />

            <View>
                {/* Modal Triggered Button */}
                <Button theme={buttonTheme} style={styles.button} icon="upload" mode="contained" onPress={() => setModalVisible(true)}>
                    Upload
                </Button>

                {/* Save Button */}
                <Button theme={buttonTheme} style={styles.button} icon="content-save" mode="contained" onPress={() => setModalVisible(true)}>
                    Save
                </Button>
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        {/* Save Button */}
                        <Button theme={buttonTheme} style={styles.button} icon="camera" mode="contained" onPress={() => setModalVisible(true)}>
                            Camera
                        </Button>
                        {/* Save Button */}
                        <Button theme={buttonTheme} style={styles.button} icon="content-save" mode="contained" onPress={() => setModalVisible(true)}>
                            Gallery
                        </Button>
                    </View>

                    {/* Save Button */}
                    <Button theme={buttonTheme} style={styles.button} icon="cancel" mode="contained" onPress={() => setModalVisible(!modalVisible)}>
                        Cancel
                    </Button>
                </View>
            </Modal>

        </View>
    )
}

const theme = { colors: { primary: "#2f3542" } }
const buttonTheme = { colors: { primary: "#1e90ff" } }

const styles = StyleSheet.create({
    textInput: {
        margin: 5,
        padding: 0,
        backgroundColor: "#fff",
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomEndRadius: 10,
    },
    button: {
        margin: 5,
    },
    modalView: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: 10
    }
})

export default CreateContact
