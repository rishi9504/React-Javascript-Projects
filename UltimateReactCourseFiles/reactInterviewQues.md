For a React developer interview, interview questions will focus on **core React concepts, performance optimization, state management, design patterns, and best practices**. Here’s a structured list:  

---

###  React Fundamentals
#### What are the differences between **functional** and **class components**?  
##### **Functional vs. Class Components in React**  

Both **functional** and **class** components are used to build React applications, but they have key differences in syntax, performance, and how they handle state and lifecycle methods.

---

##### **1. Syntax**  
- **Functional Components** are plain JavaScript functions that return JSX.  
- **Class Components** are ES6 classes that extend `React.Component`.  

##### **Example of a Functional Component**  
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

##### **Example of a Class Component**  
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

---

##### **2. State Management**  
- **Functional Components** (before hooks) were **stateless**. However, with **React Hooks**, they can now use `useState` for managing state.  
- **Class Components** use `this.state` to manage state and `this.setState` to update it.  

##### **Example of State in Functional Component (using Hooks)**  
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

##### **Example of State in Class Component**  
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

---

##### **3. Lifecycle Methods vs. Hooks**  
- **Class Components** use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.  
- **Functional Components** use `useEffect` to achieve the same functionality.  

##### **Example in Class Component**  
```jsx
class Example extends React.Component {
  componentDidMount() {
    console.log("Component mounted!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

##### **Same Example Using Functional Component with Hooks**  
```jsx
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  return <h1>Hello, World!</h1>;
}
```

---

##### **4. Performance**  
- **Functional Components** are **lighter and faster** because they don’t have the overhead of `this` and lifecycle methods.  
- **Class Components** can cause **performance issues** due to frequent re-renders and complex state handling.  

---

##### **5. Code Readability & Maintainability**  
- Functional components with hooks **reduce boilerplate code** and are easier to read.  
- Class components have more **verbose** code with `this` bindings and lifecycle methods.  

---

##### **6. "this" Keyword Usage**  
- **Functional Components** do not use `this`.  
- **Class Components** require `this` to access props and state, which can be confusing and require manual binding.  

```jsx
class Example extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Button clicked!");
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```
In functional components, you don't need `bind`:
```jsx
function Example() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

---

##### **7. Adoption & Future of React**  
- Functional components with hooks are now the **preferred way** to write React components.  
- React **recommends** using functional components whenever possible.  

---

##### **Summary Table**  

| Feature                | Functional Components | Class Components |
|------------------------|----------------------|-----------------|
| **Syntax**             | Simple functions     | ES6 classes     |
| **State**              | `useState` Hook      | `this.state`    |
| **Lifecycle Methods**  | `useEffect` Hook     | `componentDidMount`, etc. |
| **Performance**        | Faster, no `this` overhead | Slightly slower |
| **Readability**        | Cleaner, less boilerplate | More complex, requires `this` |
| **Recommended**        | ✅ Yes, preferred | ❌ No, legacy |


##
Functional components with hooks are the **modern standard** in React. They are easier to write, more readable, and perform better than class components. **Class components are still supported** but are considered outdated for new React projects.  

---
### **What are React Hooks?**  
React Hooks are **functions that let you use state and lifecycle features in functional components** without writing a class. They were introduced in **React 16.8** to simplify component logic, improve code reusability, and reduce the complexity of class components.

---

### **Why Were Hooks Introduced?**  
Before hooks, React used **class components** to manage state and lifecycle methods. However, class components had several problems:  

1. **Complexity in State & Lifecycle Management**  
   - Managing state in class components required using `this.state` and `this.setState`, which made code more **verbose and difficult to read**.  
   - Lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) often contained **unrelated logic**, making maintenance harder.  

2. **Code Reusability Issues**  
   - Logic reuse was difficult in class components.  
   - Higher-Order Components (HOCs) and Render Props were used but made code **nested and hard to follow**.  

3. **Verbose Code & `this` Binding**  
   - Class components required **binding `this` in constructors**, leading to **confusing and error-prone code**.  
   - Hooks eliminate the need for `this` altogether.  

4. **Better Performance & Optimization**  
   - Hooks allow optimizations like **memoization (`useMemo`, `useCallback`)**, which help prevent unnecessary re-renders.  

---

### **Common React Hooks**  
Here are the most important hooks in React:  

