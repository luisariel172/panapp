import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Categories, Products, Product } from '../screens';
const stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <stack.Navigator initialRouteName="Categories">
      <stack.Screen name="Categories" component={Categories} />
      <stack.Screen name="Products" component={Products} />
      <stack.Screen name="Product" component={Product} />
    </stack.Navigator>
  );
};
export default ShopNavigator;
