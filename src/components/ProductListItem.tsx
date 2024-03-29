import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Link, useSegments } from 'expo-router';

const ProductListItem = ({product}) =>{
  const segments = useSegments();
  return(
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image 
      source={{uri:product.image}} 
      style={styles.image}
      resizeMode='contain'
      />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:10,
    borderRadius:20,
    flex:1,
    maxWidth:"50%"
  },

  image:{
    width: "100%",
    aspectRatio:1

  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:10
  },
  price:{
    color:Colors.light.tint,
    fontWeight:"bold"
  }
  
});