| Hook           | Purpose |
|---------------|---------|
| **`useState`**   | Adds state to functional components. |
| **`useEffect`**  | Handles side effects like API calls, event listeners, etc. |
| **`useContext`** | Accesses global state from `React.Context`. |
| **`useReducer`** | Alternative to `useState` for complex state logic. |
| **`useRef`**     | Accesses DOM elements or persists values without re-renders. |
| **`useMemo`**    | Optimizes performance by memoizing values. |
| **`useCallback`** | Memoizes functions to prevent unnecessary re-renders. |
| **`useLayoutEffect`** | Similar to `useEffect`, but runs synchronously after DOM updates. |

---

### **Examples of React Hooks**  

#### **1. `useState` – Managing State**  
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
✅ **Why use it?**  
- Replaces `this.state` in class components.  
- No need to write a constructor or use `this.setState`.

---

#### **2. `useEffect` – Handling Side Effects**  
```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means it runs only once

  return <p>Time: {seconds} seconds</p>;
}
```
✅ **Why use it?**  
- Replaces lifecycle methods:  
  - `componentDidMount` (initial mount)  
  - `componentDidUpdate` (updates)  
  - `componentWillUnmount` (cleanup)

---

#### **3. `useContext` – Managing Global State Without Redux**  
```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function ComponentA() {
  return (
    <UserContext.Provider value="John Doe">
      <ComponentB />
    </UserContext.Provider>
  );
}

function ComponentB() {
  const user = useContext(UserContext);
  return <p>User: {user}</p>;
}
```
✅ **Why use it?**  
- Replaces **prop drilling** when passing state through multiple components.  



React Hooks **simplify state management, lifecycle handling, and code reuse** in functional components. They remove the need for class components and make React applications **more readable, scalable, and maintainable**.  

 
---
### **How Does Reconciliation Work in React?**  

**Reconciliation** is the process by which React updates the **DOM efficiently** when the state of a component changes. Instead of updating the entire DOM, React uses a **Virtual DOM** to compare the changes and update only the necessary parts.

---

#### **1. Key Concepts in Reconciliation**  

#### **1.1 Virtual DOM**  
- React **maintains a lightweight copy of the real DOM** (Virtual DOM).  
- When a component's state or props change, React updates the Virtual DOM **first**, not the actual DOM.  

#### **1.2 Diffing Algorithm**  
- React **compares the new Virtual DOM with the previous Virtual DOM** using a **diffing algorithm**.  
- It identifies **what has changed** and updates only those parts in the real DOM.  
- This process makes React **fast and efficient** compared to directly modifying the DOM.  

#### **1.3 Commit Phase**  
- Once React identifies the changes, it **updates the real DOM** efficiently.  
- React applies updates **batch-wise** to improve performance.  

---

#### **2. Steps in the Reconciliation Process**  

#### **Step 1: Render Phase (Diffing)**  
1. **React updates the Virtual DOM** when state/props change.  
2. It compares the **new Virtual DOM** with the **previous Virtual DOM**.  
3. It finds the **minimum set of changes** needed.  

#### **Step 2: Commit Phase (Applying Changes to Real DOM)**  
1. React applies only the necessary updates to the real DOM.  
2. This process happens synchronously and efficiently.  
3. React runs lifecycle methods (`componentDidUpdate`, `useEffect`) after the update.  

---

#### **3. React’s Diffing Algorithm (How React Compares Changes)**  
React’s diffing algorithm follows two key rules:

#### **Rule 1: Different Elements → Destroy and Recreate**  
- If an element’s **type changes**, React **destroys the old element** and creates a new one.  

##### **Example:**  
```jsx
// Initial Render
<div>Hello</div>

// Update → Changing <div> to <p>
<p>Hello</p>  
```
✅ React **removes `<div>` and creates `<p>`** instead of modifying `<div>`.  

#### **Rule 2: Identical Elements → Reuse and Update**  
- If an element **type remains the same**, React updates only the changed properties.  

#### **Example:**  
```jsx
// Initial Render
<div className="old-class">Hello</div>

// Update → Changing class
<div className="new-class">Hello</div>
```
✅ React **keeps the same `<div>` and only updates the class**.

---

#### **4. Optimizing Reconciliation with Keys**  
When rendering lists, React **relies on `key` attributes** to track items efficiently.

