# React Native FlatList: Duplicate Keys in keyExtractor

This repository demonstrates a common error in React Native's FlatList component when using the `keyExtractor` prop with non-unique keys.  The error results in unpredictable rendering and update behavior.

## Problem
The `keyExtractor` function in `FlatList` requires unique keys for each item in the data array.  If duplicate keys are provided, React Native will produce warnings and might not render or update the list correctly.

## Solution
Ensure that the keys provided to `keyExtractor` are unique.  The best practice is to use a unique identifier for each item in your data, such as a UUID or a database ID. 

## How to reproduce
1. Clone this repository
2. Run `npm install`
3. Run `npx react-native run-android` or `npx react-native run-ios`
4. Observe the warnings in the console and the erratic behavior of the FlatList.