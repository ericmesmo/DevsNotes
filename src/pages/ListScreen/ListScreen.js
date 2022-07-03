import React, { useLayoutEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import styles from './styles'
import NoteItem from '../../components/NoteItem/NoteItem'
import { useSelector } from 'react-redux'

export default () => {

    const navigation = useNavigation();
    const list = useSelector(state => state.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <TouchableHighlight style={styles.addButton} underlayColor="transparent" onPress = {() => navigation.navigate('EditNote')}>
                    <Image style={styles.addButtonImage} source={require('../../img/more.png')}/>
                </TouchableHighlight>
            )
        })
    }, []);

    const hendleNotePress = (index) => {
        navigation.navigate('EditNote', {
            key: index
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {list.length > 0 &&
                <FlatList
                    style={styles.notesList}
                    data={list}
                    renderItem={({item, index}) => (
                        <NoteItem
                            data={item}
                            index={index}
                            onPress={hendleNotePress}
                        />
                    )}
                    keyExtractor={(item, index)=>index.toString()}
                />
            }
            {list.length == 0 &&
                <View style={styles.noNotes}>
                    <Image style={styles.noNotesImage} source={require('../../img/note.png')} />
                    <Text style={styles.noNotesText} >Nenhuma anotação</Text>
                </View>
            }
        </SafeAreaView>
    )
}