#### **Bad Example (No Keys, Poor Performance)**  
```jsx
{items.map((item) => (
  <li>{item.name}</li> // No key → React may misidentify changes
))}
```
❌ React may **recreate elements incorrectly**, causing performance issues.  

#### **Good Example (Using Keys for Efficient Updates)**  
```jsx
{items.map((item) => (
  <li key={item.id}>{item.name}</li> // Unique key helps React track elements
))}
```
✅ Using `key` helps React **identify which items changed, added, or removed**, improving efficiency.  

---

#### **5. Performance Optimizations in Reconciliation**  

#### **1. Avoid Unnecessary Re-renders**  
- Use **React.memo** to prevent re-renders when props haven’t changed.  
```jsx
const MemoizedComponent = React.memo(MyComponent);
```

#### **2. Use `useMemo` and `useCallback`**  
- Memoize expensive calculations to prevent unnecessary recalculations.  
```jsx
const computedValue = useMemo(() => computeHeavyTask(data), [data]);
```

#### **3. Batch Updates**  
- React batches multiple state updates into one for better performance.  

```jsx
setCount(count + 1);
setName("John"); // Both updates batch together
```

---

 
- **Reconciliation is React’s process of updating the DOM efficiently** by comparing Virtual DOM changes.  
- React **minimizes updates** by using a **diffing algorithm** and **keys** for lists.  
- Optimizations like **React.memo, useMemo, and useCallback** help prevent unnecessary re-renders.  

### **React Fiber: How It Improves Reconciliation**  

**React Fiber** is React's new **reconciliation algorithm**, introduced in **React 16**, designed to make UI updates **faster, smoother, and more efficient**.  

Before Fiber, React used a **stack-based algorithm**, which was **synchronous and blocking**, making it inefficient for large applications. React Fiber solves this by making rendering **asynchronous and interruptible**.

---

##  Why Was React Fiber Introduced?

#### **Problems with the Old Reconciliation Algorithm (React 15 and Below)**  
- **Synchronous Rendering:**  
  - React processed updates **in one go**, blocking the main thread.  
  - A complex UI update could cause UI **freezes and slow interactions**.  

- **Inefficient Large Updates:**  
  - When a component updated, React **traversed the entire Virtual DOM tree**.  
  - This slowed performance, especially for **deeply nested components**.  

- **No Prioritization of Updates:**  
  - React **did not distinguish between important and less important updates**.  
  - A simple animation update could block critical UI updates.  

---

##  How Does React Fiber Work?

#### **Key Features of React Fiber:**  
1. **Asynchronous Rendering (Interruptible Updates)**  
   - React can now **pause, resume, or discard rendering work**, preventing UI freezes.  

2. **Task Prioritization**  
   - Fiber assigns different **priority levels** to updates (e.g., user interactions vs. background updates).  

3. **Concurrent Mode**  
   - Enables **smoother animations, non-blocking UI updates, and better responsiveness**.  

---

#### **3. How Fiber Improves Reconciliation**  

#### **Old Reconciliation (React 15 - Stack Reconciliation)**  
- React **recursively traversed** the Virtual DOM tree in one go.  
- If an update was large, it could cause **UI lag** (e.g., freezing animations).  
- Example:  
  - If React was updating 1000 elements, it had to finish all 1000 before responding to new user interactions.

#### **New Reconciliation (React 16+ - Fiber Reconciliation)**  
- React **breaks the rendering work into units (Fiber nodes)**.  
- These units can be **interrupted, paused, and resumed** when needed.  
- Example:  
  - React starts updating 1000 elements but **pauses after 100** if the user interacts, then resumes later.  

---

#### **4. Fiber’s Two-Phase Rendering Process**  

React Fiber splits rendering into two **phases**:  

#### **1️⃣ Render Phase (Work Preparation, Can Be Interrupted)**  
- React **creates Fiber nodes** and calculates updates.  
- This phase is **interruptible**—React can pause and handle high-priority updates first.  

#### **2️⃣ Commit Phase (DOM Updates, Cannot Be Interrupted)**  
- React applies the updates **to the real DOM**.  
- This phase is **synchronous** and must complete in one go.  

---

#### **5. Fiber and Update Prioritization**  

React Fiber **assigns priority levels** to different updates:  

