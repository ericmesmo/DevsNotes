import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#333'
    },
    titleInput:{
        fontSize:20,
        fontWeight: "bold",
        padding: 15,
        color: '#FFF', 
        borderBottomWidth: 1,
        borderBottomColor: '#222',
        borderStyle: "solid"
    },
    bodyInput:{
        flex: 1, 
        padding: 15, 
        fontSize: 15, 
        color: '#FFF'
    },
    saveButton:{
        marginRight:15
    },
    saveButtonImage:{
        width:24,
        height:24
    },
    closeButton:{
        marginLeft:15
    },
    closeButtonImage:{
        width:20,
        height:20
    },
    deleteButton:{
        height:40,
        backgroundColor:'#FF3333',
        justifyContent:"center",
        alignItems:"center"
    },
    deleteButtonText:{
        fontSize: 14,
        color: '#FFF'
    }
});

export default styles;