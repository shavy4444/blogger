import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import {Provider} from "./src/context/blogcontext";
import ShowScreen from "./src/screens/ShowScreen";

const AuthStack = createStackNavigator();

export default ()=> (
<NavigationContainer>
    <Provider>
     <AuthStack.Navigator>
             <AuthStack.Screen name="HOME"component={IndexScreen}   options={{ headerShown: true }} />
              <AuthStack.Screen name="MY POST" component={ShowScreen}/>
         </AuthStack.Navigator>
     </Provider>
 </NavigationContainer>
);
