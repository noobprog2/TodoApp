import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoList from "./TodoList";
import ToDoCompleted from "./TodoCompleted";
import Home from "./Home";
import LeftTodo from "./LeftTodo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabRoute = () => {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "TODO") {
            iconName = "home";
            
          } else if (route.name === "TODO-LIST") {
            iconName = "list";
          } else if (route.name === "ToDoCompleted") {
            iconName = "done";
          } 
          else if (route.name === "LeftTodo") {
            iconName = "pending";
          } 

          return <MaterialIcons name={iconName} size={40} color={color} />;
        },
    
        
        inactiveTintColor: 'gray', 
        tabBarStyle: {
          height:60,
          paddingBottom:10,
          backgroundColor: 'white', 
          borderTopWidth: 0, 
          borderTopColor: 'gray',
           
          
        },
        labelStyle: {
          fontSize: 24, 
          fontWeight: 'bold', 
        },
      })}
    
    >
      <Tab.Screen name="TODO" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="TODO-LIST" component={TodoList} options={{headerShown:false,}} />
      <Tab.Screen name="ToDoCompleted" component={ToDoCompleted} options={{ headerShown: false }}
      // initialParams={{
      //   completedTasks: []
      // }}
      />
        <Tab.Screen name="LeftTodo" component={LeftTodo} options={{headerShown:false}} />

      
    </Tab.Navigator>
    
  );
};

export default TabRoute;


