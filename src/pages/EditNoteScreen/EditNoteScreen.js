import React, { useState, useEffect, useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableHighlight } from "react-native";
import styles from './styles';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'
import { addNote, editNote, deleteNote } from "../../slices/NotesSlice";

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list)

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');

    useEffect(() => {
        if((route.params?.key != undefined) && (list[route.params.key])){
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova anotação' : 'Editar anotação',
            headerRight: () => (
                <TouchableHighlight style={styles.saveButton} underlayColor="transparent" onPress={hendleSaveButton}>
                    <Image style={styles.saveButtonImage} source={require('../../img/save.png')} />
                </TouchableHighlight>
            ),
            headerLeft: () => (
                <TouchableHighlight style={styles.closeButton} underlayColor="transparent" onPress={hendleCloseButton}>
                    <Image style={styles.closeButtonImage} source={require('../../img/close.png')} />
                </TouchableHighlight>
            )
        })
    }, [status, title, body]);

    const hendleSaveButton = () => {
        if((title != '') && (body != '')){
            if(status == 'edit'){
                dispatch(
                    editNote({
                        key: route.params.key,
                        title, 
                        body
                    })
                );
                navigation.goBack();
            } else {
                dispatch(
                    addNote({
                        title,
                        body
                    })
                );
                navigation.goBack();
            }
        } else {
            alert('Preencha o seu titulo e sua anotação')
        }
    };

    const hendleCloseButton = () => {
        navigation.goBack();
    };

    const hendleDeleteNoteButton = () => {
        dispatch(deleteNote(route.params.key));
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                value={title} 
                onChangeText={t => setTitle(t)}
                style={styles.titleInput}
                placeholder="Digite o titulo de sua anotação"
                placeholderTextColor="#CCC"
                autoCorrect={true}
            />
            <TextInput 
                value={body} 
                onChangeText={b => setBody(b)}
                style={styles.bodyInput}
                placeholder="Digite sua anotação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
                autoCorrect={true}
            />
            {status == 'edit' &&
                <TouchableHighlight style={styles.deleteButton} underlayColor="#FF0000" onPress={hendleDeleteNoteButton}>
                    <Text style={styles.deleteButtonText}>Excluir anotação</Text>
                </TouchableHighlight>
            }
        </SafeAreaView>
    )
}