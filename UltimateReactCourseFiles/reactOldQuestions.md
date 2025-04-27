

# 📚 React Interview Questions Backup (Sorted)

---

## 🧠 React Fundamentals
- What is the Virtual DOM, and how does it improve performance?
- What is the difference between real DOM and Virtual DOM?
- How does React reconcile the Virtual DOM with the real DOM?
- What is the difference between an element and a component?
- Why should component names start with a capital letter?
- Why use className instead of class in React?
- How do props differ from state in React?
- How do you indicate that props are read-only?
- Why should we not update the state directly?
- What is the purpose of callback function as an argument of setState()?
- Why do you need to pass a function to setState()?
- How do you update rendered elements?
- How do you prevent unnecessary updates using setState?
- How do you print falsy values in JSX?
- Do browsers understand JSX code?
- Should you learn ES6 before ReactJS?
- How does JSX prevent injection attacks?
- How do you access the imperative API of web components?
- Can you use web components inside React?

---

## 🧬 React History & Evolution
- What is the React Fiber architecture and how does it affect reconciliation?
- What is concurrent rendering?
- How does React handle concurrent rendering?
- What are the render, commit, and diff phases?
- What is the behavior of uncaught errors in React v16?
- How are error boundaries handled in React v15?

---

## 🚀 Advanced React Internals
- What is the diffing algorithm in React?
- What are the rules covered by the diffing algorithm?
- What is context?
- What is the Children prop?
- What is PropTypes?
- How do React PropTypes allow different types for one prop?

---

## 📦 Props, State & Context
- What are controlled and uncontrolled components?
- What is the purpose of the default value in Context?
- How do you use contextType?
- What is a consumer?
- How do you solve performance corner cases while using context?
- Give an example on how to use context.
- How to set state with a dynamic key name?
- What will happen if you use props in initial state?
- How do you pass arguments to an event handler?
- What is the purpose of keys in React?
- What are keyed Fragments?
- What are React Fragments?
- How to prevent component from rendering?

---

## 📦 Refs
- What is the use of refs?
- How to create refs?
- What are forward refs?
- What is the purpose of forward ref in HOCs?
- Is ref argument available for all function or class components?
- Why are String Refs legacy?
- Which is preferred option within callback refs and findDOMNode()?
- How to debug forwardRefs in DevTools?
- Why do you need additional care for component libraries while using forward refs?

---

## 📦 Hooks & State
- What are the rules of Hooks?
- What is useState, and why do we use array destructuring with it?
- How to listen to state changes?
- What is the impact of using indexes as keys?
- Explain useEffect vs useLayoutEffect.
- How do you handle side effects using Hooks?
- How do you fetch data with React Hooks?
- Do Hooks cover all use cases for classes?
- Do you need to rewrite all class components with Hooks?

---

## 📊 Performance Optimization
- What is the windowing technique (Virtualization)?
- How do you optimize performance using React Profiler?
- How would you optimize a React application?
- How do you detect and fix memory leaks?

---

## 🔁 Event Handling
- What is event bubbling and event capturing?
- What is event delegation?
- How to pass a parameter to an event handler or callback?
- How to bind methods or event handlers in JSX callbacks?
- How to programmatically trigger click event in React?

---

## 🧱 Code Architecture & Patterns
- What are render props?
- What is render hijacking in React?
- How to create props proxy for HOC component?
- How do you create HOC using render props?
- What are HOC factory implementations?
- What are the limitations with HOCs?
- How to prevent a function from being called multiple times?

---

## 🧩 Dynamic Imports & Code Splitting
- What are loadable components?
- What is the Suspense component?
- What is route-based code splitting?

---

## 🌍 ReactDOM & Server-Side Rendering
- What is the purpose of render method of react-dom?
- What is the difference between SSR and CSR?
- What is the purpose of renderToNodeStream method?
- What is the purpose of unmountComponentAtNode method?

---

## ⚙️ Lifecycle Methods & Class Components
- What are the different phases of component lifecycle?
- What are the lifecycle methods of React?
- What is the lifecycle methods order in mounting?
- What is the methods order when component re-rendered?
- What are the methods invoked during error handling?
- What is the purpose of getDerivedStateFromProps() lifecycle method?
- What is the purpose of getSnapshotBeforeUpdate() lifecycle method?
- What is the purpose of getDerivedStateFromError?
- What is the recommended ordering of methods in component class?
- What lifecycle methods are deprecated in React v16?
- Is it good to use setState() in componentWillMount() method?
- What will happen if you use setState in constructor?
- Why should not call setState in componentWillUnmount?

---

## 🧪 Testing in React
- How do you test custom hooks?
- What is snapshot testing?

---

## 🎯 Miscellaneous Topics
- What is Next.js and what are its features?
- What are popular React-specific linters?
- What is CRA and its benefits?
- What are the features of create-react-app?
- What are react scripts?
- How do you get redux scaffolding using create-react-app?
- How to use TypeScript in create-react-app application?
- How to use https instead of http in create-react-app?
- How to avoid using relative path imports in create-react-app?
- What are the approaches to include polyfills in create-react-app?

---

## 🔥 Real-world React Scenarios
- How would you migrate a class component to a functional component?
- How would you debug a React app that isn’t rendering correctly?
- How do you handle accessibility (a11y) in React apps?
- How do you handle error logging in production?
- How do you ensure code maintainability in large projects?

---

## 🧠 Behavioral & Problem Solving
- Describe a challenging bug you faced in React and how you solved it.
- How would you structure a React app for scalability?

---

## ✨ Bonus (Trickier Concepts)
- What are the trade-offs between Context API and Redux?
- What is the React.memo function?
- Do you need error boundaries for event handlers?
- What is the difference between try-catch block and error boundaries?

---

## ⚡ Additional Specific Questions
- How to create react class components without ES6?
- Is it possible to use React without JSX?
- What is the difference between constructor and getInitialState?
- What is the main purpose of constructor?
- Is it mandatory to define constructor for React component?
- What is the difference between super() and super(props) in React using ES6 classes?
- How do you define constants in React?
- What are the possible return types of render method?
- Can you force a component to re-render without calling setState?
- How do you update a component every second?
- What is the recommended way for naming components?
- How do you dispatch an action on load?
- How to use connect from React Redux?
- What is the purpose of @ symbol in the redux connect decorator?
- How do you create HOC using render props?
- Why is isMounted() an anti-pattern and what is the proper solution?
- What is state mutation and how to prevent it?
- What are the possible ways of updating objects in state?
- How to make an AJAX call and in which component lifecycle method?
- What would be the common mistake of a function being called every time a component renders?
- What is the required method to be defined for a class component?
- How do you say that state updates are merged?
- Why are inline ref callbacks or functions not recommended?
- How to include polyfills in your create-react-app?
- How to set state with a dynamic key name?

---



