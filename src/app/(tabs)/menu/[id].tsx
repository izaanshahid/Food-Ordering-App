import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import React, {useState} from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products'
import Button from '@/src/components/Button'
import { Link } from 'expo-router'
import { useCart } from '@/src/Providers/CartProvider'

const sizes = ["S", "M", "L", "XL"];


const ProductDetailsScreen = () =>{

const {id} = useLocalSearchParams();
const product = products[Number(id)-1]
const [selectedSize, setSelectedSize] = useState('M')
const {addItem} = useCart();
const router = useRouter();

const addToCart=()=>{
    if(!product){
        return;
    }
    addItem(product, selectedSize)
    router.push('/Cart')
}



if(!product){
    return(
        <Text>Product not found</Text> 
    )
}


    return(
        <View style={styles.container}>
            <Stack.Screen options={{title:product.name}}/>
            <Image source={{uri:product.image}} style={styles.image} resizeMode='contain'/>
            <Text style={{fontWeight:'600', marginTop:10}}>Select Size</Text>
            <View style={styles.sizes}>
            {sizes.map(size=>(
                <Pressable 
                onPress={()=>{
                    setSelectedSize(size)
                }}
                style={[styles.size,
                {backgroundColor:selectedSize===size?"gainsboro":'white'}
                ]} key={size}>
                <Text style={[styles.sizeText, {color:selectedSize===size?'black':'grey'}]}>{size}</Text>
                </Pressable>
            ))}
            </View>
            <Text style={styles.price}>${product.price}</Text>
            <Button onPress={addToCart} text='Add to cart'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:10
    },
    image:{
        width:"100%",
        aspectRatio:1,
    },
    price:{
        fontWeight:"bold",
        fontSize:18,
        marginTop:'auto'
    },
    sizes:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginVertical:10
    },
    size:{
        backgroundColor:'gainsboro',
        width:50,
        aspectRatio:1,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'

    },
    sizeText:{

    },


})


export default ProductDetailsScreen;