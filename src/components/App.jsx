import {Hello} from './Hello.jsx';
import {
  View,
} from 'react-native';
import { SquareFeet2Acres } from './SquareFeet2Acres.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <snowremoval cm={0.5} />
      <snowremoval cm={1.5} />
      <SquareFeet2Acres squareFeet={43560} />
      <SquareFeet2Acres squareFeet={87120} />
      <SquareFeet2Acres squareFeet={130680} />
    </View>
  );
}

