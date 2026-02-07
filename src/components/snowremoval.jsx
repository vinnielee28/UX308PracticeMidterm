import { snowremoval } from "../snowremoval.js";
import {Text} from "react-native";
// input cm of snowfall

export function snowremoval({cm}){
    return(
        <Text>
            Snow removal of { cm } requires{ snowremoval (cm)}
        </Text>
    )
}