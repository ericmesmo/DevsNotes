import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#333',
    },
    addButton:{
        marginRight: 15
    },
    addButtonImage:{
        width:24,
        height:24
    },
    notesList:{
        flex:1,
        width:'100%',
    },
    noNotes:{
        justifyContent:"center",
        alignItems:"center"
    },
    noNotesImage:{
        width:50,
        height:50,
        marginBottom:20
    },
    noNotesText:{
        fontSize: 17,
        color: '#FFF'
    }
});

export default styles;