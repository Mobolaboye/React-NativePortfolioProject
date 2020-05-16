import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import RecipeScreen from '../Screens/RecipeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
function MainComponent() { 
    const Tab = createBottomTabNavigator();
        return (
            <NavigationContainer style={{ backgroundColor: '#605F60' }}>
            <Tab.Navigator screenOptions={({ route })  => ({
                tabBarIcon: ({ color, size}) => {
                    let iconName;
     
                    if (route.name === 'Search') {
                        iconName = 'search' ;
                    } else if (route.name === 'Recipe') {
                        iconName = 'list' ;
                      }
                      return <Icon name = {iconName} size = {size} color = {color}/>;
                    },
              })}
                  tabBarOptions = {{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                }}>
              <Tab.Screen name="Search" component={HomeScreen} />
              <Tab.Screen name="Recipe" component={RecipeScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        );
      }
export default MainComponent;