| **Priority** | **Example** | **Behavior** |
|-------------|------------|--------------|
| **High (User Interaction)** | Button clicks, input typing | React processes these updates **immediately**. |
| **Medium (Animation, Transitions)** | Page transitions, animations | Processed after high-priority tasks but before background tasks. |
| **Low (Background Work)** | Data fetching, non-urgent updates | Can be postponed if needed. |

This ensures that **important updates (user interactions) are not blocked by less critical updates** (like background data fetching).  

---

#### **6. React Fiber and Concurrent Mode**  

**Concurrent Mode** (enabled by Fiber) allows React to **handle multiple tasks simultaneously**, leading to:  
✅ **Faster UI updates**  
✅ **Smoother animations**  
✅ **Better responsiveness under heavy load**  

Example of **Concurrent Mode**:  
```jsx
import { useState, useTransition } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    setCount(count + 1); // High-priority update
    startTransition(() => {
      // Low-priority update (background)
      console.log("Updating background data...");
    });
  };

  return <button onClick={handleClick}>Click Me {count}</button>;
}
```
✅ **High-priority update (`setCount`) happens first**  
✅ **Low-priority work (`startTransition`) runs in the background**  

---

#### **7. Summary: How Fiber Improves Reconciliation**  

| **Feature** | **React (Before Fiber)** | **React Fiber (16+)** |
|------------|--------------------|-----------------|
| **Rendering** | Synchronous (blocking) | Asynchronous (non-blocking) |
| **Interruptible?** | ❌ No | ✅ Yes |
| **Prioritization?** | ❌ No | ✅ Yes |
| **UI Freezes?** | ❌ Possible | ✅ Reduced |
| **Performance on Large Apps?** | ❌ Slower | ✅ Faster |

---


- **React Fiber makes reconciliation more efficient** by introducing **interruptible rendering and prioritization**.  
- It allows React to handle UI updates **without blocking user interactions**.  
- **Concurrent Mode (enabled by Fiber)** improves user experience by handling multiple tasks **simultaneously**.  

---

#### **What Are Keys in React and Why Are They Important?**  

#### **1. What Are Keys in React?**  
A **key** is a special attribute in React that helps **uniquely identify elements in a list**.  

When rendering a list of elements, React uses **keys to track changes efficiently** (additions, deletions, reordering).  

#### **2. Why Are Keys Important?**  
✅ **Helps React Identify Which Items Changed**  
✅ **Improves Performance by Avoiding Unnecessary Re-renders**  
✅ **Prevents UI Bugs When Reordering or Updating Lists**  

---

#### **3. Example: Why Keys Matter**  

#### **❌ Bad Example (Without Keys, Inefficient Rendering)**  
```jsx
const items = ["Apple", "Banana", "Cherry"];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li> // No key used (React may misidentify elements)
      ))}
    </ul>
  );
}
```
🔴 **Problems:**  
- React **doesn’t know which items changed**, so it **re-renders the entire list**.  
- Leads to **unnecessary updates** and poor performance.  

---

#### **✅ Good Example (Using Unique Keys, Efficient Rendering)**  
```jsx
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" }
];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li> // Unique key used
      ))}
    </ul>
  );
}
```
🟢 **Why is this better?**  
- React uses the `id` as a **unique identifier**.  
- If an item is added/removed, React **only updates the changed items**, not the entire list.  
- **Boosts performance** and prevents UI bugs.  

---

#### **4. React’s Key Reconciliation Process**  

1. **React Uses Keys to Compare Old and New Lists**  
   - It checks if an element **exists with the same key** in the previous and current list.  
2. **If a Key Matches, React Reuses the Element**  
   - Only updates **changed properties** instead of re-rendering everything.  
3. **If a Key is New, React Adds the Element**  
   - Efficiently **adds/removes elements** instead of recreating the entire list.  

---

#### **5. Common Mistakes When Using Keys**  

#### **❌ Mistake 1: Using Index as a Key**  
```jsx
{items.map((item, index) => (
  <li key={index}>{item.name}</li> // Bad: Key is not stable
))}
```
🔴 **Why is this bad?**  
- If the list order changes (e.g., sorting, inserting new items), React **misidentifies elements**.  
- Leads to **unintended UI bugs** (wrong elements updating incorrectly).  

