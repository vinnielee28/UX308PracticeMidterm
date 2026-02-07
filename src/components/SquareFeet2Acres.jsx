import {
    Text,
    View,
} from 'react-native';
import { squarefeet2acres } from '../squarefeet2acres.js';

export function SquareFeet2Acres({ squareFeet }) {
    //processing
    let acre = squarefeet2acres(squareFeet);
    //output for acre
    return (
        <View>
            <Text>sqaurefeet2acres({squareFeet}) returned {acre}</Text>
        </View>
    );
}