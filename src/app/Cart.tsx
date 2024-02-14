import{View, Text, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../Providers/CartProvider';

const CartScreen = ()=>{
    const {items} = useCart();

    return(
        <View>
            <Text>
                cart items length: {items.length}
            </Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default CartScreen;