#### **✅ Solution: Use a Unique ID Instead**  
```jsx
{items.map((item) => (
  <li key={item.id}>{item.name}</li> // Good: Unique and stable key
))}
```

---


✅ Always use a unique and stable identifier (e.g., database ID).  
✅ Avoid using array index as a key unless the list is static.  
✅ Use keys in lists of dynamic elements (e.g., `map()` loops).  
✅ Helps React efficiently track elements and minimize re-renders.  

---
## **What is the React Virtual DOM?**  
The **Virtual DOM (VDOM)** is a lightweight, in-memory representation of the **real DOM** in React. It helps React **optimize updates** by minimizing direct manipulations of the actual DOM, leading to **faster and more efficient rendering**.

---

## **How Does the Virtual DOM Work?**  

#### **1. Initial Rendering (First Paint)**  
- When a React component is rendered for the first time, React **creates a Virtual DOM tree** that mirrors the actual DOM.  

#### **2. State/Props Update (Reconciliation Process)**  
- When state or props change, React **creates a new Virtual DOM tree** instead of updating the real DOM directly.  
- React then compares the **new Virtual DOM with the previous Virtual DOM** using a **diffing algorithm**.  
- React determines **what has changed** and updates **only the necessary parts** of the real DOM.

#### **3. Efficient DOM Updates (Commit Phase)**  
- After identifying the differences, React **updates only the changed elements in the real DOM** instead of re-rendering the entire UI.  
- This **reduces expensive DOM manipulations** and improves performance.  

---

## **How the Virtual DOM Improves Performance**  

| **Feature** | **Without Virtual DOM** | **With Virtual DOM** |
|------------|-----------------|----------------|
| **DOM Updates** | Direct manipulation (slow) | Batch updates (fast) |
| **Performance** | Repaints entire UI on state change | Updates only changed elements |
| **Efficiency** | Multiple reflows and repaints | Minimizes reflows and repaints |
| **Rendering Speed** | Slower | Faster |

#### **Key Optimizations**  

#### ✅ **Minimizes Direct DOM Manipulation**  
- **Real DOM updates are slow** because browsers reflow and repaint elements.  
- The Virtual DOM **reduces unnecessary reflows** by batching updates efficiently.  

#### ✅ **Uses a Fast Diffing Algorithm**  
- React **compares the new and old Virtual DOM trees** to find minimal changes.  
- It **only updates the changed elements**, avoiding full re-renders.  

#### ✅ **Batch Updates for Better Performance**  
- React **groups multiple state updates** into a single update cycle, reducing redundant re-renders.  
- Example:  
  ```jsx
  setCount(count + 1);
  setName("John");
  ```
  ✅ React **batches both updates together** instead of updating twice.

---

#### **Example: Virtual DOM in Action**  

#### **Without Virtual DOM (Inefficient DOM Updates)**  
```jsx
document.getElementById("myDiv").innerHTML = "New Text"; // Direct DOM manipulation (slow)
```
❌ **Every update forces the browser to repaint and reflow the entire page.**

---

#### **With Virtual DOM (Efficient Updates in React)**  
```jsx
function App() {
  const [text, setText] = useState("Old Text");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("New Text")}>Update</button>
    </div>
  );
}
```
✅ **React updates only the `<p>` element instead of the entire page.**  

---

 
- The **Virtual DOM improves React's performance** by **minimizing real DOM updates**.  
- It **uses a diffing algorithm** to find changes and updates only the necessary elements.  
- React **batches updates** and optimizes re-renders, making UI updates **smooth and efficient**.  



---

###  Advanced React Concepts

### **How `useReducer` Differs from `useState` in React**  

Both `useReducer` and `useState` are React hooks used for **state management**, but they serve different purposes.  

| Feature | `useState` | `useReducer` |
|---------|-----------|--------------|
| **Use Case** | Simple state updates | Complex state logic |
| **State Type** | Usually a single value (string, number, boolean) | Can be an object with multiple properties |
| **Update Method** | Directly updates state (`setState`) | Uses a reducer function (`dispatch` + action) |
| **Best For** | Simple UI interactions | Complex state transitions, dependent updates |
| **Performance** | Re-renders on every state update | Optimized for batch updates |

---

