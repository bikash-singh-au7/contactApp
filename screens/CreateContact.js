import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, LogBox } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../Config/FirebaseConfig';
import uuid from 'react-native-uuid';

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
    const [imageURI, setImageURI] = useState(null);
    const [IsStartUploading, setStartUploading] = useState(false);
    const [progress, setProgress] = useState(0)


    useEffect(() => {
        LogBox.ignoreLogs(['Setting a timer']);
    }, []);

    // URI To Blob
    const uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                // return the blob
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                // something went wrong
                reject(new Error('uriToBlob failed'));
            };
            // this helps us get a blob
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);

            xhr.send(null);
        });
    }

    // Upload 
    const uploadToFirebase = (blob) => {
        return new Promise((resolve, reject) => {
            const uniqueName = uuid.v4() + ".jpg";
            const metadata = {
                contentType: 'image/jpeg'
            }
            const uploadTask = storage.ref().child(`uploads/${uniqueName}`).put(blob, metadata);
            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(progress)
                    setProgress(progress);
                },
                error => {
                    console.log(error);
                    reject(error)
                },
                () => {
                    storage.ref("uploads")
                        .child(uniqueName)
                        .getDownloadURL()
                        .then(url => {
                            resolve(url);
                        });
                }
            );

        });


    }

    const pickImageFromCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }
        ImagePicker.launchCameraAsync({
            mediaTypes: "Images",
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        }).then((result) => {
            if (!result.cancelled) {
                // User picked an image
                const { height, width, type, uri } = result;
                setStartUploading(true);
                setImageURI(uri);
                return uriToBlob(uri);
            }

        }).then((blob) => {
            return uploadToFirebase(blob);
        }).then((snapshot) => {
            setStartUploading(false);
            console.log("File uploaded", snapshot);
        }).catch((error) => {
            throw error;
        });
    };



    const pickImageFromGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImageURI(result.uri);
        }
    };

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
                        {/* Camera Button */}
                        <Button theme={buttonTheme} style={styles.button} icon="camera" mode="contained" onPress={pickImageFromCamera}>
                            Camera
                        </Button>
                        {/* Gallery Button */}
                        <Button theme={buttonTheme} style={styles.button} icon="content-save" mode="contained" onPress={pickImageFromGallery}>
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
