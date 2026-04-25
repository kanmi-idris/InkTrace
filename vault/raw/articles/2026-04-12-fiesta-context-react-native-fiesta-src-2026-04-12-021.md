# Fiesta Context | React Native Fiesta 🎉

Source ID: src-2026-04-12-021
Canonical URL: https://mateoguzmana.github.io/react-native-fiesta/docs/fiesta-context
Resource Type: documentation
Host: mateoguzmana.github.io
Mention Count: 2
Original URLs: https://mateoguzmana.github.io/react-native-fiesta/docs/fiesta-context

## Mention Context
- 3/18/25, 7:01 AM: https://mateoguzmana.github.io/react-native-fiesta/docs/fiesta-context
- 6/23/25, 2:47 AM: https://mateoguzmana.github.io/react-native-fiesta/docs/fiesta-context

## Page Description
With the Fiesta context you can execute animations from any component inside your application just by using the useFiesta hook.

## Captured Text Excerpt
Fiesta Context | React Native Fiesta 🎉
Skip to main content
React Native Fiesta Docs
GitHub
Search
Getting Started
Components
Fiesta Context
Troubleshooting
Fiesta Context
On this page
Fiesta Context
With the Fiesta context you can execute animations from any component inside your application just by using the useFiesta hook.
Configuration ​
Firstable, you have to set up the Fiesta provider wrapping your application so you can use the context anywhere inside your app.
Notice that you will need to import the font and pass it as a prop to the provider if you want to use the emojis .
import React from 'react' ;
import { SafeAreaView , StyleSheet } from 'react-native' ;
import { FiestaProvider } from 'react-native-fiesta' ;
import { useFont } from '@shopify/react-native-skia' ;
import { Examples } from './components/Examples' ;
function App ( ) {
// optional, only needed if you want to use the emojis
const font = useFont ( require ( './fonts/OpenMoji-Color.ttf' ) , 30 ) ;
if ( ! font ) return null ;
return (
< SafeAreaView style = { styles . container } >
< FiestaProvider font = { font } >
< Examples / >
< / FiestaProvider >
< / SafeAreaView >
) ;
const styles = StyleSheet . create ( {
container : {
flex : 1 ,
} ,
} ) ;
export default App ;
Usage ​
After finishing up the configuration , you can now use the useFiesta hook to invoke an animation inside any of your components.
import React from 'react' ;
import { Button } from 'react-native' ;
import { useFiesta , FiestaAnimations } from 'react-native-fiesta' ;
export function Example ( ) {
const { runFiestaAnimation } = useFiesta ( ) ;
const onPress = ( ) =>
runFiestaAnimation ( { animation : FiestaAnimations . Balloons } ) ;
return < Button onPress = { onPress } / > ;
You can use the FiestaAnimations enum to decide which animation to invoke.
Edit this page
Previous
Stars
Next
Troubleshooting
Configuration
Usage
Docs
Getting Started
Community
Stack Overflow
More
GitHub
Copyright © 2024 React Native Fiesta, Inc. Built with Docusaurus.