## **1️⃣ `useState` - Best for Simple State Management**  
✅ Ideal for **simple values** (numbers, booleans, strings).  
✅ Updates **directly using `setState`**.  
✅ Easier to use and understand.  

### **Example: Using `useState` for a Counter**  
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
🟢 **Why use `useState` here?**  
- The state is a **single number** and easy to update.  
- **No complex logic**—just incrementing a value.  

---

## **2️⃣ `useReducer` - Best for Complex State Logic**  
✅ Ideal for **multiple related state values** (e.g., form inputs, multiple counters).  
✅ Uses a **reducer function** to manage updates.  
✅ Helps **maintain structured, predictable state changes**.  

### **Example: Using `useReducer` for a Counter**  
```jsx
import { useReducer } from "react";

// Reducer function (defines state updates)
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```
🟢 **Why use `useReducer` here?**  
- **Handles multiple state updates** (increment, decrement, reset).  
- **Uses actions** (`dispatch`) for better **state management structure**.  

---

## **3️⃣ When to Use `useReducer` Instead of `useState`**  

### **Use `useState` when:**  
✅ The state is **simple** (single value).  
✅ The state updates **independently**.  
✅ You don’t need to **manage multiple actions**.  

**Example:**  
✔️ **Toggling a modal (`true/false`)**  
✔️ **Managing a single input field (`text`)**  

---

### **Use `useReducer` when:**  
✅ The state is **complex** (e.g., objects, multiple properties).  
✅ Updates **depend on previous state**.  
✅ You need **centralized state logic** (similar to Redux).  

**Example:**  
✔️ **Managing a shopping cart (add/remove items, update quantity)**  
✔️ **Handling form inputs with multiple fields**  

---

## **4️⃣ Summary: Key Differences**  

| Feature | `useState` | `useReducer` |
|---------|-----------|--------------|
| **State Complexity** | Simple | Complex (object, multiple properties) |
| **Update Method** | Direct (`setState`) | Dispatch (`dispatch({ type })`) |
| **Performance** | Fine for small updates | More efficient for complex updates |
| **Code Structure** | Simple | Structured and scalable |


- Explain **React.memo** and when to use it.  
- What are **controlled and uncontrolled components** in React?  
- How would you **optimize performance** in a large-scale React application?  
- What is **React Fiber**, and how does it differ from the previous reconciliation algorithm?  
- How does **code-splitting** work in React, and why is it useful?  
- What is the difference between **useCallback** and **useMemo**?  

---

### **3. State Management & Context API**  
- When would you **use Context API** instead of Redux?  
- What are the benefits of **Redux Toolkit** over traditional Redux?  
- How does **Redux middleware** (e.g., Thunk, Saga) work?  
- How would you handle **async operations in Redux**?  
- What is **Recoil/Zustand**, and how does it compare to Redux?  
- How would you manage **global state** efficiently in a React app?  

---

### **4. Component Design & Best Practices**  
- How do you structure a **scalable React application**?  
- What is the **container-presentational pattern** in React?  
- What is **Higher-Order Component (HOC)**, and how does it work?  
- How do **Render Props** compare to HOCs?  
- What are **Portals in React**, and when would you use them?  

---

### **5. Performance Optimization**  
- How do you prevent **unnecessary re-renders** in React?  
- Explain **React Profiler** and how to use it.  
- How does **Lazy Loading** work in React?  
- What is the **difference between debounce and throttle** in event handling?  
- How do you optimize React applications for **SEO**?  

---

### **6. Testing in React**  
- How do you test a React component?  
- What are **Jest** and **React Testing Library**, and how do they differ?  
- How do you test **asynchronous operations** in React?  
- What is **shallow rendering**, and when would you use it?  

---

### **7. React with TypeScript**  
- How do you type **props and state** in React with TypeScript?  
- What are **React PropTypes**, and why is TypeScript preferred over them?  
- How do you create a **custom hook** with TypeScript?  

---

### **8. React with Backend Integration**  
- How do you handle **authentication in React**?  
- How do you optimize **API calls** in a React app?  
- What are **React Query and SWR**, and how do they compare?  
- How do you handle **WebSockets** in a React app?  

---

### **9. Real-World Scenario-Based Questions**  
- How would you handle **a slow React application** with too many re-renders?  
- How would you design a **dashboard with real-time updates**?  
- How do you manage a **large form with dynamic fields** in React?  

---

