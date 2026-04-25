# How to Fix Memory Leaks in React Applications

Source ID: src-2026-04-12-032
Canonical URL: https://www.freecodecamp.org/news/fix-memory-leaks-in-react-apps
Resource Type: article
Host: www.freecodecamp.org
Mention Count: 1
Original URLs: https://www.freecodecamp.org/news/fix-memory-leaks-in-react-apps/

## Mention Context
- 9/26/25, 5:18 PM: https://www.freecodecamp.org/news/fix-memory-leaks-in-react-apps/

## Page Description
Have you ever noticed your React application getting slower the longer you use it? This could be a result of memory leaks. Memory leaks are a common performance issue in React applications. They can slow down your application, crash your browser, and...

## Captured Text Excerpt
How to Fix Memory Leaks in React Applications
Menu
Forum
Curriculum
Donate
September 24, 2025
#React
How to Fix Memory Leaks in React Applications
Olaleye Blessing
Have you ever noticed your React application getting slower the longer you use it? This could be a result of memory leaks. Memory leaks are a common performance issue in React applications. They can slow down your application, crash your browser, and frustrate users.
In this tutorial, you’ll learn what causes memory leaks and how to fix them.
Table Of Contents
Prerequisites
What Are Memory Leaks in React?
When Does A Component Unmount?
Common Causes Of Memory Leaks And How To Fix Them
Event Listeners
Timers
Subscriptions
Async Operations
Conclusion
Prerequisites
Before you move on, make sure you have:
Basic knowledge of JavaScript, React, and React hooks
Understanding of event handling, timers, and asynchronous calls
A React development setup.
If you don’t have a React development setup, you can head over to the memory-leak repo . Run the commands below to set it up:
# clone the repo
git clone <https://github.com/Olaleye-Blessing/freecodecamp-fix-memory-leak.git>
# navigate to the folder
cd freecodecamp-fix-memory-leak.git
# install the packages
pnpm install
# start development
pnpm dev
What Are Memory Leaks in React?
In JavaScript, memory leaks happen when an application allocates memory but fails to release it. This occurs even after the memory is no longer needed.
In React, memory leaks happen when a component creates resources but does not remove them when it unmounts. These resources can be event listeners, timers, or subscriptions.
As a user stays longer in the application, these unreleased resources accumulate. This accumulation causes the application to consume more RAM. This will eventually lead to several problems:
A slow application
The browser crashing
A poor user experience
For example, a component might create a “resize” event listener when it mounts, but forgets to remove it when it unmounts. This builds up memory as the user stays longer in the application and resizes the screen.
When Does A Component Unmount?
A component unmounts when it no longer exists in the DOM. This can happen if:
A user navigates away from the page.
<Routes>
<Route path= "/posts" element={<Posts />} />
<Route path= "/dashboard" element={<Dashboard />} />
</Routes>
The dashboard component will unmount immediately when a user navigates from /dashboard to any other route in the application.
A component is conditionally rendered.
function App ( ) {
const [show, setShow] = useState( true );
return <div>{show && <Component />}</div>;
<Component /> will unmount when show becomes false.
A component key changes.
function App ( ) {
const [key, setKey] = useState( Date .now());
return (
<>
<button onClick={ () => setKey( Date .now())}>Change Key</button>
<Form key={key} />
</>
);
The <Form /> component will unmount every time the key changes. Also note that a new <Form /> component will mount each time the key changes.
Common Causes Of Memory Leaks And How To Fix Them
As said earlier, there will be a memory leak when resources are not removed after a component unmounts. React useEffect allows you to return a function that will be called when a component unmounts.
useEffect( () => {
return () => {
// code to remove resources
};
}, []);
You can clean any created resources in this returned function. We will go through how to clean up some of these resources.
Event Listeners
Event listeners persist if they are not removed after a component unmounts. Look at the code below:
import { useEffect, useState } from "react" ;
const EventListener = () => {
const [windowWidth, setWindowWidth] = useState( 0 );
useEffect( () => {
function handleResize ( ) {
const width = window .innerWidth;
console .log( "__ Resizing Event Listerner __" , width);
setWindowWidth(width);
window .addEventListener( "resize" , handleResize);
}, []);
return <div>Width is: {windowWidth}</div>;
};
export default EventListener;
We do not remove the resize event listener on unmount, so every mount adds a new listener. This failure to clean up leads to a memory leak.
As shown in the GIF above, we log the width in the console every time we resize the window’s width. We still log the same information after component unmounts. Also, when we check the “Event Listeners” tab, the number of listeners keeps increasing by 2 instead of being just 1 each time we remount the component.
We see two listeners when the component mounts because React uses StrictMode in development. This helps to see side effects in the development mode. The same reason the listeners increase by 2 any time we mount the component.
To fix this memory leak, we need to remove the event listener in our cleanup function.
useEffect( () => {
// previous code
return () => {
window .removeEventListener( "resize" , handleResize);
};
}, []);
The cleanup function runs when the component unmounts. This, in turn, removes our event listener and prevents a memor
