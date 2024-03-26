import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import Card from "../../component/Card"
import { estilos } from "./styles"

export default function Home(){

    const lista = []//'teste', 'luany', 'bruno', 'chico', 'yasmmin', 'ket', 'lulis'

    return(
        <View style = {estilos.container}>
       
        <Text style= {estilos.titulo}>Pesquisa...</Text>
        <View style = {estilos.form}>
        <TouchableOpacity style = {estilos.botom}>
        <Text style = {estilos.text_img}>
                👸🏼
                </Text>
            </TouchableOpacity>
                <TextInput style = {estilos.input_text}/>
            <TouchableOpacity style = {estilos.botao}>
                <Text style = {estilos.texto_botao}>
                🔎
                </Text>
               </TouchableOpacity>
            </View>
        </View>
        )
    }
