	What is React?

React is a **JavaScript library** used for building **user interfaces**, especially **single-page applications** where you need a fast, interactive experience.

Here’s a quick breakdown:

- **Created by:** Facebook (now Meta)
- **Main concept:** Build UI using **components** – small, reusable pieces of code that define how a part of the UI should look and behave.
- **Key features:**
  - **Declarative syntax:** You describe what the UI should look like, and React takes care of updating the DOM.
  - **Component-based:** Everything is a component—easy to reuse and maintain.
  - **Virtual DOM:** React creates a virtual representation of the UI in memory, and only updates the real DOM when necessary—making it fast.
  - **JSX:** Lets you write HTML-like code within JavaScript.

Example of a simple React component:
```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
```





	What is the history behind React’s evolution?

React has a pretty interesting backstory that traces back to Facebook’s challenges with building fast, maintainable user interfaces. Here's a quick timeline of its evolution:

---

### **2011: React is Born at Facebook**
- **Problem:** Facebook's UI was getting more complex, especially with things like the live news feed updates.
- **Solution:** **Jordan Walke**, a software engineer at Facebook, created a prototype library called *FaxJS* that later became React.
- First used internally on **Facebook’s Ads** dashboard, where performance was critical.

---

### **2013: Open Source Release**
- React was released as an open-source project at **JSConf US**.
- At first, it faced skepticism—mostly because of **JSX** (HTML in JavaScript), which was weird for the dev community back then.
- Over time, devs started to love its component model and Virtual DOM.

---

### **2015: React Native**
- Facebook released **React Native**, allowing devs to build native mobile apps using React concepts.
- Code could now be shared across web and mobile.

---

### **2016: React Fiber Project**
- React’s core was being rewritten as **React Fiber**, aiming for better performance and features like incremental rendering.
- It was a huge behind-the-scenes improvement that shipped in React **16** (2017).

---

### **2018: React Hooks**
- Introduced in **React 16.8**, **Hooks** like `useState` and `useEffect` let developers use state and lifecycle methods in functional components.
- Marked a big shift from class components to **function components**.

---

### **2020–2023: Concurrent Mode, Suspense, Server Components**
- Focus shifted toward performance, user experience, and server-side rendering:
  - **Concurrent Mode** (partial release)
  - **Suspense** for data fetching
  - **React Server Components** (still experimental)
- Huge push to improve SSR (Server Side Rendering) with **Next.js** becoming the go-to framework.

---

### **Today**
- React is maintained by Meta and powers a huge chunk of the web.
- It's used by companies like Instagram, Airbnb, Netflix, Uber, etc.
- Ecosystem includes tools like **Next.js**, **Vite**, **React Query**, etc.

---

3	What are the major features of React?
React packs a bunch of powerful features that make it a top choice for building modern UIs. Here are the **major features of React**:

---

### 1. **JSX (JavaScript XML)**
- Lets you write HTML-like code inside JavaScript.
- Improves readability and keeps UI and logic closely tied.

```jsx
const element = <h1>Hello, world!</h1>;
```

---

### 2. **Component-Based Architecture**
- UI is broken into **reusable**, **self-contained** components.
- Each component manages its own logic and rendering.

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

---

### 3. **Virtual DOM**
- React maintains a lightweight in-memory **virtual representation of the DOM**.
- When the state changes, it calculates the difference (diffing) and updates only what's needed.

---

### 4. **Declarative UI**
- You describe *what* you want the UI to look like, and React takes care of the *how*.
- Makes code more predictable and easier to debug.

---

### 5. **Unidirectional Data Flow**
- Data flows **one way** (from parent to child via props).
- Makes app state easier to trace and manage.

---

### 6. **React Hooks**
- Introduced in React 16.8.
- Hooks like `useState`, `useEffect`, `useContext` allow you to use state and other features in functional components.

```jsx
const [count, setCount] = useState(0);
```

---

### 7. **React Developer Tools**
- Browser extension to inspect React component hierarchy, state, and props.

---

### 8. **Server-Side Rendering (SSR)**
- React supports SSR using frameworks like **Next.js**, improving SEO and performance.

---

### 9. **React Native**
- Write mobile apps using React components that render to native iOS and Android UI elements.

---

### 10. **Ecosystem and Community**
- Massive ecosystem with libraries for routing (**React Router**), state management (**Redux**, **Zustand**), data fetching (**React Query**, **SWR**), testing, and more.

---



4	What is JSX?
**JSX** (JavaScript XML) is a **syntax extension for JavaScript** used in React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript, making the UI code more readable and declarative.

---

### **Why JSX?**
- It blends **markup (HTML)** and **logic (JavaScript)** in one place.
- Makes it easier to **visualize component structure** and logic together.

---

### **Example:**

```jsx
const element = <h1>Hello, world!</h1>;
```

This JSX code gets transpiled (by Babel) into:

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

---

### **Features of JSX:**

1. **Looks like HTML but is JavaScript:**
   - You can embed any JS expression inside `{}`.

   ```jsx
   const name = 'Jane';
   const greeting = <h1>Hello, {name}!</h1>;
   ```

2. **Supports JavaScript expressions:**
   - You can use functions, variables, conditionals, etc.

   ```jsx
   const isLoggedIn = true;
   const message = <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>;
   ```

3. **Must return a single root element:**
   - Wrap multiple elements in a parent like a `<div>` or a React Fragment (`<> </>`).

   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Subtitle</p>
     </>
   );
   ```

4. **Custom components start with capital letters:**
   ```jsx
   function MyButton() {
     return <button>Click Me</button>;
   }

   const app = <MyButton />;
   ```

---

### **Behind the scenes:**
JSX is not required to write React, but it makes code more expressive and concise. Tools like **Babel** convert JSX into standard JavaScript calls (`React.createElement`).

---


5	What is the difference between an Element and a Component?
In React parlance, **elements** and **components** are two distinct concepts, each playing its own role in how you build UIs:

---

## 1. React Element

- **What it is:**  
  A plain JavaScript object that describes what you want to see on the screen.  
- **Characteristics:**  
  - Immutable — once created, you can’t change it.  
  - Cheap to create.  
  - Describes a DOM node (e.g. `<div>`) or a user‑defined component (e.g. `<MyButton />`) via its `type`, `props`, and `children`.  
- **Creation:**  
  - Automatically created when you write JSX:  
    ```jsx
    const el = <h1 className="title">Hello</h1>;
    ```  
  - Under the hood, JSX transpiles to:  
    ```js
    const el = React.createElement(
      'h1',
      { className: 'title' },
      'Hello'
    );
    ```  
- **Usage:**  
  - You pass elements to `ReactDOM.render()` (or return them from components) to tell React what to draw.

---

## 2. React Component

- **What it is:**  
  A **blueprint** (function or class) that—when invoked—returns React elements (or other components).  
- **Characteristics:**  
  - Can be stateful or stateless; can use lifecycle (class) or hooks (function).  
  - May accept inputs called **props**.  
  - Encapsulates its own rendering logic and (optionally) internal state.  
- **Types:**  
  1. **Function Component** (modern, with hooks)  
     ```jsx
     function Greeting({ name }) {
       return <h1>Hello, {name}!</h1>;
     }
     ```  
  2. **Class Component** (older style)  
     ```jsx
     class Counter extends React.Component {
       state = { count: 0 };
       render() {
         return (
           <div>
             <p>Count: {this.state.count}</p>
             <button onClick={() => this.setState({ count: this.state.count + 1 })}>
               +1
             </button>
           </div>
         );
       }
     }
     ```  

---

## Key Differences

| Aspect            | Element                                    | Component                                         |
|-------------------|--------------------------------------------|---------------------------------------------------|
| Definition        | Plain object (`type`, `props`, `children`) | Function or class that returns elements           |
| Mutability        | Immutable                                  | Can have internal state (class or hooks)          |
| Creation syntax   | JSX or `React.createElement`               | `function MyComp() {...}` or `class MyComp {...}` |
| Role              | “What to draw” description                 | “How to draw it” logic + potentially stateful     |
| Lifecycle         | No lifecycle                                | Can hook into lifecycle (hooks or methods)        |

---

### Putting it all together

1. **You write a component** (e.g. `function App() { … }`).  
2. **Inside that component**, you return React **elements** (`<div>…</div>`).  
3. **React takes those elements**, diffs them against the previous render, and updates the real DOM accordingly.

---



6	How do you create components in React?
Creating components in React is super straightforward. There are **two main ways** to create them: **function components** (the modern and preferred way) and **class components** (older, still used in legacy code).

---

## **1. Function Components (Modern Way)**

### **Basic Syntax:**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### **Usage:**
```jsx
<Welcome name="Alice" />
```

### **With Hooks:**
You can add state and side effects using **React Hooks**.
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## **2. Class Components (Legacy Way)**

### **Basic Syntax:**
```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### **With State:**
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```

---

## **Tips:**
- Component names **must start with a capital letter**.
- Always **return a single root element** (use a `<div>` or React Fragment if needed).
- Use **props** to pass data to components.

---


7	When should you use a Class Component over a Function Component?

In modern React, **function components are preferred** almost all the time—especially since the introduction of **Hooks** in React 16.8, which gave function components full access to features like state, side effects, context, refs, etc.

However, here’s a breakdown of **when you might still use a class component** (though rare):

---

### **Use Function Components When:**
- You’re writing **new code** (best practice).
- You want to use **Hooks** (`useState`, `useEffect`, etc.).
- You care about **simpler syntax**, better readability, and less boilerplate.
- You’re following **modern best practices** and community standards.

---

### **Use Class Components When:**
- You're working in a **legacy codebase** that already uses class components.
- You’re using **third-party libraries or patterns** that are tightly coupled to class components (though this is becoming rare).
- You need to **understand or maintain old projects** that rely on `componentDidMount`, `shouldComponentUpdate`, etc.

---

### **Feature Comparison**

| Feature               | Function Component (with Hooks) | Class Component              |
|------------------------|----------------------------------|-------------------------------|
| Simpler syntax         | ✅                              | ❌ (more boilerplate)         |
| Supports lifecycle     | ✅ (via `useEffect`, etc.)      | ✅ (via lifecycle methods)     |
| Local state            | ✅ (`useState`)                 | ✅ (`this.state`)              |
| Side effects           | ✅ (`useEffect`)                | ✅ (`componentDidMount`, etc.) |
| Refs & context         | ✅ (`useRef`, `useContext`)     | ✅                            |
| Performance features   | ✅ (`React.memo`, etc.)         | ✅                            |

---

### **In short:**
**Use function components by default.**  
Only use class components if you're dealing with older code or special edge cases.
 Check out the [React Hook Conversion Guide](https://reactjs.org/docs/hooks-rules.html#hooks-rules).


8	What are Pure Components?
**Pure Components** in React are components that do a **shallow comparison of props and state** to avoid unnecessary re-renders. They help improve performance by automatically implementing a **shouldComponentUpdate** logic.

---

### 🧠 **What Does “Pure” Mean in React?**

A **pure component**:
- Produces the **same output for the same props and state**.
- **Doesn’t re-render** unless props or state **actually change**.
- Works similarly to a **pure function** in functional programming.

---

### ✅ **Class Component: PureComponent**

React provides a built-in class called `React.PureComponent`:

```jsx
import React from 'react';

class MyComponent extends React.PureComponent {
  render() {
    console.log('Rendering...');
    return <h1>{this.props.message}</h1>;
  }
}
```

This is like a regular `React.Component`, but it automatically adds:

```js
shouldComponentUpdate(nextProps, nextState) {
  return (
    shallowCompare(this.props, nextProps) ||
    shallowCompare(this.state, nextState)
  );
}
```

---

### ✅ **Function Component: React.memo()**

In functional components, you use `React.memo()` to achieve the same optimization:

```jsx
const MyComponent = React.memo(function MyComponent({ message }) {
  console.log('Rendering...');
  return <h1>{message}</h1>;
});
```

- It **memoizes** the component and only re-renders if props have changed (shallow check).
- You can also pass a custom comparison function if needed.

---

### 🔍 Shallow Comparison

Pure components use **shallow comparison**, meaning:
- For **primitive values** (like strings, numbers) — compares values directly.
- For **objects/arrays** — compares references (not deep values).

So:
```js
{ name: 'John' } !== { name: 'John' } // different references → re-render happens
```

---

### ⚠️ When to Use (and Not Use) Pure Components

✅ **Use PureComponent / React.memo:**
- When you have **performance issues** due to unnecessary re-renders.
- When your component is **stateless** or **receives stable props**.

❌ **Avoid if:**
- Your props are often new objects/arrays/functions (e.g., created inline).
- You rely on deep prop structures (because shallow comparison might miss changes).

---

### Example:

```jsx
const Message = React.memo(({ text }) => {
  console.log('Rendered');
  return <p>{text}</p>;
});

// Only re-renders if `text` prop changes
```

---

9	What is state in React?

In React, **state** is a built-in object that allows components to **store and manage dynamic data**—data that can **change over time** and **trigger re-renders** when it does.

---

## 🔄 Why State Matters

Think of state as a component's **memory**. It lets components **react** to user input, API responses, timers, etc.

For example, a counter that increments when you click a button needs state to remember the current count.

---

## ✅ State in **Function Components** (with `useState` Hook)

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### What’s happening:
- `count` is the **state value**.
- `setCount` is the **function** to update the state.
- Calling `setCount` **re-renders the component** with the new state.

---

## ✅ State in **Class Components**

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // initial state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // updates state
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}
```

---

## 🧠 Key Characteristics of State

| Feature                | Description |
|------------------------|-------------|
| 🔄 Triggers re-render  | Any state change will cause the component to re-render with updated data. |
| 🧼 Local to component   | State belongs to the component it's declared in. |
| 🔐 Private              | Other components can’t directly access or change another’s state. |
| 🧮 Can be complex       | Can store strings, numbers, arrays, objects, etc. |

---

## ⚠️ Common Mistakes

- ❌ Don’t modify state directly:
  ```js
  // Wrong
  count = count + 1;

  // Right
  setCount(count + 1);
  ```

- ❌ State updates are **asynchronous** — don’t expect immediate changes.

---

## 🔧 When to Use State

Use state when:
- You need to update the UI dynamically.
- You're handling form inputs.
- You're tracking user interaction.
- You're dealing with API data that updates.

---


10	What are props in React?

In React, **props** (short for **properties**) are a way to **pass data from one component to another**—typically from a **parent to a child**.

They make components **reusable** and **dynamic** by allowing you to customize what they render based on the values passed in.

---

## 🧠 Think of Props Like Function Parameters

If a component is like a function, then props are like the function's **arguments**.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### Usage:
```jsx
<Greeting name="Alice" />
```

- Here, `"Alice"` is passed as a `name` prop to the `Greeting` component.
- Inside the component, you access it as `props.name`.

---

## ✅ Functional Component Example

```jsx
function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage
<UserCard name="John" age={30} />
```

---

## ✅ Class Component Example

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome, {this.props.name}!</h1>;
  }
}
```

---

## 🧩 Key Features of Props

| Feature               | Description |
|------------------------|-------------|
| 📦 Read-only           | Props **cannot be changed** by the receiving component. |
| 🔄 Passed down         | Props go from **parent to child** only (unidirectional). |
| 🔁 Dynamic rendering   | You can change how a component renders by changing the props you pass. |
| 🧱 Reusability         | The same component can be reused with different props. |

---

## 💡 Default Props (optional)

You can set default values if no prop is passed:

```jsx
function Welcome({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}
```

---

## 🚫 What Props Are Not

- They’re **not for internal data** — use **state** for that.
- They’re **not mutable** inside the child component.
- You **can’t pass props from child to parent** (but you can pass callbacks to handle events upward).

---


11	What is the difference between state and props?
Great question! Understanding the difference between **state** and **props** is **fundamental** to building React apps effectively. They both deal with data, but they serve **different purposes**.

---

## 🆚 **State vs Props in React**

| Feature        | `props`                                | `state`                                   |
|----------------|-----------------------------------------|--------------------------------------------|
| 💡 What is it? | Data passed **to a component**          | Data **owned and managed by the component** |
| 🔄 Mutability  | **Read-only** (immutable by the child) | **Mutable** (can be changed by the component) |
| 🔁 Who updates?| **Parent component**                   | The **component itself**                   |
| ⬇️ Direction   | **Passed down** from parent to child    | **Internal** to the component              |
| 🧱 Purpose      | Configure a component (like arguments) | Handle user interactions, local changes    |
| 🔁 Triggers re-render | Yes, when new props are received   | Yes, when `setState` or `useState` is called |
| 🧩 Example Use  | Displaying a user’s name from parent    | Tracking input text or button clicks       |

---

## 🧪 Example: `props` + `state` Together

```jsx
function Greeting({ name }) {  // name is a prop
  const [count, setCount] = useState(0);  // count is state

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- `name` comes from **outside** the component (props).
- `count` is **internal** to the component (state) and **changes** on interaction.

---

## 🧠 Quick Analogy:
> 🔧 **Props** are like the **settings** you pass into a machine.  
> ⚙️ **State** is the **internal condition** of that machine while it's running.

---


12	What is the difference between HTML and React event handling?

In plain HTML/JavaScript and in React, event handling accomplishes the same goal—responding to user interactions—but there are key differences in **syntax**, **semantics**, and **under-the-hood behavior**.

---

## 1. Naming Conventions

| Aspect                  | HTML / DOM API           | React                                           |
|-------------------------|--------------------------|-------------------------------------------------|
| Event handler attribute | lowercase, inline string | camelCase, JavaScript function reference        |
| Example                 | `<button onclick="doIt()">` | `<button onClick={doIt}>`                      |

- **HTML** uses attributes like `onclick`, `onmouseover`, etc., all lowercase.  
- **React** uses `onClick`, `onMouseOver`, etc., in **camelCase**, and you pass a **function** (not a string).

---

## 2. Attaching Handlers

### HTML / DOM API
```html
<!-- Inline -->
<button onclick="alert('Hi')">Click me</button>

<!-- Via JavaScript -->
<button id="btn">Click me</button>
<script>
  document.getElementById('btn').addEventListener('click', () => {
    alert('Hi');
  });
</script>
```

### React
```jsx
function MyButton() {
  function handleClick() {
    alert('Hi');
  }

  return <button onClick={handleClick}>Click me</button>;
}
```
- **HTML inline**: you pass a **string** that the browser evaluates.  
- **React**: you pass a **function reference**; no string parsing.

---

## 3. Synthetic Events vs Native Events

- **HTML/DOM**: you work directly with native browser events (`MouseEvent`, `KeyboardEvent`, etc.).
- **React**: uses a **SyntheticEvent** wrapper that:
  - Normalizes cross‑browser differences.  
  - Pools events for performance (reuses objects).  
  - Provides the same API on all browsers.

```jsx
function onKeyPress(event) {
  console.log(event.type);        // always 'keypress'
  console.log(event.nativeEvent); // underlying native event
}
```

---

## 4. `this` Binding (Class Components)

In **plain JS**, function context can be tricky:

```js
<button id="btn">Click</button>
<script>
  const obj = {
    name: 'Alice',
    handle() {
      console.log(this.name);
    }
  };
  document.getElementById('btn').addEventListener('click', obj.handle); 
  // 'this' is the button element, not `obj`
</script>
```

In **React class components**, you must bind handlers (or use arrow methods):

```jsx
class MyComp extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this); // correctly bound to component instance
  }
  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

Function components with Hooks avoid this entirely, since you never deal with `this`.

---

## 5. Preventing Default & Event Propagation

### HTML/DOM
```html
<a href="/" onclick="event.preventDefault()">No navigation</a>
<script>
  document.getElementById('btn').addEventListener('click', (e) => {
    e.stopPropagation();
  });
</script>
```

### React
```jsx
function Link() {
  function handleClick(e) {
    e.preventDefault(); 
    e.stopPropagation();
  }
  return <a href="/" onClick={handleClick}>No nav</a>;
}
```
- **Same methods** (`preventDefault()`, `stopPropagation()`), but on a **SyntheticEvent**.

---

## 6. Performance & Delegation

- **DOM API**: if you `.addEventListener` to many elements, each gets its own handler.  
- **React**: React attaches a single event listener at the root and uses **event delegation** internally. Handlers you declare are invoked based on your component tree, but the browser work is minimal.

---

## 7. Removal & Cleanup

- **HTML/DOM**: you must manually remove listeners (e.g., `removeEventListener`) to avoid leaks.  
- **React**: when a component unmounts, React automatically cleans up its SyntheticEvent handlers. For manual side-effects (e.g., `addEventListener` in `useEffect`), you return a cleanup function:

```jsx
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

### **In Summary**

- **Syntax**: lowercase inline strings vs. camelCase function references.  
- **Event type**: native browser events vs. cross‑browser SyntheticEvents.  
- **Binding**: manual context management in plain JS vs. simplified in React (especially with Hooks).  
- **Delegation & performance**: React optimizes via a single root listener.  
- **Lifecycle**: React auto‑cleans up, but manual listeners in effects still need cleanup.

By abstracting and normalizing events, React lets you write concise, cross‑browser code without worrying about the quirks of each browser’s event system.

---
13	What are synthetic events in React?

In React, **Synthetic Events** are **cross-browser wrappers** around native browser events.

React creates these synthetic events to provide a **consistent and normalized event system** across different browsers, ensuring you don’t have to worry about browser-specific quirks.

---

## 🔧 What is a Synthetic Event?

> A **SyntheticEvent** is React’s custom event object that wraps the native DOM event.

It mimics the browser’s native event API but has the same interface across all browsers.

---

## 🧪 Example

```jsx
function ClickHandler() {
  function handleClick(event) {
    console.log(event);                // SyntheticEvent
    console.log(event.nativeEvent);   // Native browser event
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

- `event` is a **SyntheticEvent**.
- `event.nativeEvent` gives you access to the actual **DOM event** (like `MouseEvent`, `KeyboardEvent`, etc.).

---

## 🚀 Why Use Synthetic Events?

| Benefit                 | Explanation |
|-------------------------|-------------|
| ✅ Cross-browser compatibility | One API that works everywhere (no need for polyfills). |
| ⚡ Performance optimization    | React pools and reuses event objects to reduce garbage collection. |
| 🧼 Clean abstraction           | You don't have to manually `addEventListener` or `removeEventListener`. |
| 🔄 Automatic cleanup          | React cleans up event listeners when components unmount. |

---

## ⚠️ Event Pooling (React ≤ v17)

In older versions (before React 17), synthetic events were **pooled** for performance:

```jsx
function handler(event) {
  console.log(event.type); // Works
  setTimeout(() => console.log(event.type)); // May not work (event reused!)
}
```

To keep the event around asynchronously, you'd use:
```js
event.persist(); // disables pooling
```

In **React 17+**, event pooling is removed—so this is less of a concern now.

---

## ✅ Available Synthetic Events

React supports a wide range of events:

| Type            | Example handlers             |
|-----------------|------------------------------|
| Mouse Events    | `onClick`, `onDoubleClick`, `onMouseDown`, `onMouseEnter`, etc. |
| Keyboard Events | `onKeyDown`, `onKeyPress`, `onKeyUp` |
| Form Events     | `onChange`, `onSubmit`, `onInput`, etc. |
| Touch Events    | `onTouchStart`, `onTouchMove`, `onTouchEnd` |
| Focus Events    | `onFocus`, `onBlur` |
| UI Events       | `onScroll`, `onLoad`, etc. |

Each one provides a `SyntheticEvent` with helpful properties like `.target`, `.currentTarget`, `.preventDefault()`, and `.stopPropagation()`.

---

### In Summary:

- ✅ **SyntheticEvent** is a wrapper around native events.
- 🎯 Ensures **consistent behavior** across all browsers.
- 🚫 You don’t attach/remove event listeners manually.
- 🧼 React cleans them up automatically when components unmount.
- ⚙️ You can still access the **native event** if needed.
---

14	What are inline conditional expressions?
**Inline conditional expressions** in React are ways to conditionally render JSX **directly inside the render return block**, typically using JavaScript expressions like the **ternary operator**, **logical AND (`&&`)**, or sometimes **IIFEs** (less common).

These are useful when you want to render content **only under certain conditions**, without needing to use `if` statements or break your code into separate functions.

---

## ✅ Common Forms of Inline Conditional Rendering

### 1. **Ternary Operator (`? :`)**

Use when you want to choose **between two elements**:

```jsx
{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
```

### 2. **Logical AND (`&&`)**

Use when you want to render **something or nothing**:

```jsx
{cart.length > 0 && <p>You have items in your cart.</p>}
```

- If the condition is `true`, it renders the JSX.
- If `false`, it renders nothing (`false` is ignored in JSX).

### 3. **Logical OR (`||`)**

Use to show a fallback/default if the first value is falsey:

```jsx
<p>{user.name || "Guest"}</p>
```

- If `user.name` is falsy (e.g. `""`, `null`, `undefined`), it shows `"Guest"`.

---

## 💡 Example in a Component

```jsx
function Greeting({ user }) {
  return (
    <div>
      <h1>Hello, {user.name || "Guest"}!</h1>
      {user.isAdmin && <p>You have admin access.</p>}
      {user.age >= 18 ? (
        <p>Welcome, adult user.</p>
      ) : (
        <p>Sorry, you're not old enough.</p>
      )}
    </div>
  );
}
```

---

## ⚠️ Gotchas

- `false`, `null`, `undefined`, and `true` won’t render anything in JSX.  
  ```jsx
  {false && <div>This won't show up</div>}
  ```
- But `0` **will** render.  
  ```jsx
  {0 && <div>This won’t render either</div>} // But be careful if "0" is valid output!
  ```

To avoid this:
```jsx
{count > 0 && <p>{count}</p>} // instead of just {count && <p>{count}</p>}
```

---

## 🧪 When Not to Use Inline

If logic gets too complex, it’s better to:
- Extract logic to a variable:
  ```jsx
  const greeting = isLoggedIn ? "Welcome" : "Log in";
  ```
- Or move it to a helper function:
  ```jsx
  function renderGreeting() {
    if (isLoggedIn) return <p>Welcome</p>;
    return <p>Please log in</p>;
  }
  ```

---

### TL;DR

| Syntax           | Use for                                      |
|------------------|-----------------------------------------------|
| `condition && JSX` | Render if condition is true                  |
| `condition ? A : B` | Choose between two elements                  |
| `A || B`         | Fallback value if A is falsy                 |


15	What is the Virtual DOM? How does the Virtual DOM work?
Great question! The **Virtual DOM (VDOM)** is a **core concept in React** that helps it render UI efficiently. Let's break it down in a clean, intuitive way 👇

---

## 🌐 What is the Virtual DOM?

The **Virtual DOM** is a **lightweight JavaScript representation** (a *virtual copy*) of the actual **DOM (Document Object Model)**.

- It’s **not** rendered on the screen.
- It lives in memory.
- It allows React to **track changes** efficiently and update the real DOM in the most optimal way.

> 🧠 Think of the Virtual DOM as a middle layer between your UI and the browser's actual DOM.

---

## ⚙️ How Does the Virtual DOM Work?

### Step-by-Step:

1. **Initial Render**  
   React builds a Virtual DOM tree from your JSX and renders it to the **real DOM**.

2. **User Interaction / State Change**  
   Something triggers a change (like `setState` or `props` update).

3. **Re-render Virtual DOM**  
   React **rebuilds a new Virtual DOM tree** based on the new state.

4. **Diffing (Reconciliation)**  
   React compares the **new Virtual DOM** to the **previous one** using a **diffing algorithm** to figure out what exactly changed.

5. **Minimal DOM Updates**  
   React then makes the **least number of changes** to the **actual DOM** (real DOM) to match the new Virtual DOM.

---

## 💡 Why Use a Virtual DOM?

| Benefit                  | Why It Matters |
|--------------------------|----------------|
| ⚡ Performance           | The real DOM is slow to manipulate directly. VDOM avoids unnecessary re-renders. |
| 🧠 Predictability        | React controls DOM updates instead of you manually updating elements. |
| 🔄 Efficient Re-renders | React only updates what *actually* changed, not the entire page. |
| ♻️ Component Reuse      | Makes it easy to break the UI into reusable parts and update them independently. |

---

## 📊 Visual Example

Let’s say you have:

```jsx
<h1>Hello, John</h1>
```

Then you change it to:

```jsx
<h1>Hello, Jane</h1>
```

### React Does:

- Builds a new Virtual DOM with `"Jane"`.
- Compares it to the previous Virtual DOM (with `"John"`).
- Sees that only the text node changed.
- Updates **only** the text in the real DOM—nothing else!

---

## 🧬 Bonus: Virtual DOM ≠ Shadow DOM

- The **Virtual DOM** is a **React concept**, used for **efficient rendering**.
- The **Shadow DOM** is a **browser feature**, used for **style encapsulation** in Web Components.

---

### TL;DR

- ✅ The Virtual DOM is an in-memory representation of the real DOM.
- 🔁 React uses it to update only what’s changed—nothing more.
- ⚡ It enables fast, efficient UI updates with minimal browser reflow/repaint.


18	can you explain the difference between Shadow DOM and Virtual DOM?

Absolutely! The **Shadow DOM** and **Virtual DOM** sound similar, but they are **completely different concepts** with different purposes, origins, and behaviors.

Let’s break them down side by side for a clear comparison:

---

## 🧩 Shadow DOM vs Virtual DOM

| Feature           | 🔮 Shadow DOM                                | 🧠 Virtual DOM                                |
|-------------------|----------------------------------------------|-----------------------------------------------|
| **Definition**    | A **browser feature** that encapsulates part of the DOM | A **React concept** that keeps a **virtual representation** of the DOM in memory |
| **Purpose**       | Encapsulation of components (style + DOM)   | Efficient rendering and UI updates            |
| **Who Uses It**   | Web Components (Custom Elements, Lit, etc.) | React, Vue (their own virtual DOM)            |
| **Native Support**| ✅ Built into modern browsers                | ❌ Handled by frameworks like React (JS-only) |
| **Encapsulation** | ✅ Styles and DOM inside Shadow DOM are isolated from the rest of the page | ❌ No style or structural encapsulation        |
| **Rendering**     | Renders directly in the **real DOM**, just inside a shadow root | Renders to a **virtual** structure in memory, then updates the real DOM |
| **Example Use**   | `<video>`, `<input>` (native shadow roots); Web Components | `<MyComponent />` in React or `<App />`      |

---

## 🧠 What is the **Virtual DOM**?

- A **lightweight JavaScript object tree** that mirrors the real DOM.
- Used by React to **detect changes** and apply the **smallest set of updates** to the real DOM.

```jsx
<div>Hello World</div> // JSX → Virtual DOM → Real DOM
```

React:
1. Renders Virtual DOM.
2. Diffs new and old trees.
3. Updates only changed parts in the real DOM.

---

## 🔮 What is the **Shadow DOM**?

- A **part of the browser spec**.
- Allows developers to attach a **"shadow tree"** to an element, keeping it **encapsulated** from the main DOM.

```html
<my-component></my-component>
```

```js
const shadowRoot = element.attachShadow({ mode: "open" });
shadowRoot.innerHTML = `<style>p { color: red }</style><p>Hello</p>`;
```

- Styles and DOM inside the shadow root are **not affected by** outside CSS or JS.
- Used for **Web Components** to avoid CSS leaks and DOM pollution.

---

## 🧠 Virtual DOM is for **Performance**  
## 🔮 Shadow DOM is for **Encapsulation**

---

### 🎯 In Short:

|                | Virtual DOM                      | Shadow DOM                      |
|----------------|----------------------------------|----------------------------------|
| **Who**        | React (framework-managed)        | Browser (native)                |
| **Why**        | Efficient UI updates             | Style/DOM isolation             |
| **Where**      | In memory                        | Inside the real DOM             |
| **Use Case**   | Re-rendering components          | Web Components, reusable widgets |

---

23	What is the difference between createElement and cloneElement?
Great question! In React, both `createElement` and `cloneElement` are used to **create React elements**, but they serve different purposes and are used in **different situations**.

Let’s break down the difference clearly:

---

## 🔨 `React.createElement()`

### 📌 Purpose:
Used to **create a brand new React element** from scratch.

### 🧠 How it works:
This is what JSX compiles into under the hood.

```jsx
const element = <div className="box">Hello</div>;
```

⬇️ is equivalent to:

```js
const element = React.createElement('div', { className: 'box' }, 'Hello');
```

### ✅ Use Case:
- Internal to React (JSX gets compiled to this).
- Rarely used manually unless you're not using JSX.

---

## 🔁 `React.cloneElement()`

### 📌 Purpose:
Used to **clone an existing React element** and optionally modify its props or children.

### 🧠 How it works:

```jsx
const original = <Button type="primary" />;
const clone = React.cloneElement(original, { type: "secondary" });
```

- Copies `original` but overrides the `type` prop.
- Can also add/replace children.

### ✅ Use Case:
- Useful in **Higher-Order Components**, **render props**, **custom wrappers**, etc.
- When you want to **inject props** into a child element dynamically.

---

## 🔍 Side-by-Side Comparison

| Feature              | `createElement`                       | `cloneElement`                                |
|----------------------|----------------------------------------|------------------------------------------------|
| Creates new element? | ✅ Yes                                 | 🚫 No — it clones an existing one              |
| JSX alternative?     | ✅ Equivalent to JSX                   | ❌ Not used by JSX                             |
| Modifies props?      | ✅ You define them                     | ✅ You can override or add new props           |
| Children?            | ✅ You pass children                   | ✅ You can override or keep original children  |
| Typical Use          | Rendering elements via JSX or manually | Customizing child components before rendering |

---

## 🧪 Example: `cloneElement` in Action

```jsx
function Wrapper({ children }) {
  return React.cloneElement(children, {
    className: "wrapped " + children.props.className,
  });
}

<Wrapper>
  <button className="btn">Click</button>
</Wrapper>

// Output: <button class="wrapped btn">Click</button>
```

---

### TL;DR

- 🏗 **`createElement`** → Build a new element (`<div />`)
- 🧬 **`cloneElement`** → Copy an existing one and modify it (`<ModifiedButton />`)


24	What is Lifting State Up in React?
**Lifting State Up** is a fundamental React pattern where you **move state from a child component to a common parent** so that multiple components can share and synchronize that state.

---

## 🧠 Why “Lift” State?

Imagine two sibling components need to:

- Share some data
- Update each other based on user actions

Since **React data flows one way (top-down)**, you can’t directly share state between siblings.

👉 **Solution?** Move the shared state **upward** to their **closest common ancestor**, then pass it **down as props**.

---

## 🧪 Simple Example: Temperature Converter

Let’s say you have two inputs:
- One for **Celsius**
- One for **Fahrenheit**

Each needs to update the other. Here's how you lift state:

### ❌ Bad: Each Input Keeps Its Own State

```jsx
function CelsiusInput() {
  const [temp, setTemp] = useState('');
  return <input value={temp} onChange={(e) => setTemp(e.target.value)} />;
}

function FahrenheitInput() {
  const [temp, setTemp] = useState('');
  return <input value={temp} onChange={(e) => setTemp(e.target.value)} />;
}
```

These two components **don’t know about each other**, so they can’t stay in sync.

---

### ✅ Good: Lift State Up to a Common Parent

```jsx
function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c'); // 'c' for Celsius, 'f' for Fahrenheit

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius = scale === 'f' ? ((temperature - 32) * 5) / 9 : temperature;
  const fahrenheit = scale === 'c' ? (temperature * 9) / 5 + 32 : temperature;

  return (
    <div>
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

function CelsiusInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Celsius"
    />
  );
}

function FahrenheitInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Fahrenheit"
    />
  );
}
```

- Now both inputs stay **in sync**.
- State is lifted to `TemperatureConverter` (the parent).

---

## 🧠 General Rule of Thumb

> If multiple components need access to the same data or need to affect each other’s state, **lift that state up to their nearest common ancestor.**

---

## 📦 Benefits of Lifting State Up

| Benefit                 | Why it’s helpful                       |
|-------------------------|----------------------------------------|
| 🔄 Keeps UI in sync     | Multiple components reflect same state |
| 🔧 Better data control  | One source of truth                    |
| 🧹 Simplifies debugging | Easier to trace where state changes    |
| 💬 Enables communication| Sibling components can “talk” via parent|

Great follow-up! While **Lifting State Up** is a powerful and clean pattern in React, it’s not without its **limitations and trade-offs**. Let’s go through them clearly:

---

## ⚠️ Limitations of Lifting State Up

### 1. **Prop Drilling**
When state is lifted too high in the component tree, the data and functions might need to be passed down **through many layers of components**—even those that don’t use it.

```jsx
<App>
  <Page>
    <Section>
      <Widget propFromParent={...} />
    </Section>
  </Page>
</App>
```

- 🔁 This is called **prop drilling**.
- 🧹 Makes the code harder to maintain and refactor.

---

### 2. **Tightly Coupled Components**
Lifting state up means child components **depend heavily on parent props**, reducing their **reusability** and **independence**.

- A child becomes less reusable outside its current context.
- Changing shared logic in the parent can break multiple children.

---

### 3. **State Explosion at the Top**
As you lift more state up, your parent components might become **bloated with state and logic**—violating the Single Responsibility Principle.

- Too much logic in one place.
- Hard to test and maintain.

---

### 4. **Performance Concerns**
When the state is lifted to a common parent, **any change to that state will re-render all child components**, even those that don’t care about the change.

> 🐢 This can make large apps feel sluggish unless you optimize (e.g., using `React.memo` or splitting components smartly).

---

### 5. **Harder Debugging in Complex Trees**
When multiple components are dependent on shared state far up the tree, **tracking state changes and flows can become complex**.

---

## 🧠 When Lifting State Up Is NOT Ideal

| Situation                         | Better Alternatives                          |
|----------------------------------|----------------------------------------------|
| State needed across many levels  | ❗ Use **Context API** or state management like Redux/Zustand |
| State rarely changes             | ✅ Keep it local to the component             |
| Performance becomes an issue     | 🔧 Use memoization or separate contexts       |

---

## ✅ Best Practices

- Lift state only as high as **necessary**.
- Use **React Context** to avoid prop drilling.
- Consider **custom hooks** to isolate shared logic.
- If state gets too complex, use a **state management library** like Redux, Zustand, Jotai, etc.

---

### TL;DR

| Limitation         | Why It Matters                                      |
|--------------------|-----------------------------------------------------|
| Prop Drilling       | Makes component hierarchy messy                    |
| Tightly Coupled     | Reduces reusability                                |
| Bloated Parent      | Parent components become hard to manage            |
| Re-renders          | All children may re-render unnecessarily           |
| Debugging Difficulty| Harder to follow data flow in large component trees|

---

Awesome! Let’s walk through a **step-by-step refactor** of a bloated component that has lifted state—and clean it up using **React Context + custom hooks**.

---

## 💡 Scenario: Too Much State in Parent

You have a parent component that manages theme, user info, and modal state—and passes everything down multiple levels.

### ❌ Before: Bloated Parent + Prop Drilling

```jsx
function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "Alice" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout
      theme={theme}
      setTheme={setTheme}
      user={user}
      setUser={setUser}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
  );
}
```

All of this gets passed through `Layout` → `Sidebar` → `ProfileCard` etc.

---

## ✅ After: Use Context + Custom Hooks

We'll split this into:
- `ThemeContext`
- `UserContext`
- `ModalContext`
- And access them cleanly with custom hooks

---

### 🛠 Step 1: Create Contexts

#### `ThemeContext.js`

```jsx
const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
```

---

#### `UserContext.js`

```jsx
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Alice" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
```

---

#### `ModalContext.js`

```jsx
const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => React.useContext(ModalContext);
```

---

### 🧩 Step 2: Wrap App in Providers

```jsx
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { ModalProvider } from "./ModalContext";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ModalProvider>
          <Layout />
        </ModalProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
```

---

### 🧼 Step 3: Use Custom Hooks in Children

#### In `Sidebar.js`:

```jsx
import { useUser } from "./UserContext";

function Sidebar() {
  const { user } = useUser();
  return <div>Hello, {user.name}!</div>;
}
```

#### In `ProfileCard.js`:

```jsx
import { useTheme } from "./ThemeContext";

function ProfileCard() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`card ${theme}`}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

#### In `Modal.js`:

```jsx
import { useModal } from "./ModalContext";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="modal">
      <p>This is a modal</p>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  );
}
```

---

## 🎯 Benefits of This Refactor

| Improvement             | Why It Matters                                   |
|-------------------------|--------------------------------------------------|
| ✅ No more prop drilling | Components use what they need directly          |
| 🧠 Better organization   | Each context manages its own responsibility     |
| ♻️ Reusable hooks        | Can reuse `useUser`, `useTheme` anywhere        |
| 🧹 Cleaner components    | Components focus on UI, not state plumbing      |
| ⚡ Better performance    | Fewer unnecessary re-renders                    |

---




25	What are Higher-Order Components?
Great question! **Higher-Order Components (HOCs)** are an important advanced concept in React for reusing component logic.

---

## 🧠 What is a Higher-Order Component?

A **Higher-Order Component** is a **function** that takes a component and returns a **new enhanced component**.

> **Definition**:  
> A Higher-Order Component is a **pattern** used in React to **reuse component logic** by wrapping a component inside another component function.

---

## 📦 Syntax

```jsx
const EnhancedComponent = withSomething(WrappedComponent);
```

It’s just a **function** like:

```jsx
function withSomething(Component) {
  return function Enhanced(props) {
    // Add logic or props here
    return <Component {...props} />;
  };
}
```

---

## 🧪 Example: `withLoading`

Here’s a simple HOC that adds a **loading spinner**:

```jsx
function withLoading(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return <Component {...props} />;
  };
}
```

Now use it like:

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

const UserListWithLoading = withLoading(UserList);

// Usage
<UserListWithLoading isLoading={true} users={[]} />
```

---

## 🔍 Key Points

| Concept               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Function**          | A HOC is a pure function—no JSX inside the HOC definition itself            |
| **Takes a Component** | Accepts a component (e.g. `UserList`) as an argument                        |
| **Returns a Component** | Returns a new component with added functionality                         |
| **Reusability**       | Logic (e.g., loading, authentication, logging) can be reused across components |

---

## 📊 Real-World Use Cases

- ✅ Authentication wrappers (e.g., `withAuth`)
- 🔁 Reuse logic like `withLogging`, `withErrorBoundary`
- 📦 Inject global data (e.g., from Redux or Context)

---

## ⚠️ Caveats / Best Practices

| Issue                    | Solution / Advice                                          |
|--------------------------|------------------------------------------------------------|
| Prop name collisions     | Namespace injected props (`injectedProps.something`)       |
| Hard to debug            | Use descriptive display names (`Wrapped.displayName`)      |
| Less used in modern React | Hooks are often more readable and flexible                |
| Wrapper hell             | Avoid deeply nested HOCs (use composition or hooks instead)|

---

## 🆚 HOC vs Hook (Quick Comparison)

| Feature       | HOC                         | Hook                         |
|---------------|-----------------------------|------------------------------|
| Syntax        | `withFeature(Component)`    | `useFeature()`               |
| Returns       | A new **Component**         | A **value/function**         |
| Reusability   | Wrap logic at component level| Share logic within components |
| Preferred     | Older React codebases        | ✅ Modern React (with hooks) |

---

## TL;DR

> **HOCs** = functions that take a component, add logic or data, and return a new enhanced component.

They're great for:
- Wrapping components with **common behavior**
- Keeping code **DRY**
- Abstracting complex logic (e.g., permissions, feature flags, etc.)

---

26	What is the children prop?

The `children` prop in React is a **special prop** that allows you to **pass elements or content between the opening and closing tags** of a component.

---

## 🧠 What is the `children` prop?

It’s just a **built-in prop** automatically available to every component, containing the **content inside its tags**.

### Example:

```jsx
function Wrapper({ children }) {
  return <div className="box">{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Hello!</h1>
      <p>This is wrapped inside the box.</p>
    </Wrapper>
  );
}
```

> In this example, the `<h1>` and `<p>` become the `children` of `Wrapper`.

---

## 🔍 How to Use It

You can access `children` like any other prop:

```jsx
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

Or using **destructuring**:

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

---

## 🧪 Real-World Use Cases

| Use Case                    | How `children` Helps                                      |
|-----------------------------|-----------------------------------------------------------|
| Layouts / wrappers          | Wrap content in a reusable layout                        |
| Modals                      | Put dynamic content inside a consistent modal structure  |
| Reusable UI components      | Buttons, containers, cards, tabs, etc.                   |
| Composition-based design    | Build flexible and customizable UIs                      |

---

### 🧰 Example: `Modal`

```jsx
function Modal({ children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Modal>
      <h2>Confirm Delete</h2>
      <button>Cancel</button>
      <button>Delete</button>
    </Modal>
  );
}
```

---

## 🧠 `children` Can Be Anything

- A string: `<Wrapper>Hello</Wrapper>`
- JSX elements
- Arrays of elements
- A function (for advanced patterns)

---

## TL;DR

> `children` is how React lets you **inject content** into a component **from the outside**, similar to how slots work in other frameworks like Vue or Web Components.

---




Does the lazy function support named exports?
Great question! Short answer: **No**, `React.lazy()` does **not** support named exports directly. It only works with **default exports**.

---

## 💡 `React.lazy()` Recap

`React.lazy()` is used to **dynamically import** a component for code splitting:

```jsx
const MyComponent = React.lazy(() => import('./MyComponent'));
```

This only works if `MyComponent.js` does a **default export**:

```jsx
// ✅ This works
export default function MyComponent() {
  return <div>Hello</div>;
}
```

---

## ❌ Named Export Won’t Work

If your file has a **named export** like this:

```jsx
// ❌ This won't work with React.lazy
export function MyComponent() {
  return <div>Hello</div>;
}
```

Trying to do this:

```jsx
const MyComponent = React.lazy(() => import('./MyComponent').then(module => module.MyComponent));
```

...will throw an error like:

> `Expected the result of a dynamic import() call to be a module with a default export`

---

## ✅ Workaround: Re-export as Default

If you're stuck with a named export (e.g., third-party lib or internal code structure), you can **create a wrapper file** like this:

### `LazyMyComponent.js`

```js
export { MyComponent as default } from './OriginalFile';
```

Then lazy load it:

```jsx
const MyComponent = React.lazy(() => import('./LazyMyComponent'));
```

---

## TL;DR

| Feature                | Supported by `React.lazy()` |
|------------------------|-----------------------------|
| Default exports        | ✅ Yes                      |
| Named exports          | ❌ No                       |
| Workaround             | ✅ Re-export as default     |

---


Why does React use className instead of the class attribute?

Great question—and one that confuses a lot of folks coming from HTML!

---

## 🧠 Why `className` instead of `class` in React?

React uses `className` instead of `class` because `class` is a **reserved keyword in JavaScript**.

In vanilla HTML:

```html
<div class="card">Hello</div>
```

But in React (JSX is closer to JavaScript than HTML), if you write:

```jsx
<div class="card">Hello</div>  // ❌ This throws an error
```

JSX gets compiled into JavaScript, and `class` would conflict with:

```js
class MyComponent { ... } // ← reserved word!
```

So React avoids that conflict by using:

```jsx
<div className="card">Hello</div>  // ✅ Correct in JSX
```

---

## 🛠 JSX = JavaScript Syntax Extension

Remember: JSX is not HTML—it's **JavaScript with HTML-like syntax**.

That’s why we also write:
- `htmlFor` instead of `for`
- `onClick` instead of `onclick`
- `tabIndex`, `autoFocus`, etc.

React maps these to their corresponding **DOM attributes** under the hood.

---

## ✅ TL;DR

| In HTML     | In JSX (React)      | Why?                          |
|-------------|---------------------|-------------------------------|
| `class`     | `className`         | `class` is a reserved keyword |
| `for`       | `htmlFor`           | Avoids conflict with `for` loops |
| `onclick`   | `onClick`           | Follows JS camelCase convention |

---



What are Fragments? Why are they better than container divs?

Awesome question! Let’s dive into **Fragments** in React and why they’re often better than using extra `<div>`s.

---

## 🧩 What Are React Fragments?

A **Fragment** lets you group multiple elements **without adding extra nodes** to the DOM.

### ✅ Instead of doing this:
```jsx
return (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);
```

### You can do this:
```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

That `<>...</>` is a **Fragment** — shorthand for `<React.Fragment>`.

---

## 🔍 Why Not Just Use a `<div>`?

Extra `<div>`s can be:
- 🚫 **Semantically incorrect** (e.g., divs inside `<ul>`, `<table>`, or `<p>` tags)
- 😵‍💫 **Styling headaches** (extra containers may mess with flex/grid layouts)
- 📉 **Performance** (slightly—extra nodes = extra work for the browser)
- 🧪 **Test clutter** (more nodes to target in unit or snapshot tests)

---

## 🧠 When Fragments Are Useful

| Scenario                          | Why Fragments Help                          |
|-----------------------------------|---------------------------------------------|
| Returning multiple elements       | React components must return a single node  |
| Avoid breaking HTML semantics     | e.g. `<li>` inside `<ul>`, `<td>` in `<tr>` |
| Clean markup & CSS structure      | No unnecessary wrappers                     |
| Components that slot into layouts | Avoid wrapping everything in a div          |

---

## ✨ Full Example

### ❌ Using div (adds an extra node):
```html
<ul>
  <div>
    <li>Item 1</li>
    <li>Item 2</li>
  </div>
</ul>  <!-- ❌ Invalid HTML -->
```

### ✅ Using Fragment (no extra node):
```jsx
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

---

## 🧪 Fragment Variants

1. **Short syntax**: `<>...</>`
2. **Full syntax**: `<React.Fragment>...</React.Fragment>`
3. **With `key`** (for lists):
   ```jsx
   items.map(item => (
     <React.Fragment key={item.id}>
       <dt>{item.name}</dt>
       <dd>{item.description}</dd>
     </React.Fragment>
   ));
   ```

---

## ✅ TL;DR

> **React Fragments** let you group components **without extra DOM nodes**.
>
> 🧼 Cleaner DOM, 💅 better styling, and 🧠 valid HTML = Happy Dev.

---



What are stateless components?

Great question! Let’s break down what **stateless components** are in React in a clean and simple way 👇

---

## 🧠 What Are Stateless Components?

A **stateless component** is a React component that:

- ✅ **Receives props**
- ✅ **Doesn’t manage state internally**
- ✅ **Just renders UI**
- ❌ Doesn’t use `useState`, `this.state`, or lifecycle methods

---

### ✅ Functional Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

This is a **stateless functional component**:
- It takes `props`
- Returns JSX
- No state or side effects

---

## 🆚 Stateless vs Stateful

| Feature            | Stateless Component                   | Stateful Component                         |
|--------------------|----------------------------------------|--------------------------------------------|
| **State**          | ❌ Doesn’t use state                   | ✅ Has its own state                        |
| **Logic**          | Pure UI rendering                      | Handles logic, events, API calls, etc.     |
| **Reusability**    | Highly reusable and testable           | Less reusable (more responsibilities)      |
| **Performance**    | Slightly better (less overhead)        | Slightly heavier (due to state updates)    |
| **Examples**       | Button, Card, Title, Avatar            | Forms, Modals, Tabs, Sliders               |

---

## 🧬 In Modern React

With hooks, you can write **stateful logic** in function components using `useState`, `useEffect`, etc.  
So the **term "stateless" now refers to how you use the component**, not whether it's a class or function.

---

### Old Class Style:

```jsx
class Stateless extends React.Component {
  render() {
    return <p>{this.props.message}</p>;
  }
}
```

### Modern Functional Style:

```jsx
const Stateless = ({ message }) => <p>{message}</p>;
```

---

## 🧪 Best Use Cases

- Presentational / UI components
- Small reusable widgets
- Layout wrappers
- Components used in loops (e.g., list items)

---

## ✅ TL;DR

> A **stateless component** is a **pure function** that takes props and returns JSX.  
> It’s all about **UI only**, with **no state, no side effects, and no lifecycle logic**.

---


How do you apply validation to props in React?

Great question! In React, **you apply validation to props** using a library called **PropTypes**.

---

## ✅ What is PropTypes?

**`PropTypes`** is a built-in type-checking utility that helps you:
- Ensure your components get the right kind of props
- Catch bugs early during development
- Make your components more predictable

---

## 🛠 How to Use PropTypes

1. **Import PropTypes**:

```js
import PropTypes from 'prop-types';
```

2. **Define propTypes on your component**:

```jsx
function UserCard({ name, age, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isOnline: PropTypes.bool
};
```

---

## 📦 Common PropTypes Validators

| Type            | Validator                |
|-----------------|--------------------------|
| string          | `PropTypes.string`       |
| number          | `PropTypes.number`       |
| boolean         | `PropTypes.bool`         |
| array           | `PropTypes.array`        |
| object          | `PropTypes.object`       |
| function        | `PropTypes.func`         |
| element         | `PropTypes.element`      |
| node (string, element, number, etc.) | `PropTypes.node` |

---

## 🧪 Advanced Usage

### Arrays of specific type:
```js
tags: PropTypes.arrayOf(PropTypes.string)
```

### Objects with specific shape:
```js
user: PropTypes.shape({
  name: PropTypes.string.isRequired,
  age: PropTypes.number
})
```

### Enum-like validation:
```js
status: PropTypes.oneOf(['pending', 'approved', 'rejected'])
```

### Custom validator:
```js
id: function(props, propName, componentName) {
  if (!/^[0-9]+$/.test(props[propName])) {
    return new Error(`${propName} must be a number string in ${componentName}`);
  }
}
```

---

## 🎯 Why Use PropTypes?

✅ Helps catch bugs  
✅ Improves code readability  
✅ Works great for teams  
✅ Provides runtime validation in dev mode

---

## 🧠 Pro Tip: Use with Default Props

You can also define default values:

```js
UserCard.defaultProps = {
  age: 18,
  isOnline: false
};
```

---

## 🔚 TL;DR

> **PropTypes** lets you validate props at runtime during development.  
> It's simple, flexible, and built into React (via `prop-types` package).

---




What are the recommended ways for static type checking?

Great question! Static type checking in React is super valuable for catching bugs early, improving auto-complete, and making your codebase more maintainable—especially in large apps.

---

## ✅ Recommended Ways for Static Type Checking in React:

### 1. **TypeScript** (⭐ Most Popular & Recommended)

TypeScript is a **strongly typed superset of JavaScript** that adds static type checking at compile time.

#### 🔥 Why Use TypeScript?
- Catches type errors **before you even run the code**
- Amazing **IDE support** (auto-complete, navigation, refactoring)
- Works great with modern React (including hooks and generics)

#### 🧠 Example:
```tsx
type UserCardProps = {
  name: string;
  age: number;
  isOnline?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({ name, age, isOnline = false }) => (
  <div>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
  </div>
);
```

> You can even type hooks, use generics, and infer types from APIs.

---

### 2. **PropTypes** (✅ Built-in Option)

We just covered this above 👆. PropTypes provides **runtime** type checking during development.

#### 📌 When to Use PropTypes:
- You’re not using TypeScript
- You want **lightweight validation**
- You’re working in a **small codebase** or legacy project

#### 🧠 Example:
```jsx
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isOnline: PropTypes.bool
};
```

> Not static—it catches errors at runtime, not during compile/build time.

---

### 3. **JSDoc Annotations + VSCode or Babel Plugins**

For JS users who don’t want to adopt TypeScript fully, you can still get type hints using **JSDoc comments** and IDE support.

#### 🧠 Example:
```js
/**
 * @param {{ name: string, age: number }} props
 */
function UserCard(props) {
  return <div>{props.name} - {props.age}</div>;
}
```

> ✅ Provides autocomplete and hints  
> ❌ Doesn’t offer strict enforcement or true static checking

---

## ⚖️ Comparison Table

| Feature                 | TypeScript      | PropTypes     | JSDoc + JS       |
|-------------------------|----------------|---------------|------------------|
| Static checking         | ✅ Yes          | ❌ No         | ⚠️ Partial (IDE only) |
| Runtime validation      | ❌ No           | ✅ Yes        | ❌ No             |
| Learning curve          | Medium          | Easy          | Easy             |
| Tooling & IDE support   | ⭐ Excellent     | Good          | Moderate         |
| Recommended for large apps | ✅ Yes      | ❌ Not ideal   | ❌ Not ideal      |

---

## 🏆 TL;DR

> For modern React apps, **TypeScript is the best way** to do static type checking.  
> Use **PropTypes** only if you're sticking with plain JavaScript.

---



What is the use of the react-dom package?
Great question! The `react-dom` package is a **core part of React**—it acts as the **bridge between React and the actual DOM** (i.e., the web browser).

---

## 🏗️ What is `react-dom`?

`react-dom` provides DOM-specific methods that let React **interact with the browser’s DOM**.  
Think of it like the engine that takes your React components and **renders them on screen**.

---

## 🚀 Common Use Cases

### 1. **`ReactDOM.render()`** (✅ React 17 and earlier)

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

> ✅ This renders your entire app inside a DOM element (`<div id="root">`)

> ⚠️ In React 18+, use `createRoot()` instead (see below 👇)

---

### 2. **`ReactDOM.createRoot()`** (✅ React 18+)

```jsx
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

> This is the modern way to enable **Concurrent Mode** and other React 18 features.

---

### 3. **`ReactDOM.hydrate()` / `hydrateRoot()`**

Used when **hydrating server-rendered HTML** in SSR apps (like with Next.js):

```jsx
ReactDOM.hydrate(<App />, document.getElementById('root'));
```

> Helps React “take over” already-rendered HTML sent from the server.

---

### 4. **`ReactDOM.unmountComponentAtNode()`**

Used to **remove a React component** from the DOM:

```jsx
ReactDOM.unmountComponentAtNode(document.getElementById('modal'));
```

---

### 5. **`ReactDOM.createPortal()`**

Allows you to **render a child into a different part of the DOM**, outside the normal parent hierarchy. Perfect for **modals, tooltips, or overlays**:

```jsx
import ReactDOM from 'react-dom';

ReactDOM.createPortal(
  <ModalContent />,
  document.getElementById('modal-root')
);
```

---

## 🧠 Summary

| Method                        | Purpose                                           |
|-------------------------------|--------------------------------------------------|
| `render()`                    | Mount React app (pre-React 18)                   |
| `createRoot().render()`       | Mount React app (React 18+)                      |
| `hydrate()` / `hydrateRoot()` | Hydrate SSR HTML                                 |
| `unmountComponentAtNode()`    | Remove component from DOM                        |
| `createPortal()`              | Render outside of normal DOM hierarchy           |

---

## ✅ TL;DR

> **`react-dom` is the package that tells React where and how to render components into the real DOM.**  
> It powers rendering, portals, hydration, and more.

---

 Check out the [React Portals](https://reactjs.org/docs/portals.html) documentation.


What is ReactDOMServer?
Awesome question! `ReactDOMServer` is another key part of the React ecosystem—but instead of dealing with the **browser**, it helps React render on the **server**.

---

## 🧠 What is `ReactDOMServer`?

`ReactDOMServer` is a Node.js-specific package that allows you to **render React components to static HTML on the server**.

This is a major part of **Server-Side Rendering (SSR)** in React.

---

## 📦 How to Use It

You import it like this (on the server):

```js
import ReactDOMServer from 'react-dom/server';
```

Then use it to generate HTML from React components.

---

## 🔧 Common Methods in `ReactDOMServer`

### 1. **`renderToString()`**

Renders your component to an HTML string.  
Commonly used in SSR frameworks like Next.js, Express + React, etc.

```js
const html = ReactDOMServer.renderToString(<App />);
```

> Returns a string like:  
> `"<div><h1>Hello</h1></div>"`

---

### 2. **`renderToStaticMarkup()`**

Similar to `renderToString()` but **doesn't include React attributes** (`data-reactroot`, etc.).  
Useful for rendering **static** HTML pages (e.g., email templates, marketing pages).

```js
const html = ReactDOMServer.renderToStaticMarkup(<App />);
```

---

### 3. **React 18+ Streaming APIs**

React 18 introduced new **streaming SSR** methods like:

```js
renderToPipeableStream()  // for Node.js streams
renderToReadableStream()  // for web environments
```

These enable **streaming HTML** to the client as it's generated—great for performance!

---

## ✅ Why Use ReactDOMServer?

- ⚡️ Faster **initial load time** (send HTML first, hydrate later)
- 📈 Better **SEO** (search engines see real content)
- 🔒 Works well with frameworks like **Next.js**, **Remix**, **Astro**, etc.
- 📨 Can be used to build **static site generators**, **HTML emails**, or **AMP pages**

---

## 📌 TL;DR

> **`ReactDOMServer` lets you render React components to HTML on the server.**  
> It’s the backbone of SSR in React apps and helps with SEO, performance, and server-generated content.

---


How do you use innerHTML in React?

Using `innerHTML` in React is **not recommended by default** because of security concerns (⚠️ XSS attacks), but React provides a **safe and intentional way** to use it when you really need to.

---

## 🧠 React’s Way: `dangerouslySetInnerHTML`

React **doesn’t let you set `innerHTML` directly** like you would in vanilla JS.  
Instead, it uses a prop called **`dangerouslySetInnerHTML`** to signal that you know the risks.

---

### ✅ Example

```jsx
function MyComponent() {
  const rawHtml = '<strong>Hello</strong> <em>world</em>';

  return (
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  );
}
```

---

### ⚠️ Why “Dangerous”?

- This can open up your app to **cross-site scripting (XSS)** if you inject untrusted user input.
- Never use it with un-sanitized or third-party content.

---

### 🛡 Pro Tip: Sanitize Before Use

If you must insert user-generated HTML, use a sanitizing library like:

- [`DOMPurify`](https://github.com/cure53/DOMPurify)
- `sanitize-html`

#### Example with DOMPurify:

```js
import DOMPurify from 'dompurify';

const cleanHtml = DOMPurify.sanitize(userInput);

<div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
```

---

## ❌ Don't Do This in React:

```js
// This won't work in JSX:
<div innerHTML="Some <b>bold</b> text" />
```

React doesn't allow it—you must use `dangerouslySetInnerHTML`.

---

## ✅ TL;DR

> Use `dangerouslySetInnerHTML={{ __html: htmlString }}` to set raw HTML in React.  
> **Always sanitize** the HTML to avoid security issues.

---


How do you apply styles in React?
Styling in React is super flexible! You’ve got multiple options depending on your project’s needs—from simple inline styles to full-blown CSS-in-JS libraries. Let’s walk through them 👇

---

## ✅ 1. **Inline Styles**

You can pass a style object directly using the `style` prop.

```jsx
function Button() {
  return (
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
      Click Me
    </button>
  );
}
```

> ✅ Styles are written as **camelCase** (`backgroundColor` instead of `background-color`)  
> ❌ No pseudo-classes or media queries

---

## ✅ 2. **CSS Stylesheets**

Just import a regular CSS file into your component.

```jsx
// App.css
.button {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

```jsx
// App.js
import './App.css';

function Button() {
  return <button className="button">Click Me</button>;
}
```

> ✅ Familiar, easy to use  
> ❌ Global scope (can lead to name clashes)

---

## ✅ 3. **CSS Modules**

Scoped CSS that avoids name collisions by generating unique class names.

```css
/* Button.module.css */
.button {
  background-color: green;
  color: white;
}
```

```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

> ✅ Scoped styles per component  
> 🔐 Safer for large apps  
> 🟢 Recommended for most React projects

---

## ✅ 4. **Styled Components (CSS-in-JS)**

Using libraries like `styled-components`, `emotion`, etc.

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: purple;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click Me</Button>;
}
```

> ✅ Dynamic styling with props  
> ✅ No CSS files  
> 💡 Great for component-driven design systems

---

## ✅ 5. **Tailwind CSS**

A utility-first CSS framework that lets you write styles in className strings.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

```jsx
function Button() {
  return <button className="bg-red-500 text-white p-2 rounded">Click Me</button>;
}
```

> ⚡️ Fast to build UI  
> ✅ Utility-based, avoids writing custom CSS  
> 🔁 Very popular in modern projects

---

## ✅ TL;DR: Which One to Use?

| Method              | Best For                                         |
|---------------------|--------------------------------------------------|
| **Inline Styles**   | Quick, simple styles, dynamic inline changes     |
| **CSS Stylesheets** | Small or legacy apps                            |
| **CSS Modules**     | Component-scoped styles in large codebases       |
| **Styled Components** | Design systems, reusable styled components     |
| **Tailwind CSS**    | Fast prototyping, utility-based design systems   |

---



How are events different in React?

Great question! Events in React are **similar to DOM events** in plain HTML/JavaScript, but they have a few **important differences** that make them more consistent and cross-browser compatible.

---

## 🎯 Key Differences Between React Events and HTML DOM Events

| Feature | HTML DOM | React |
|--------|----------|-------|
| Syntax | Lowercase (`onclick`) | CamelCase (`onClick`) |
| Event Type | Native DOM Events | Synthetic Events |
| Event Binding | Via attributes or `addEventListener` | Passed as props in JSX |
| Performance | Native | Lightweight Synthetic abstraction |
| Cross-browser | Inconsistent handling possible | Unified behavior across all browsers |

---

## 🧠 1. **React uses CamelCase for event names**

```jsx
// HTML
<button onclick="handleClick()">Click me</button>

// React
<button onClick={handleClick}>Click me</button>
```

---

## 🧠 2. **React wraps events in SyntheticEvent**

React uses a **SyntheticEvent** to wrap native browser events. This ensures that events behave consistently across all browsers.

```jsx
function handleClick(e) {
  console.log(e); // SyntheticEvent
  console.log(e.nativeEvent); // Actual browser event
}
```

> 🛡️ Synthetic events normalize things like `event.stopPropagation()` and `event.preventDefault()`.

---

## 🧠 3. **React events are attached to the root, not directly on DOM elements**

React uses **event delegation** under the hood by attaching a single event listener at the root of the DOM (`document` or `root`). This improves performance, especially in large apps.

---

## 🧠 4. **You use functions, not strings**

In React, you **pass a reference to a function**, not a string of code.

```jsx
// HTML (bad practice in React)
<button onclick="alert('hi')">Click</button>

// React
<button onClick={() => alert('hi')}>Click</button>
```

---

## ✅ TL;DR

> React events are **synthetic**, **cross-browser safe**, and use **camelCase naming**.  
> They behave just like native events—but with smoother, more consistent handling under the hood.

---

What is the impact of using indexes as keys?

Great question! Using **indexes as keys** in React can seem convenient—but it often leads to **unexpected bugs** and **performance issues**, especially in dynamic lists.

---

## 🧠 First, what are “keys” in React?

Keys help React **identify which items have changed, been added, or removed** in a list.  
They’re essential for React’s **reconciliation algorithm** to optimize rendering.

```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

---

## 🧨 What happens if you use `index` as the key?

```jsx
items.map((item, index) => <li key={index}>{item.name}</li>)
```

This works—but it can cause problems **if the list is reordered, filtered, or modified**.

---

## ⚠️ Problems with Using Index as Key

### 1. **Incorrect Component Reuse**

React may **reuse the wrong component instance**, leading to:

- Unexpected re-renders
- Lost focus in inputs
- Broken animations
- Form state being tied to the wrong row

---

### 2. **Inefficient Reconciliation**

Using indexes means React can’t accurately tell **what changed**, so it may:

- Re-render the **entire list**
- Lose internal component state

---

### 3. **Bugs in Editable or Reorderable Lists**

For example, imagine an input inside a list item:

```jsx
const [list, setList] = useState(['A', 'B', 'C']);
```

If you reorder or delete items and use index as key, React may **assign the wrong input state to the wrong item**.

---

## ✅ When *can* you use index as a key?

- The list is **static** (never changes order or contents)
- You’re **100% sure** the items won’t be added, removed, or reordered
- The list is **short** and non-interactive

Otherwise: **use a stable, unique ID** as the key (like a database ID or UUID).

---

## ✅ Better Example

```jsx
items.map(item => (
  <li key={item.id}>{item.name}</li>
));
```

---

## 🧠 TL;DR

> Avoid using indexes as keys **unless the list is static and never changes**.  
> Prefer a **unique and stable identifier** to keep your UI predictable and bug-free.

---


Why do we need to be careful when spreading props on DOM elements?
Awesome question—and a super important one when writing clean, bug-free React code!

---

## 🧠 Why be careful with spreading props on DOM elements?

When you use the **spread operator (`...`) on DOM elements**, you might accidentally pass **invalid or unexpected props**—which can cause:

- ❌ **React warnings in the console**
- ❌ **Invalid HTML attributes**
- ❌ **Security risks (e.g., leaking sensitive info)**
- ❌ **Unexpected behavior**

---

## 🔥 Example of Dangerous Prop Spreading

```jsx
function Button(props) {
  return <button {...props}>Click Me</button>;
}
```

Now if you render it like:

```jsx
<Button type="submit" aria-label="submit" onClick={handleClick} customProp="oops" />
```

The `customProp="oops"` will get passed directly to the native `<button>` element.

---

### ❗️ Problem:
HTML doesn’t know what `customProp` is, so React will log a warning:

> "React does not recognize the `customProp` prop on a DOM element..."

That’s because **DOM elements should only receive valid HTML attributes**.

---

## ✅ Better Way: Whitelist Props

Only pass down the props you actually need:

```jsx
function Button({ type = "button", onClick, children, ...rest }) {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
```

Or even more strict:

```jsx
function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}
```

---

## 🛡 Best Practices

| ✅ Do | ❌ Avoid |
|------|---------|
| Filter props before spreading | Blindly using `{...props}` on DOM elements |
| Use `prop-types` or TypeScript for safety | Passing unknown or unvalidated props |
| Spread only onto **custom components**, not native DOM elements | |

---

## ✅ TL;DR

> Spreading `...props` onto native DOM elements can leak unwanted attributes, cause warnings, and create bugs.  
> Always **validate or filter** props before passing them to the DOM.

---


How do you implement Server-Side Rendering (SSR)?

Implementing **Server-Side Rendering (SSR)** in React means rendering your components to HTML on the **server**, sending that to the client, and then letting React “hydrate” it so it becomes interactive. SSR improves performance and SEO—especially for content-rich or public-facing sites.

Let’s break it down 🔧

---

## ✅ 1. **What You Need for SSR in React**

You’ll typically need:

- `React`
- `ReactDOMServer` (to render components on the server)
- `Express` or another Node.js server
- A bundler (like Webpack or Vite, or a framework like Next.js)

---

## ✅ 2. **Minimal SSR Setup with React + Express**

### 📁 File Structure

```
/server
  └── index.js
/src
  └── App.jsx
  └── index.js (client entry)
/public
  └── index.html
```

---

### 🧠 1. `App.jsx` — Your React Component

```jsx
// src/App.jsx
import React from 'react';

export default function App() {
  return <h1>Hello from React SSR!</h1>;
}
```

---

### 🔥 2. `index.js` — Server Entry (Express + ReactDOMServer)

```js
// server/index.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head><title>React SSR</title></head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `;
  
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

### 🔌 3. `index.js` — Client Entry (Hydration)

```jsx
// src/index.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

hydrateRoot(document.getElementById('root'), <App />);
```

---

### ⚙️ 4. Build with Webpack or Vite

You’ll need two bundles:

- **Server bundle**: runs in Node.js (does SSR)
- **Client bundle**: runs in the browser (hydrates)


---

## 🚀 Want It Easier? Use Next.js

React’s official SSR framework:  
```bash
npx create-next-app my-app
```

- Pages are SSR by default (`getServerSideProps`)
- Static Generation (`getStaticProps`) also supported
- Built-in routing, image optimization, hydration, etc.

---

## ✅ TL;DR

> To implement SSR:
> - Use `ReactDOMServer.renderToString()` on the server
> - Serve the HTML with React markup
> - Hydrate it on the client using `hydrateRoot()`
> - OR use a framework like **Next.js** to abstract all the boilerplate

---



How do you enable production mode in React?

Enabling **production mode** in React is essential for performance—it strips out helpful dev warnings and includes optimizations like smaller bundle sizes and faster rendering.

Here’s how to enable it depending on how you’re building your React app:

---

## ✅ 1. **Create React App (CRA)**

If you’re using `create-react-app`, just run:

```bash
npm run build
```

This automatically sets `NODE_ENV=production` and optimizes your app.

Then, serve the app using something like:

```bash
npx serve -s build
```

> ⚡ `npm run build` = optimized production bundle  
> 🚫 No need to manually set `NODE_ENV`

---

## ✅ 2. **Custom Webpack Setup**

Make sure you set the `mode` to `'production'` in `webpack.config.js`:

```js
module.exports = {
  mode: 'production',
  // other config...
};
```

Also, in your build script or CI pipeline:

```bash
NODE_ENV=production webpack --config webpack.config.js
```

Or in `package.json`:

```json
"scripts": {
  "build": "NODE_ENV=production webpack"
}
```

> `NODE_ENV=production` triggers React's production mode  
> React removes dev-only checks, warnings, and extra logging

---

## ✅ 3. **Vite / Rollup / Parcel**

These modern bundlers automatically set `NODE_ENV` to `production` when you run a production build:

- **Vite:** `npm run build`
- **Parcel:** `parcel build entry.js`
- **Rollup:** `rollup -c`

Still, make sure you use:

```bash
process.env.NODE_ENV === 'production'
```

in your code to gate debug-only logic.

---

## ✅ 4. **Manually in Node.js (SSR)**

If you're using SSR (e.g., Express + ReactDOMServer):

```bash
NODE_ENV=production node server.js
```

In your code:

```js
if (process.env.NODE_ENV === 'production') {
  // Enable caching, minification, etc.
}
```

---

## ⚠️ Don't Forget

- Production builds **must use minified React**.
- Use `react.production.min.js` if manually linking React from CDN.
- Avoid shipping development-only tools like React DevTools in prod.

---

## ✅ TL;DR

| Setup             | How to Enable Production |
|------------------|---------------------------|
| CRA              | `npm run build`           |
| Webpack          | `mode: "production"` + `NODE_ENV=production` |
| Vite / Parcel    | `npm run build`           |
| SSR / Node.js    | `NODE_ENV=production node server.js` |

---


Do Hooks replace render props and higher-order components?

Yes, **React Hooks** are often considered a more modern and cleaner alternative to both **render props** and **higher-order components (HOCs)** in many cases. However, it's important to note that **Hooks do not completely replace** these patterns—they simply provide a new way to handle certain patterns that were previously handled by render props and HOCs.

Let’s break it down:

---

## ✅ **1. Hooks vs. Render Props**

### What are Render Props?
Render props is a pattern where a component takes a function as a prop, which it calls to render its UI. The function typically receives data or logic to be used inside the component.

Example of **Render Props**:

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker render={position => (
      <h1>Mouse position: {position.x}, {position.y}</h1>
    )} />
  );
}
```

### With **Hooks**:
Instead of using the render prop pattern, you can use **custom hooks** to share logic and state across components.

```jsx
function useMouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

function App() {
  const position = useMouseTracker();

  return <h1>Mouse position: {position.x}, {position.y}</h1>;
}
```

### Benefits of **Hooks** over Render Props:
- **Cleaner code**: With hooks, the logic is encapsulated in functions, making components easier to read and test.
- **Avoid prop drilling**: Hooks can share logic across components without having to pass data through intermediate layers.
- **No need for extra components**: You no longer need to create an intermediary component just for the render prop pattern.

---

## ✅ **2. Hooks vs. Higher-Order Components (HOCs)**

### What are HOCs?
A **Higher-Order Component** is a pattern where a function takes a component and returns a new component with enhanced functionality.

Example of **HOC**:

```jsx
function withMouseTracker(Component) {
  return function MouseTrackerHOC(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return <Component {...props} position={position} />;
  };
}

function App({ position }) {
  return <h1>Mouse position: {position.x}, {position.y}</h1>;
}

const EnhancedApp = withMouseTracker(App);
```

### With **Hooks**:
You can achieve the same effect without creating an HOC by using hooks directly in your components.

```jsx
function useMouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

function App() {
  const position = useMouseTracker();

  return <h1>Mouse position: {position.x}, {position.y}</h1>;
}
```

### Benefits of **Hooks** over HOCs:
- **No wrapper component**: With HOCs, you wrap your component inside another, leading to potentially deep and confusing component trees. Hooks allow you to directly apply the logic to your component.
- **Cleaner and more flexible**: Hooks enable the reuse of stateful logic without changing the component structure or nesting.
- **No prop collisions**: In HOCs, props are passed through and might cause name collisions. Hooks don't have this issue because they don't modify the component props.

---

## ⚡ **In Summary**:
- **Hooks** can replace **render props** and **HOCs** in many cases by providing a simpler, cleaner way to share stateful logic and side effects.
- **Hooks** are more flexible and readable, and they avoid issues like prop drilling and extra wrapper components.
- **Render props** and **HOCs** still have their place in some scenarios, but **hooks are generally preferred** for new development in React.

---



What is a switching component?

A **switching component** in React refers to a component that dynamically changes between different states, views, or components based on some condition. It typically toggles between two or more UI elements depending on factors like user interaction, routing, or internal application state.

In React, switching components are commonly used for:

1. **Conditional Rendering**: Showing different UI elements based on conditions.
2. **Tab Components**: Switching between different views in a tabbed interface.
3. **Route Switching**: Displaying different components based on the URL or application state.
4. **State-driven View Changes**: Displaying different UI for different application states (e.g., loading, error, success).

### Types of Switching Components:

---

## 1. **Conditional Rendering with JSX**

You can use JavaScript's conditional logic to render different components based on the state or props.

```jsx
function Switcher({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <button>Log In</button>}
    </div>
  );
}
```

Here, the component switches between displaying a welcome message or a login button based on the `isLoggedIn` state.

---

## 2. **Switching Components in Tabs**

A **tab switcher** is a common use case for switching between multiple views or components:

```jsx
function TabSwitcher() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <button onClick={() => setActiveTab('home')}>Home</button>
      <button onClick={() => setActiveTab('profile')}>Profile</button>

      {activeTab === 'home' && <div>Home Content</div>}
      {activeTab === 'profile' && <div>Profile Content</div>}
    </div>
  );
}
```

In this example, the component switches between "Home" and "Profile" content depending on the active tab.

---

## 3. **Using React Router for Route-based Switching**

A routing component like `React Router` lets you switch between different components/views based on the current URL.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}
```

The `<Switch>` component switches between different routes (components) depending on the URL path.

---

## 4. **State-driven View Switching**

Switching components can also be used to display different views based on a state, such as showing a loading spinner, error message, or the main content.

```jsx
function ContentSwitcher() {
  const [state, setState] = useState('loading'); // 'loading', 'success', or 'error'

  let content;
  if (state === 'loading') {
    content = <div>Loading...</div>;
  } else if (state === 'error') {
    content = <div>Error loading data!</div>;
  } else {
    content = <div>Content loaded successfully!</div>;
  }

  return (
    <div>
      <button onClick={() => setState('loading')}>Load</button>
      {content}
    </div>
  );
}
```

This component switches between different content based on the `state` variable.

---

## TL;DR

A **switching component** in React dynamically changes the UI based on some conditions. Common use cases include:

- **Conditional rendering** (e.g., showing different content based on state)
- **Tab switching** (displaying different views based on user selection)
- **Route-based switching** (using `React Router` to switch components based on URL)
- **State-driven view changes** (e.g., showing loading, success, or error states)

Switching components make your UI interactive and responsive to various application states.

---


What are React Mixins?

**React Mixins** were a feature used in earlier versions of React to allow code reuse across multiple components. They are **objects** that contain methods, which are injected into the component class, adding shared behavior. However, **mixins** are now **deprecated** in React (since React 16.3) due to issues with naming conflicts, difficulty in debugging, and the introduction of **Hooks**, which provide a cleaner and more modular approach to sharing logic between components.

---

## ✅ **What Are Mixins?**

Mixins were used to share common functionality between React components. A mixin was simply an object containing functions that could be reused in different components.

### Example of Using Mixins (Old Way):
```jsx
const MyMixin = {
  componentDidMount() {
    console.log('Mixin componentDidMount');
  },
  handleClick() {
    console.log('Mixin handleClick');
  },
};

class MyComponent extends React.Component {
  mixins: [MyMixin];

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

In this example:
- The `MyMixin` object contains `componentDidMount` and `handleClick` methods.
- The `MyComponent` class uses the `mixins` array to add the behavior from `MyMixin`.

---

## ❌ **Problems with Mixins**

React Mixins caused several issues that led to their deprecation:

1. **Naming Conflicts**: If multiple mixins defined methods with the same name, there was no clear resolution for which method should be called.
2. **Implicit Dependencies**: It was unclear from the component itself which methods were coming from which mixins, leading to poor maintainability and debugging difficulties.
3. **Unclear Composition**: It could be difficult to understand the behavior of components that used multiple mixins, as the source of various methods wasn’t clear.

---

## ✅ **How to Achieve the Same with Modern React Features**

Instead of using mixins, React developers now use **Hooks**, **Higher-Order Components (HOCs)**, or **render props** to reuse logic across components. These methods allow you to share stateful logic or side effects in a more explicit and predictable way.

---

### Example Using Hooks (Replacing Mixins)

```jsx
import React, { useState, useEffect } from 'react';

// Custom Hook (replaces mixin)
function useClickLogger() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  const handleClick = () => {
    console.log('Button clicked');
  };

  return handleClick;
}

function MyComponent() {
  const handleClick = useClickLogger();

  return <button onClick={handleClick}>Click Me</button>;
}
```

In this modern example:
- The **`useClickLogger`** hook encapsulates the logic that was previously inside the mixin.
- It’s easy to reuse `useClickLogger` in any component without worrying about name conflicts or the complexity of mixin composition.

---

### Using HOCs (Higher-Order Components)

HOCs can also replace mixins by wrapping a component and injecting additional behavior.

```jsx
function withClickLogger(Component) {
  return function WrappedComponent(props) {
    useEffect(() => {
      console.log('Component mounted');
    }, []);
    
    const handleClick = () => {
      console.log('Button clicked');
    };

    return <Component {...props} onClick={handleClick} />;
  };
}

function MyComponent() {
  return <button>Click Me</button>;
}

export default withClickLogger(MyComponent);
```

Here, `withClickLogger` is an HOC that enhances `MyComponent` with the click logging functionality.

---

## TL;DR

- **Mixins** were a pattern used in React for code reuse but have been **deprecated** due to problems with naming conflicts, debugging, and unclear composition.
- Today, **Hooks**, **Higher-Order Components (HOCs)**, and **render props** are the preferred methods for reusing logic in React.
- **Hooks** provide a cleaner, more modular way to share stateful logic between components.

---

What are the pointer events supported in React?
In React, **Pointer Events** are a set of events that can be used to handle interactions from various input devices like a mouse, touch, or stylus. They provide a more unified approach to handling different types of user input compared to separate events like `mouse`, `touch`, or `keyboard`.

Pointer events are part of the **Pointer Events API**, and React supports them just like other events such as `click`, `hover`, etc.

Here are the main **pointer events** supported in React:

---

## ✅ **1. `onPointerDown`**

Triggered when a pointer (mouse, touch, or stylus) makes contact with the screen or an element.

```jsx
function App() {
  const handlePointerDown = (e) => {
    console.log('Pointer down!', e);
  };

  return <div onPointerDown={handlePointerDown}>Click or Touch Me!</div>;
}
```

---

## ✅ **2. `onPointerUp`**

Triggered when a pointer is released after making contact with the screen or an element.

```jsx
function App() {
  const handlePointerUp = (e) => {
    console.log('Pointer up!', e);
  };

  return <div onPointerUp={handlePointerUp}>Click or Touch Me!</div>;
}
```

---

## ✅ **3. `onPointerMove`**

Triggered when a pointer moves over an element.

```jsx
function App() {
  const handlePointerMove = (e) => {
    console.log('Pointer is moving!', e);
  };

  return <div onPointerMove={handlePointerMove}>Move Your Pointer Here</div>;
}
```

---

## ✅ **4. `onPointerEnter`**

Triggered when a pointer enters an element. This is similar to `onMouseEnter` but works with any pointer device.

```jsx
function App() {
  const handlePointerEnter = (e) => {
    console.log('Pointer entered!', e);
  };

  return <div onPointerEnter={handlePointerEnter}>Hover Here!</div>;
}
```

---

## ✅ **5. `onPointerLeave`**

Triggered when a pointer leaves an element. Similar to `onMouseLeave`, but works with any pointer device.

```jsx
function App() {
  const handlePointerLeave = (e) => {
    console.log('Pointer left!', e);
  };

  return <div onPointerLeave={handlePointerLeave}>Hover Here!</div>;
}
```

---

## ✅ **6. `onPointerCancel`**

Triggered when a pointer event is canceled, typically due to an interrupt, like the user switching to another window or an OS-level gesture.

```jsx
function App() {
  const handlePointerCancel = (e) => {
    console.log('Pointer event was canceled!', e);
  };

  return <div onPointerCancel={handlePointerCancel}>Click or Touch Me!</div>;
}
```

---

## ✅ **7. `onGotPointerCapture`**

Triggered when an element gains pointer capture, meaning it starts receiving pointer events even if the pointer moves outside of it.

```jsx
function App() {
  const handleGotPointerCapture = (e) => {
    console.log('Pointer captured!', e);
  };

  return <div onGotPointerCapture={handleGotPointerCapture}>Click or Touch Me!</div>;
}
```

---

## ✅ **8. `onLostPointerCapture`**

Triggered when an element loses pointer capture, meaning it will no longer receive pointer events if the pointer moves outside of it.

```jsx
function App() {
  const handleLostPointerCapture = (e) => {
    console.log('Pointer lost capture!', e);
  };

  return <div onLostPointerCapture={handleLostPointerCapture}>Click or Touch Me!</div>;
}
```

---

## **Pointer Event Object**

The **event object** passed to pointer event handlers in React contains useful properties to understand the pointer interaction:

- `pointerId`: Unique identifier for the pointer.
- `pointerType`: The type of input device (e.g., `mouse`, `pen`, or `touch`).
- `clientX`, `clientY`: The coordinates of the pointer in relation to the viewport.
- `screenX`, `screenY`: The coordinates of the pointer in relation to the screen.
- `pressure`: A number between 0 and 1 representing the pressure applied on the input device (useful for touch and stylus).

Example:

```jsx
function App() {
  const handlePointerDown = (e) => {
    console.log(`Pointer Type: ${e.pointerType}`);
    console.log(`Pointer Position: (${e.clientX}, ${e.clientY})`);
  };

  return <div onPointerDown={handlePointerDown}>Click or Touch Me!</div>;
}
```

---

## **Why Use Pointer Events in React?**

1. **Unified Input Model**: Pointer events provide a unified model for handling different types of input devices (mouse, touch, stylus).
2. **More Features**: Pointer events expose additional information (like `pressure` and `tilt` for stylus input) that mouse and touch events do not provide.
3. **Better Performance**: Pointer events are optimized for touch and mouse interactions, making them more efficient in certain situations.

---

## TL;DR

Here are the **pointer events** supported in React:

1. `onPointerDown`
2. `onPointerUp`
3. `onPointerMove`
4. `onPointerEnter`
5. `onPointerLeave`
6. `onPointerCancel`
7. `onGotPointerCapture`
8. `onLostPointerCapture`

These events provide a unified way to handle **mouse**, **touch**, and **stylus** interactions, offering greater flexibility and additional features compared to traditional mouse or touch events.

---

Why should component names start with a capital letter?
In **React**, component names should start with a capital letter due to the way React treats **DOM elements** and **custom components**. Here's why:

### 1. **Distinguishing Between DOM Elements and Components**
   - **DOM elements** (like `div`, `span`, `p`, `h1`, etc.) are written in **lowercase**. React treats these as native HTML tags.
   - **Custom React components** should start with a **capital letter** to differentiate them from HTML tags. When React sees a capitalized name, it assumes it is a **component**, while lowercase names are treated as HTML elements.

### Example:

```jsx
// Correct usage:
const MyComponent = () => <div>Hello, world!</div>;

function App() {
  return <MyComponent />;
}

// Incorrect usage: React would treat it as a DOM element
function App() {
  return <myComponent />; // React will throw an error
}
```

In this example:
- `MyComponent` is a **custom component**, so it starts with a capital letter.
- `myComponent` (with a lowercase letter) would be treated as a **DOM element**, and React will not be able to find it as a valid component, leading to an error.

### 2. **React JSX Syntax**
React JSX uses **JavaScript expressions** within tags. Since JSX is **case-sensitive**, React follows the convention that components begin with a capital letter to differentiate between a **component** and a **DOM element**.

- If the component starts with a lowercase letter, React assumes it is a native HTML element, and this could lead to issues or unexpected behavior.

### 3. **Consistency with Other Libraries**
This convention of starting component names with a capital letter aligns with how other JavaScript libraries or frameworks (such as Vue.js or Angular) handle component naming conventions.

---

### TL;DR

Component names in React should start with a **capital letter** to differentiate them from **DOM elements**, as lowercase names are assumed to be native HTML tags. This naming convention helps React to correctly identify and render components.

---


How do you access props within attribute quotes?

In React, to **access props within attribute quotes**, you use **curly braces `{}`** to embed JavaScript expressions—including props—within JSX.

---

### ✅ **Basic Syntax**

```jsx
<MyComponent title={props.title} />
```

Here, you're accessing the `title` prop and passing it to `MyComponent`. The value of `title` is a **JavaScript expression**, not a string.

---

### 🔍 **Real Example**

Let's say you have a parent component passing a prop:

```jsx
function ParentComponent() {
  const username = "Alex";

  return <Greeting name={username} />;
}
```

Then in the `Greeting` component, you use the prop:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In the parent:
```jsx
<Greeting name={username} /> // ✅ This works
```

🚫 **Incorrect:**
```jsx
<Greeting name="props.username" /> // ❌ This passes a literal string "props.username"
```

✅ **Correct:**
```jsx
<Greeting name={props.username} /> // ✅ This evaluates the JavaScript expression
```

---

### 🧠 Why Curly Braces?

- Curly braces let you **embed JS expressions inside JSX**.
- Inside quotes (`"..."`) you're passing a **string literal**.
- So use quotes for static values, and `{}` for dynamic ones (like props, variables, or functions).

---

### TL;DR

| You want to pass...       | Use...             | Example                          |
|---------------------------|--------------------|----------------------------------|
| A string literal          | Quotes             | `<Component name="Alex" />`     |
| A variable or prop        | Curly braces       | `<Component name={props.name} />` |
| A function or expression  | Curly braces       | `<Component age={getAge()} />`  |

---


What is a React PropType array with shape?

In React, when using **PropTypes** for type-checking props, you can define a prop as an **array of objects** with a specific structure using `PropTypes.arrayOf(PropTypes.shape(...))`.

This is super useful when you want to validate that each object inside an array prop follows a specific "shape" or structure—i.e., has certain properties with specific types.

---

### ✅ **Syntax**

```jsx
Component.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
};
```

---

### 🔍 **Explanation**

- `items`: The name of the prop.
- `PropTypes.arrayOf(...)`: Asserts that `items` is an array.
- `PropTypes.shape({ ... })`: Defines the expected structure of **each object** in the array.
- `isRequired`: Enforces that the prop must be provided (and not `null` or `undefined`).

---

### 🧪 **Example Usage**

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} {user.active ? "(Online)" : "(Offline)"}</li>
      ))}
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
};
```

### ✅ Passed Correctly:
```jsx
<UserList users={[
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false }
]} />
```

### ❌ Incorrect Example:
```jsx
<UserList users={[
  { id: "1", name: "Alice" }, // id should be a number
  { name: "Bob", active: true } // missing id
]} />
```

React will warn you in the console about incorrect prop types when in **development mode**.

---

### TL;DR

- Use `PropTypes.arrayOf(PropTypes.shape({ ... }))` to validate an array of objects with a specific structure.
- Great for components that receive lists of structured data (like users, posts, products, etc).
- Helps catch bugs early by ensuring your props are passed in the expected format.

---



How do you conditionally apply class attributes?

In React, you can **conditionally apply class attributes** using **JavaScript expressions** inside the `className` prop. This gives you full control to toggle or combine classes based on state, props, or logic.

---

## ✅ 1. **Using Ternary Operator**

```jsx
<div className={isActive ? "btn active" : "btn"}>Click Me</div>
```

---

## ✅ 2. **Using Template Literals**

```jsx
<div className={`btn ${isActive ? "active" : ""}`}>Click Me</div>
```

---

## ✅ 3. **Using Logical AND (`&&`)**

```jsx
<div className={`btn ${isActive && "active"}`}>Click Me</div>
```

⚠️ This works but if `isActive` is false, you'll get `btn false`—which is technically harmless but not clean. Prefer ternary or helper libraries for clarity.

---

## ✅ 4. **Using `clsx` or `classnames` Libraries (Recommended for cleaner logic)**

### Install:
```bash
npm install clsx
```

### Usage:
```jsx
import clsx from 'clsx';

<div className={clsx("btn", { active: isActive, disabled: isDisabled })}>
  Click Me
</div>
```

- Adds `"active"` class if `isActive` is true.
- Adds `"disabled"` if `isDisabled` is true.

This is more readable for complex conditions.

---

## ✅ 5. **Function Example**

```jsx
function Button({ isPrimary }) {
  const btnClass = isPrimary ? "btn primary" : "btn secondary";
  return <button className={btnClass}>Submit</button>;
}
```

---

## TL;DR

| Technique               | Example                                  |
|------------------------|-------------------------------------------|
| Ternary                | `className={isActive ? "a" : "b"}`        |
| Template Literal       | ``className={`btn ${isActive ? "a" : ""}`}` |
| Logical AND            | `className={`btn ${isActive && "a"}`}`    |
| `clsx` or `classnames` | `className={clsx("btn", { active: cond })}` |

---

What is the difference between React and ReactDOM?

Great question! Understanding the difference between **React** and **ReactDOM** is essential because they serve **different purposes** in the React ecosystem:

---

## 🧠 **React vs ReactDOM**

| Feature        | `react`                                | `react-dom`                                  |
|----------------|-----------------------------------------|-----------------------------------------------|
| **Purpose**    | Core library for building UI components | DOM-specific methods to render React to the web |
| **Used For**   | Creating and managing components, hooks, context, etc. | Rendering to the DOM, managing DOM updates     |
| **Platform**   | Platform-agnostic (can be used for web, native, etc.) | Specific to **web apps** only                 |

---

## 🔍 Example Usage:

### `react` — Component logic and hooks:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### `react-dom` — Rendering to the DOM:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
```

---

## 🧩 Why Split Into Two Libraries?

1. **Separation of concerns**: React handles UI and component logic, while ReactDOM deals with rendering and DOM interactions.
2. **Platform flexibility**: You can use `react-native` for mobile apps, and it uses `react` (not `react-dom`) for shared logic.

---

## 🔧 Summary

| Library     | Role                                  |
|-------------|----------------------------------------|
| `react`     | Defines components, hooks, lifecycle, etc. |
| `react-dom` | Renders components into the browser DOM |

---


How do you use the React label element?

Using the `<label>` element in **React** is nearly the same as in regular HTML, but there are a few React-specific best practices and syntax tweaks you should know:

---

## ✅ 1. **Basic Usage (with `htmlFor`)**

In HTML, you’d use `for` to associate a label with an input.  
In React, use `htmlFor` (camelCase version) instead:

```jsx
<label htmlFor="email">Email:</label>
<input type="email" id="email" />
```

### 🔍 Why `htmlFor` instead of `for`?
- Because `for` is a **reserved word in JavaScript**, JSX uses `htmlFor` to avoid conflicts.

---

## ✅ 2. **Wrapping the Input (Alternative Way)**

If the input is **inside** the label, you don’t need `htmlFor`:

```jsx
<label>
  Email:
  <input type="email" />
</label>
```

---

## ✅ 3. **Using Label with State (Example)**

```jsx
function LoginForm() {
  const [email, setEmail] = React.useState("");

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
}
```

---

## ⚠️ Common Mistakes

| Mistake                       | Fix                             |
|------------------------------|----------------------------------|
| Using `for` instead of `htmlFor` | ✅ Use `htmlFor="inputId"`     |
| Forgetting to add `id` to input | Add `id` that matches `htmlFor` |
| No label for input            | Add label for accessibility     |

---

## 🧠 Accessibility Tip

Using `<label>` correctly improves accessibility:
- Screen readers can better understand what each input is for.
- Clicking the label focuses the input.

---

### TL;DR

- ✅ Use `htmlFor` instead of `for` in React.
- ✅ Use `id` on the input to link it.
- ✅ Labels improve UX and accessibility.

---

How do you combine multiple inline style objects?

In React, if you want to **combine multiple inline style objects**, you can use:

- **The spread operator (`...`)**
- **Utility functions (like `Object.assign`)**
- **Optional chaining or conditional styles**

---

## ✅ 1. **Using the Spread Operator**

```jsx
const baseStyle = {
  color: 'white',
  padding: '10px',
};

const highlightStyle = {
  backgroundColor: 'blue',
};

const combinedStyle = {
  ...baseStyle,
  ...highlightStyle,
};

<div style={combinedStyle}>Hello</div>
```

> Later styles **override** earlier ones if there's a conflict.

---

## ✅ 2. **Directly in JSX**

```jsx
<div style={{ ...baseStyle, ...highlightStyle }}>Hello</div>
```

---

## ✅ 3. **With Conditional Styles**

```jsx
const isActive = true;

<div
  style={{
    ...baseStyle,
    ...(isActive && { border: '2px solid lime' }),
  }}
>
  Hello
</div>
```

- If `isActive` is `true`, the border gets added.
- If `false`, it doesn't add anything.

---

## ✅ 4. **Using `Object.assign()` (less common)**

```jsx
const combinedStyle = Object.assign({}, baseStyle, highlightStyle);
```

- This works too but is more verbose than spreading.

---

### 🔥 Tip:
React style objects must use **camelCase** for CSS properties:

```jsx
const style = {
  backgroundColor: 'tomato', // ✅
  // background-color: 'tomato' ❌ (invalid in React)
};
```

---

## TL;DR

| Method           | Example                                      |
|------------------|----------------------------------------------|
| Spread Operator  | `{ ...a, ...b }`                             |
| Direct in JSX    | `<div style={{ ...a, ...b }}>`               |
| Conditional      | `{ ...(flag && { border: '1px solid red' }) }` |
| Object.assign    | `Object.assign({}, a, b)`                    |

---


How do you re-render the view when the browser is resized?

To **re-render the view when the browser is resized** in React, you can listen for the `resize` event using the `window` object and update component state when it changes. Updating state triggers a re-render — that’s the key!

---

## ✅ Step-by-Step (Functional Component with Hooks)

```jsx
import React, { useState, useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}
```

---

## 🧠 Key Concepts

| Concept       | Why it matters                          |
|---------------|------------------------------------------|
| `useEffect`   | Runs the resize listener on mount        |
| Cleanup       | Avoids memory leaks on unmount           |
| `useState`    | Updates state → triggers re-render       |
| `window.innerWidth` / `innerHeight` | Get current size  |

---

## ✅ Alternate with `useLayoutEffect` (if layout depends on size)

If the resize needs to be handled before painting, use `useLayoutEffect` instead of `useEffect`.

---

## ✅ Optional: Debounce Resize (performance)

```bash
npm install lodash
```

```jsx
import debounce from 'lodash/debounce';

useEffect(() => {
  const handleResize = debounce(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, 200);

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## TL;DR

- ✅ Listen to `resize` with `window.addEventListener`
- ✅ Update state → React re-renders
- ✅ Clean up listeners on unmount
- 🔥 Optional: Debounce for performance on rapid resize

---


How do you pretty-print JSON with React?
To **pretty-print JSON in React**, you can use `JSON.stringify()` with optional formatting parameters and display the result using `<pre>` or syntax highlighting if you want it fancy.

---

## ✅ Basic Pretty Print Using `<pre>`

```jsx
function PrettyJson({ data }) {
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
```

### Explanation:
- `data`: your JSON object
- `null`: replacer (not used here)
- `2`: indentation (2 spaces for readability)

---

## 🔍 Example Usage

```jsx
const user = {
  name: "Jane Doe",
  age: 28,
  skills: ["React", "Node", "GraphQL"]
};

<PrettyJson data={user} />
```

---

## 🎨 Optional: Add Styling

```jsx
<pre style={{ background: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
  {JSON.stringify(data, null, 2)}
</pre>
```

---

## 🔥 Bonus: With Syntax Highlighting

If you want to go further, use a package like [`react-json-view`](https://github.com/mac-s-g/react-json-view):

```bash
npm install react-json-view
```

```jsx
import ReactJson from 'react-json-view';

<ReactJson src={data} theme="monokai" />
```

---

## TL;DR

| Method                  | Output Style       | Use Case                            |
|-------------------------|--------------------|-------------------------------------|
| `JSON.stringify(obj, null, 2)` + `<pre>` | Text-based, simple | Built-in, good for debugging         |
| `react-json-view`       | Interactive        | Advanced UIs, collapsible views     |

---


Why can’t you update props in React?

Great question — this is one of the core principles of how React works! Let's break it down:

---

## ❓ Why **can’t you update props** in React?

Because **props are read-only** — they are passed **from parent to child** and should **never be modified** by the child component.

---

## 🧠 Analogy

Think of props like **function arguments**:

```js
function greet(name) {
  name = "Someone else"; // You can do this, but it's bad style!
}
```

Just like how you usually don't mutate arguments in functions, in React, you **don’t mutate props inside a component**.

---

## ✅ React Design Philosophy

| Concept       | Explanation                            |
|---------------|----------------------------------------|
| 🔒 **Immutability** | Props are meant to be immutable. This helps React optimize re-renders. |
| 🔁 **One-way data flow** | Data flows **down** from parent to child. Children **cannot push data back** by modifying props. |
| 🔧 **State is local** | If a component needs to manage data, it should use `state` or ask the parent to update the value via a callback. |

---

## 🛑 Example of What **Not** to Do

```jsx
function MyComponent(props) {
  props.title = "New Title"; // ❌ Don't do this
  return <h1>{props.title}</h1>;
}
```

---

## ✅ Correct Way: Ask Parent to Handle It

```jsx
function Parent() {
  const [title, setTitle] = useState("Hello");

  return <Child title={title} onChangeTitle={() => setTitle("New Title")} />;
}

function Child({ title, onChangeTitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onChangeTitle}>Change Title</button>
    </div>
  );
}
```

---

## 🔥 TL;DR

- ❌ You can’t update props because they're read-only.
- ✅ Use **state** to manage internal changes.
- ✅ Use **callbacks** to ask the parent to update props.

---


How do you focus an input element on page load?

To **focus an input element on page load in React**, you can use the `useRef` hook to get a reference to the input and call `.focus()` inside a `useEffect` that runs once when the component mounts.

---

## ✅ Example: Auto-focus an Input on Mount

```jsx
import React, { useEffect, useRef } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // focuses the input on page load
  }, []);

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input ref={inputRef} id="name" type="text" />
    </div>
  );
}
```

---

## 🔍 Key Concepts

| Hook      | Purpose                                    |
|-----------|--------------------------------------------|
| `useRef`  | Creates a reference to the input element   |
| `useEffect` | Runs code after the component mounts     |
| `.focus()` | Calls native DOM method to focus input    |

---

## ⚠️ Things to Watch For

- `inputRef.current` might be `null` on the first render — always check before calling `.focus()`.
- This works only in client-side rendering — if you're using SSR (like Next.js), guard it with `typeof window !== "undefined"` if needed.

---

## TL;DR

- 🧠 Use `useRef()` to reference the input.
- 🚀 Use `useEffect()` to trigger `.focus()` after mount.
- ✅ Simple and clean!

---


How can you find the version of React at runtime in the browser?

To find the version of React at **runtime** in the browser, you can access the `React` object (if it is available globally) and check its version.

### Here’s how you can do it:

### ✅ 1. **Using `React.version`**

If React is available globally (i.e., you're using a CDN or React is globally scoped), you can access `React.version` directly in the browser’s developer tools:

1. Open the **Developer Tools** (right-click on the page → **Inspect** → **Console**).
2. Type the following in the console:

```js
console.log(React.version);
```

This will output the version of React being used.

### Example Output:

```js
"18.2.0"
```

---

### ✅ 2. **If React is Not Globally Available**

If React is not globally scoped (like when you're using a bundler like Webpack, Parcel, or Next.js), you won't be able to access `React.version` directly in the browser console. However, you can still find the version through your **build tools**.

#### Steps for Webpack (or similar bundlers):
- In your `package.json`, look under **dependencies** for the React version:

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

#### Steps for `npm`:
- Run the following in your terminal:

```bash
npm list react
```

This will show the installed version of React in your project.

---

### TL;DR:

- **In browser console**: `console.log(React.version);`
- **If React is bundled**: Check the `package.json` or use `npm list react`.

---

How do you add Google Analytics for React Router?
To **add Google Analytics** for **React Router**, you need to send pageview events to Google Analytics whenever the route changes. You can achieve this by listening to **route changes** and calling `gtag` or `window.ga` (depending on how you're using Google Analytics) each time the route changes.

---

### ✅ Step-by-Step Guide to Add Google Analytics for React Router

#### 1. **Install Google Analytics**

First, make sure you have Google Analytics set up for your project. If you haven't added Google Analytics to your app, you'll need to do so:

- **Using `gtag.js`** (recommended for most modern setups):

Add this to your `index.html` (inside the `<head>` tag):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');  // Replace with your Google Analytics tracking ID
</script>
```

#### 2. **Install React Router (If Not Already Installed)**

```bash
npm install react-router-dom
```

#### 3. **Track Route Changes with Google Analytics**

To **track pageviews** whenever the route changes, use the `useEffect` hook and `useLocation` hook from `react-router-dom` to listen for route changes.

```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics (gtag.js) tracking page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }

    // Alternatively, if you are using Universal Analytics (analytics.js):
    if (window.ga) {
      window.ga('set', 'page', location.pathname + location.search);
      window.ga('send', 'pageview');
    }
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <div>
      <h1>My React App</h1>
      {/* Your routing setup */}
    </div>
  );
}

export default App;
```

---

### 🧠 **How It Works**

1. **`useLocation`**: React Router's `useLocation` hook provides the current URL (path, query string, etc.) whenever it changes.
2. **`useEffect`**: The `useEffect` hook runs every time the location changes, which means it will trigger whenever the route changes.
3. **Google Analytics Event**: You call `gtag('event', 'page_view')` with the current URL to notify Google Analytics about the new page view.

---

### 🔧 Notes

- Ensure that the Google Analytics script (`gtag.js` or `analytics.js`) is correctly loaded in your `index.html` file, as shown above.
- If you're using a **single-page application (SPA)**, Google Analytics won't automatically track pageviews when the URL changes. This is why you need to manually send pageview events whenever the route changes.

---

### ⚡ Optional: Using `react-ga` or `react-gtm`

You can also use a library like **`react-ga`** (for Universal Analytics) or **`react-gtm`** (for Google Tag Manager) to simplify the integration:

```bash
npm install react-ga
```

Example with **`react-ga`**:

```jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

ReactGA.initialize('YOUR_TRACKING_ID');

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <div>
      <h1>My React App</h1>
      {/* Your routing setup */}
    </div>
  );
}

export default App;
```

---

## TL;DR

1. Install Google Analytics using `gtag.js`.
2. Track route changes with `useLocation` from React Router.
3. Call `gtag('event', 'page_view')` to send the pageview event to Google Analytics.
4. Alternatively, use **`react-ga`** for simplified integration.


How do you apply vendor prefixes to inline styles in React?

In React, **inline styles** are applied as **JavaScript objects** with **camelCase properties**. However, **vendor prefixes** (like `-webkit-`, `-moz-`, etc.) aren't automatically added. React expects styles to be written using the **standard** CSS properties, but if certain styles need vendor prefixes, you must manually include them.

### ✅ 1. **Manually Adding Vendor Prefixes**

To add vendor prefixes, you can explicitly include them in the style object like so:

```jsx
const styles = {
  display: 'flex',
  WebkitFlexDirection: 'column',  // For Safari
  MozFlexDirection: 'column',     // For Firefox
  msFlexDirection: 'column',      // For older IE
};

function App() {
  return <div style={styles}>Hello</div>;
}
```

---

### ✅ 2. **Using Libraries for Automatic Prefixing**

Manually adding vendor prefixes can be tedious, especially when dealing with complex styles. A better approach is to use a library like **`autoprefixer`** or **`inline-style-prefixer`**, which automatically adds necessary prefixes based on the properties you're using.

#### **Using `inline-style-prefixer`**:

1. Install the package:

```bash
npm install inline-style-prefixer
```

2. Use it to automatically add vendor prefixes:

```jsx
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

const prefixedStyles = prefixer.prefix(styles);

function App() {
  return <div style={prefixedStyles}>Hello</div>;
}
```

The `prefixer.prefix()` function will automatically add vendor prefixes like `-webkit-`, `-moz-`, etc., based on the style properties.

---

### ✅ 3. **Using Styled Components**

If you're using a CSS-in-JS library like **Styled Components**, vendor prefixing is handled **automatically** by the library.

Example with **Styled Components**:

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return <Wrapper>Hello</Wrapper>;
}
```

Styled Components takes care of vendor prefixes for you.

---

### TL;DR

- ✅ **Manually add prefixes**: Use `-webkit-`, `-moz-`, etc., in the inline style object.
- ✅ **Automate it**: Use **`inline-style-prefixer`** or **`autoprefixer`** to add vendor prefixes automatically.
- ✅ **Styled Components**: Libraries like **Styled Components** handle vendor prefixes for you.

How do you import and export components using React and ES6?

In React, you can **import** and **export** components using **ES6 module syntax**. Here's how you can do it:

---

## ✅ 1. **Exporting Components**

There are two primary ways to **export** a component in React: **named exports** and **default exports**.

### **Named Export**

In this case, you export the component by name. You can have multiple named exports in a file.

```jsx
// MyComponent.js
export function MyComponent() {
  return <div>Hello, I am a named export component!</div>;
}
```

### **Default Export**

You can export a single component as the default export. This is commonly used when the file only contains one main component.

```jsx
// MyComponent.js
export default function MyComponent() {
  return <div>Hello, I am the default exported component!</div>;
}
```

You can also have a default export with a **named export** in the same file.

```jsx
// MyComponent.js
export default function MyComponent() {
  return <div>Hello, I am the default export component!</div>;
}

export const helperFunction = () => {
  console.log('This is a helper function');
};
```

---

## ✅ 2. **Importing Components**

You can import components either as **default imports** or **named imports**, depending on how they were exported.

### **Importing a Default Export**

If a component is **default exported**, you can import it like this:

```jsx
// App.js
import MyComponent from './MyComponent'; // Default import

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

### **Importing Named Exports**

If you have **named exports**, you need to import them with the same name:

```jsx
// App.js
import { MyComponent } from './MyComponent'; // Named import

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

You can also import multiple components at once:

```jsx
// App.js
import { MyComponent, helperFunction } from './MyComponent'; // Multiple named imports

function App() {
  helperFunction(); // You can use the named helper function
  return <MyComponent />;
}
```

### **Renaming Imports**

If you want to **rename** a named import, you can use `as`:

```jsx
// App.js
import { MyComponent as CustomComponent } from './MyComponent'; // Rename the import

function App() {
  return <CustomComponent />;
}
```

---

## ✅ 3. **Summary of Import/Export Syntax**

| Export Type         | Export Syntax                             | Import Syntax                               |
|---------------------|-------------------------------------------|---------------------------------------------|
| Default Export      | `export default MyComponent;`             | `import MyComponent from './MyComponent';`   |
| Named Export        | `export function MyComponent() {...}`     | `import { MyComponent } from './MyComponent';`|
| Multiple Named Exports | `export { MyComponent, helperFunction };` | `import { MyComponent, helperFunction } from './MyComponent';`|
| Renaming Imports    | `import { MyComponent as CustomComponent } from './MyComponent';` | `import { MyComponent as CustomComponent } from './MyComponent';` |

---

## TL;DR

1. **Named Export**: `export function MyComponent() {...}`
2. **Default Export**: `export default function MyComponent() {...}`
3. **Importing**: Use `import MyComponent from './MyComponent';` for default and `import { MyComponent } from './MyComponent';` for named exports.

---


What are the exceptions to React component naming?

In React, **naming conventions** for components are usually straightforward, but there are a few **exceptions** and rules that you should be aware of to avoid issues.

Here’s a breakdown of the key exceptions and rules regarding React component naming:

---

## ✅ 1. **Component Names Should Start with a Capital Letter**

React components must start with an uppercase letter. This is because React distinguishes between **HTML elements** (lowercase) and **custom components** (uppercase).

### Example:

```jsx
// Correct
function MyComponent() {
  return <div>Hello!</div>;
}

// Incorrect
function myComponent() {  // React will treat this as an HTML element
  return <div>Hello!</div>;
}
```

React treats **`<div>`**, **`<span>`**, etc., as HTML elements, but a **capitalized name** like **`<MyComponent />`** is treated as a React component.

---

## ✅ 2. **React Components Must Be Named Using CamelCase**

While React components start with an uppercase letter, their **properties** (i.e., props, methods, etc.) and functions typically follow **camelCase** conventions.

For example, if your component contains multiple words in its name:

```jsx
// Correct
function MyComplexComponent() { ... }

// Incorrect
function my_complex_component() { ... }
```

The use of **camelCase** for properties or method names inside components (e.g., `handleClick`, `fetchData`) is standard in JavaScript.

---

## ✅ 3. **Avoid Conflicts with HTML Tag Names**

If you name a component using a name that conflicts with an HTML tag (like `button`, `div`, `input`, etc.), React might interpret it as a **native HTML element**, not a custom React component.

For instance, this is problematic:

```jsx
// Avoid naming a component as an HTML tag
function button() {
  return <button>Click me</button>;
}

// React will treat it as a native HTML <button> tag, not a custom component
```

### Solution:
Choose a name that doesn’t conflict with built-in HTML elements. For example:

```jsx
function CustomButton() {
  return <button>Click me</button>;
}
```

---

## ✅ 4. **Avoid Naming Conflicts with Reserved JavaScript Keywords**

Just like in JavaScript, you cannot use **reserved keywords** as component names. For example, naming a component **`function`** would conflict with the reserved keyword for defining functions.

```jsx
// Avoid
function function() { ... } // Invalid name, 'function' is a reserved keyword
```

### Solution:
Always ensure your component names don’t conflict with JavaScript reserved words or future JavaScript features.

---

## ✅ 5. **Component Names Should Reflect Their Purpose**

Although this is more of a convention than a strict rule, it's **best practice** to name components based on their **purpose** or **role** in the UI. This helps to maintain clarity in your codebase.

For example:
- **`UserProfile`** for a component displaying user information.
- **`Button`** for a reusable button component.
- **`Navbar`** for a navigation bar component.

Avoid ambiguous names like `Component1` or `Widget`, as they don't convey useful information about the component's role.

---

## ✅ 6. **File Naming Conventions**

Although not part of React itself, it’s common practice to **match your component file names** with the component names (using **PascalCase**). This helps with consistency and understanding the structure of your project.

For example:

```jsx
// Correct: File and component name are consistent
// File: MyComponent.js
function MyComponent() { ... }

// Incorrect: File and component name don't match
// File: mycomponent.js
function MyComponent() { ... }
```

---

### TL;DR

- **Uppercase First Letter**: React components must start with a capital letter.
- **CamelCase for Methods/Props**: Use camelCase for method and prop names inside components.
- **Avoid HTML Tag Name Conflicts**: Don’t name components after built-in HTML tags (like `button`, `div`, etc.).
- **No Reserved Keywords**: Don’t use JavaScript reserved keywords as component names.
- **Descriptive Names**: Name components based on their function (e.g., `Button`, `Navbar`).
- **File Names**: File names should follow **PascalCase** (e.g., `MyComponent.js`).

---


Is it possible to use async/await in plain React?

Yes, it is **possible to use `async/await`** in **plain React**. React itself is built on JavaScript, so any JavaScript feature, including **`async/await`**, can be used in your React components.

However, there are some important things to note about **`async/await`** in React, especially when working with components and lifecycle methods.

---

## ✅ **How to Use `async/await` in React**

### 1. **Using `async/await` Inside `useEffect`**

If you're working with **function components** and want to use `async/await` for things like **fetching data** in a side-effect, you should not directly make the `useEffect` callback **async**. Instead, use an **inner async function**.

### Example of using `async/await` in `useEffect`:

```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;
```

In this example:
- The `fetchData` function inside the `useEffect` is marked as `async`, allowing us to use `await` to wait for the fetch to complete before updating the state with the fetched data.

### 2. **Using `async/await` in Event Handlers**

You can also use `async/await` inside event handlers like button clicks.

```jsx
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    const response = await fetch('https://api.example.com/message');
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
```

In this example:
- When the button is clicked, `handleClick` uses `async/await` to fetch a message from an API and update the state.

### 3. **Using `async/await` in Class Components**

If you're working with **class components**, you can use `async/await` in **lifecycle methods** like `componentDidMount` or event handlers.

### Example in a **Class Component**:

```jsx
import React, { Component } from 'react';

class App extends Component {
  state = { data: null };

  async componentDidMount() {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      this.setState({ data: result });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Data</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    );
  }
}

export default App;
```

In this example:
- The `async/await` syntax is used inside the `componentDidMount` lifecycle method to fetch data from an API.

---

## 🚨 **Things to Keep in Mind**

### 1. **Avoid Making `useEffect` Directly `async`**
You **cannot** mark the `useEffect` callback function itself as `async` because it returns a function (or nothing), and `async` functions always return a promise. Instead, create a **nested async function** inside the `useEffect` as shown in the earlier examples.

### 2. **Error Handling**
Always handle errors properly when using `async/await`. If the promise is rejected (e.g., network request fails), make sure you **catch** the error to prevent unhandled promise rejections.

```js
try {
  const response = await fetch('https://example.com');
  const data = await response.json();
  setData(data);
} catch (error) {
  console.error('Failed to fetch:', error);
}
```

### 3. **Cleaning Up Async Code in `useEffect`**
If your async function involves updating the state, ensure that you handle **component unmounting** gracefully. When a component unmounts before an async operation completes, it could lead to a **memory leak** or **state update on an unmounted component**.

You can avoid this by using a cleanup function or tracking the component's mounted state:

```jsx
useEffect(() => {
  let isMounted = true; // Track whether the component is mounted

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      if (isMounted) {
        setData(result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  return () => {
    isMounted = false; // Cleanup the mounted state when component unmounts
  };
}, []);
```

---

## TL;DR
- **Yes**, you can use `async/await` in **React** components (both class and function components).
- For **function components**, use `async/await` in `useEffect` with an inner async function.
- Handle errors and ensure proper cleanup to avoid issues like unhandled promises or memory leaks.




What are the benefits of style modules?
**CSS Modules** are a way of writing **scoped and modular CSS** in a React (or any other JavaScript) application. They help avoid common issues with traditional CSS, such as global namespace conflicts and unpredictable styling behavior. Here are the key **benefits of using CSS Modules**:

---

### ✅ **1. Scoped Styles**
One of the primary benefits of CSS Modules is that the styles are **scoped** to the component by default. Each class name is automatically **unique** and tied to the component that uses it, preventing global namespace conflicts.

**Example**:

```jsx
// Button.module.css
.button {
  background-color: blue;
  color: white;
}

// Button.js
import React from 'react';
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

In this case:
- The class `button` is scoped to the `Button` component, meaning other components won't accidentally override or be overridden by it.

### ✅ **2. No Global Namespace Conflicts**
Traditional global CSS can lead to **style clashes** if two components use the same class name, even though they represent different elements on the page. With **CSS Modules**, the class names are locally scoped and **automatically hashed**, so this problem is eliminated.

For example, in traditional CSS:

```css
/* Global.css */
.button {
  background-color: red;
}
```

Both components that use `.button` will be affected, even if they should have different styles.

In CSS Modules, this doesn't happen:

```css
/* Button.module.css */
.button {
  background-color: red;
}
```

The class name might be transformed into something like `Button_button_1a2b3c` automatically, so there’s no chance of name collision with other components.

### ✅ **3. Easier to Maintain and Scale**
With CSS Modules, styles are organized by component rather than globally. This makes the styles much easier to maintain because:
- **Component-specific styles** are stored in the same file as the component itself.
- **Modularization** helps to avoid bloated global stylesheets.

As your app grows, it's easier to track down and modify styles when they’re isolated to individual components.

### ✅ **4. Prevents Overriding and Specificity Issues**
In traditional CSS, it’s easy to encounter problems with **CSS specificity** and having to write more and more complex selectors to override styles.

With CSS Modules:
- You don’t need to worry about **specificity wars**.
- You don’t need to create complex selectors to override styles.
- Each class is scoped to its component, making it **easy to write predictable, conflict-free CSS**.

### ✅ **5. Supports Dynamic Styles**
CSS Modules also allow you to **dynamically apply classes** based on component state or props. This is useful for conditionally applying styles (e.g., for active or disabled buttons).

```jsx
// Button.module.css
.button {
  background-color: blue;
}
.buttonActive {
  background-color: green;
}

// Button.js
import React, { useState } from 'react';
import styles from './Button.module.css';

function Button() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={isActive ? styles.buttonActive : styles.button}
      onClick={() => setIsActive(!isActive)}
    >
      Click Me
    </button>
  );
}
```

In this case, the `buttonActive` class is applied conditionally when the button is clicked, and the styles remain **modular**.

### ✅ **6. Better Performance (CSS Bundling and Tree Shaking)**
With CSS Modules, only the **used styles** are bundled into the final output. If a style isn't used in your component, it won’t be included in the final CSS file, leading to **smaller file sizes**.

In a typical setup with Webpack, the unused CSS classes are **tree-shaken** and discarded.

### ✅ **7. Ease of Use with Preprocessors**
CSS Modules can be used with **CSS preprocessors** like **Sass** or **Less**. You can use `.module.scss` or `.module.less` to write scoped Sass or Less styles, keeping the benefits of modularization while still using the features of these preprocessors.

```scss
/* Button.module.scss */
.button {
  background-color: red;
  &:hover {
    background-color: green;
  }
}
```

This can be seamlessly used within your React components, maintaining the modular and scoped nature.

---

## ✅ **8. Developer Experience (DX) Improvements**
CSS Modules provide several improvements to the developer experience:
- **Intellisense/Auto-completion**: Since each class name is scoped to the component, your IDE (such as VSCode) can provide **auto-completion** and help prevent typo-related issues.
- **Easier Debugging**: When styles are scoped and unique, it's easier to debug CSS issues because you won't encounter the ambiguity of which component's style is being applied.

---

## ✅ **9. Integration with React Tools**
Many **React tools** (such as **Styled Components** or **Emotion**) support or are compatible with **CSS Modules**, allowing for more flexibility in how you structure your styles. Even though **Styled Components** and **Emotion** are alternative ways to style React components (using JavaScript), CSS Modules can work seamlessly alongside them.

---

### **TL;DR of Benefits:**
- **Scoped styles**: Avoid naming conflicts.
- **No global conflicts**: Styles are unique to components.
- **Easier maintenance**: Styles are organized by component.
- **Prevents specificity issues**: Simplifies CSS rules.
- **Dynamic styling**: Easily apply styles based on component state/props.
- **Better performance**: Tree shaking removes unused styles.
- **Works with preprocessors**: Use Sass/SCSS with modules.
- **Improved DX**: IDE support for auto-completion and better debugging.

---

### When to Use CSS Modules?

You might want to use CSS Modules if:
- You’re building a **large-scale React app** and want to avoid global CSS conflicts.
- You need **modular styles** for components that are reusable across different parts of the app.
- You prefer a **clean separation of concerns** between structure (JS) and style (CSS).
- You want to keep styles organized and scoped in a **maintainable way**.



What are popular React-specific linters?

In the React ecosystem, **linters** are essential for ensuring that your code adheres to best practices, is error-free, and maintains consistency across the codebase. Several React-specific linters and configurations are popular in the React community for enforcing coding standards, detecting potential issues, and improving the overall development experience.

Here are the **most popular React-specific linters**:

---

### ✅ **1. ESLint (with React Plugin)**
**[ESLint](https://eslint.org/)** is the most widely used JavaScript linter, and it can be extended for React projects using the **eslint-plugin-react**.

- **Purpose**: ESLint analyzes your JavaScript (and JSX) code for issues and enforces coding standards.
- **React Plugin**: The `eslint-plugin-react` plugin adds **React-specific linting rules**. It checks things like component naming conventions, lifecycle methods, hooks usage, and more.
  
#### Key Features:
- **React-specific linting rules** for JSX, hooks, and component design.
- **Customizable rules** for your project’s coding style.
- Can be integrated into **prettier** for code formatting.

#### Setup:
1. Install ESLint and the React plugin:

   ```bash
   npm install eslint eslint-plugin-react --save-dev
   ```

2. Create an `.eslintrc` configuration file:

   ```json
   {
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "plugins": ["react"],
     "parser": "babel-eslint",
     "rules": {
       "react/prop-types": "warn",
       "react/jsx-uses-react": "off",
       "react/jsx-uses-vars": "error"
     },
     "settings": {
       "react": {
         "version": "detect"
       }
     }
   }
   ```

---

### ✅ **2. eslint-plugin-react-hooks**
**[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** is a dedicated plugin that focuses specifically on the **React hooks** API.

- **Purpose**: Ensures that hooks are used properly within functional components and that rules like **useEffect**'s dependency arrays are respected.

#### Key Features:
- **Enforces hooks rules**: For example, ensures that hooks like `useState` and `useEffect` are used at the top level of functional components.
- **Checks dependencies** in the hook dependency array to avoid unnecessary re-renders.
- **Warns on improper ordering** of hooks in a component.

#### Setup:
1. Install the plugin:

   ```bash
   npm install eslint-plugin-react-hooks --save-dev
   ```

2. Add to the ESLint configuration:

   ```json
   {
     "extends": ["plugin:react-hooks/recommended"]
   }
   ```

---

### ✅ **3. eslint-plugin-jsx-a11y**
**[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)** helps ensure your React components are **accessible** by providing linting rules that promote web accessibility best practices.

- **Purpose**: Helps identify accessibility issues within JSX code, such as missing `alt` attributes for images, improper use of semantic HTML, and missing `aria-*` attributes.

#### Key Features:
- Enforces **accessible JSX** components.
- Warns about missing or incorrect attributes for **form elements**, **images**, **buttons**, and more.
- Improves the **accessibility** of your application.

#### Setup:
1. Install the plugin:

   ```bash
   npm install eslint-plugin-jsx-a11y --save-dev
   ```

2. Add it to your `.eslintrc`:

   ```json
   {
     "extends": ["plugin:jsx-a11y/recommended"]
   }
   ```

---

### ✅ **4. eslint-plugin-react-native**
For **React Native** projects, the `eslint-plugin-react-native` plugin provides React-specific linting rules tailored for mobile development.

- **Purpose**: It includes rules specific to React Native, such as checking for the usage of deprecated components and ensuring that styles are defined correctly in React Native.

#### Key Features:
- Linting for **React Native-specific issues**, such as improper usage of components or incorrect styles.
- Integration with **React Native's best practices**.

#### Setup:
1. Install the plugin:

   ```bash
   npm install eslint-plugin-react-native --save-dev
   ```

2. Add it to your `.eslintrc`:

   ```json
   {
     "extends": ["plugin:react-native/all"]
   }
   ```

---

### ✅ **5. Prettier with ESLint**
While **Prettier** isn't strictly a linter, it works well alongside ESLint to automatically **format code** in a consistent style. Combining **Prettier** with ESLint in a React project can help enforce both **code quality** (via ESLint) and **code style** (via Prettier).

- **Purpose**: Automatically formats your code according to a consistent style, such as indentation, spacing, and line breaks.

#### Key Features:
- **Automatic formatting** on save.
- Works alongside ESLint to fix formatting-related issues without changing the code logic.
- **React and JSX-specific formatting**.

#### Setup:
1. Install Prettier and the ESLint Prettier plugin:

   ```bash
   npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
   ```

2. Add Prettier configuration to `.eslintrc`:

   ```json
   {
     "extends": [
       "plugin:prettier/recommended",
       "plugin:react/recommended"
     ]
   }
   ```

3. Create a `.prettierrc` file for Prettier configuration.

---

### ✅ **6. eslint-plugin-import**
**[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)** is focused on ensuring that import/export statements in JavaScript and React files are correct, which is particularly helpful for larger codebases where managing imports can become tricky.

- **Purpose**: Enforces proper import/export syntax and order, ensuring that all dependencies are correctly imported.

#### Key Features:
- Ensures **correct import order** and eliminates unused imports.
- Warns about missing dependencies or incorrect module imports.
- Helps maintain **clear module boundaries** in large projects.

#### Setup:
1. Install the plugin:

   ```bash
   npm install eslint-plugin-import --save-dev
   ```

2. Add to `.eslintrc`:

   ```json
   {
     "extends": ["plugin:import/errors", "plugin:import/warnings"]
   }
   ```

---

## 🧑‍💻 **Summary of Popular React Linters**:

- **`eslint-plugin-react`**: Enforces best practices and React-specific coding standards.
- **`eslint-plugin-react-hooks`**: Ensures correct usage of React hooks.
- **`eslint-plugin-jsx-a11y`**: Ensures accessibility best practices in JSX.
- **`eslint-plugin-react-native`**: Linting for React Native projects.
- **Prettier with ESLint**: For automatic code formatting alongside linting.
- **`eslint-plugin-import`**: Ensures correct and proper import/export usage.

These tools help ensure **clean, maintainable, and accessible code** while promoting **best practices** in React development. You can use these linters individually or combine them to build a robust linting setup for your React project.



## React Router

What is React Router?

How is React Router different from the history library?

What are the components of React Router v6?

What is the purpose of the push and replace methods of history?

How do you programmatically navigate using React Router v4?

How do you get query parameters in React Router v4?

Why do you get a "Router may have only one child element" warning?

How do you pass params to the history.push method in React Router v4?

How do you implement a default or NotFound page?

How do you get history in React Router v4?

How do you perform an automatic redirect after login?

React Internationalization

What is React Intl?

What are the main features of React Intl?

What are the two ways of formatting in React Intl?

How do you use FormattedMessage as a placeholder with React Intl?

How do you access the current locale with React Intl?

How do you format a date using React Intl?

React Testing

What is the Shallow Renderer in React testing?

What is the TestRenderer package in React?

What is the purpose of the ReactTestUtils package?

What is Jest?

What are the advantages of Jest over Jasmine?

Can you give a simple example of a Jest test case?

React Redux

What is Flux?

What is Redux?

What are the core principles of Redux?

What are the downsides of Redux compared to Flux?

What is the difference between mapStateToProps() and mapDispatchToProps()?

Can you dispatch an action in a reducer?

How do you access the Redux store outside a component?

What are the drawbacks of the MVW pattern?

Are there any similarities between Redux and RxJS?

How do you reset state in Redux?

What is the difference between React Context and React Redux?

Why are Redux state functions called reducers?

How do you make an AJAX request in Redux?

Should you keep all component states in the Redux store?

What is the proper way to access the Redux store?

What is the difference between a component and a container in React Redux?

What is the purpose of constants in Redux?

What are the different ways to write mapDispatchToProps()?

What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?

How do you structure Redux top-level directories?

What is Redux Saga?

What is the mental model of Redux Saga?

What are the differences between call and put in Redux Saga?

What is Redux Thunk?

What are the differences between Redux Saga and Redux Thunk?

What is Redux DevTools?

What are the features of Redux DevTools?

What are Redux selectors and why should you use them?

What is Redux Form?

What are the main features of Redux Form?

How do you add multiple middlewares to Redux?

How do you set the initial state in Redux?

How is Relay different from Redux?

What is an action in Redux?

React Native

What is the difference between React Native and React?

How do you test React Native apps?

How do you log in React Native?

How do you debug React Native apps?

React Supported Libraries and Integration

What is Reselect and how does it work?

What is Flow?

What is the difference between Flow and PropTypes?

How do you use Font Awesome icons in React?

What is React DevTools?

Why does DevTools not load in Chrome for local files?

How do you use Polymer in React?

What are the advantages of React over Vue.js?

What is the difference between React and Angular?

Why is the React tab not showing up in DevTools?

What are styled-components?

Can you give an example of styled-components?

What is Relay?

Miscellaneous

What are the main features of the Reselect library?

Can you give an example of Reselect usage?

Can Redux only be used with React?

Do you need a specific build tool to use Redux?

How do Redux Form initial values get updated from state?

How do React PropTypes allow different types for one prop?

Can you import an SVG file as a React component?

What is render hijacking in React?

How do you pass numbers to a React component?

Do you need to keep all state in Redux? Should you ever use React’s internal state?

What is the purpose of registerServiceWorker in React?

What is the React.memo function?

What is the React.lazy function?

How do you prevent unnecessary updates using setState?

How do you render arrays, strings, and numbers in React v16?

What are Hooks?

What rules must be followed for Hooks?

How do you ensure Hooks follow the rules in your project?

What are the differences between Flux and Redux?

What are the benefits of React Router v4?

Can you describe the componentDidCatch lifecycle method signature?

In which scenarios do error boundaries not catch errors?

What is the behavior of uncaught errors in React v16?

What is the proper placement for error boundaries?

What is the benefit of a component stack trace from an error boundary?

What are default props?

What is the purpose of the displayName class property?

What is the browser support for React applications?

What is code-splitting?

What are keyed Fragments?

Does React support all HTML attributes?

When do component props default to true?

What is Next.js and what are its major features?

How do you pass an event handler to a component?

How do you prevent a function from being called multiple times?

How does JSX prevent injection attacks?

How do you update rendered elements?

How do you indicate that props are read-only?

What are the conditions for safely using an index as a key?

Do keys need to be globally unique?

What is the popular choice for form handling?

What are the advantages of Formik over the Redux Form library?

Why are you not required to use inheritance?

Can you use web components in a React application?

What is a dynamic import?

What are loadable components?

What is a Suspense component?

What is route-based code splitting?

What is the purpose of the default value in Context?

What is the diffing algorithm?

What rules are covered by the diffing algorithm?

When do you need to use refs?

Must a prop be named "render" for render props?

What are the problems with using render props with Pure Components?

What is the windowing technique?

How do you print falsy values in JSX?

What is the typical use case for portals?

How do you set a default value for an uncontrolled component?

What is your favorite React stack?

What is the difference between the real DOM and the Virtual DOM?

How do you add Bootstrap to a React application?

Can you list the top websites or applications using React as a front-end framework?

Is it recommended to use the CSS-in-JS technique in React?

Do you need to rewrite all class components with Hooks?

How do you fetch data with React Hooks?

Do Hooks cover all use cases for classes?

What is the stable release for Hooks support?

Why do we use array destructuring (square bracket notation) in useState?

What sources were used for introducing Hooks?

How do you access the imperative API of web components?

What is Formik?

What are typical middleware choices for handling asynchronous calls in Redux?

Do browsers understand JSX code?

Can you describe data flow in React?

What is MobX?

What are the differences between Redux and MobX?

Should you learn ES6 before learning ReactJS?

What is concurrent rendering?

What is the difference between async mode and concurrent mode?

Can you use JavaScript URLs in React v16.9?

What is the purpose of the ESLint plugin for Hooks?

What is the difference between imperative and declarative programming in React?

What are the benefits of using TypeScript with ReactJS?

How do you ensure a user remains authenticated on page refresh while using Context API state management?

What are the benefits of the new JSX transform?

How is the new JSX transform different from the old transform?

What are React Server Components?

What is prop drilling?

What is the difference between the useState and useRef Hooks?

What is a wrapper component?

What are the differences between the useEffect and useLayoutEffect Hooks?

What are the differences between functional and class components?

What is Strict Mode in React?

What is the benefit of Strict Mode?

Why does Strict Mode render twice in React?

What are the rules of JSX?

What is the reason multiple JSX tags must be wrapped?

How do you prevent mutating array variables?

What are capture phase events?

How does React update the screen in an application?

How does React batch multiple state updates?

Is it possible to prevent automatic batching?

What is React hydration?

How do you update objects inside state?

How do you update nested objects inside state?

How do you update arrays inside state?

How do you use the Immer library for state updates?

What are the benefits of preventing direct state mutations?

What are the preferred and non-preferred array operations for updating state?

What will happen when defining nested function components?

Can I use keys for non-list items?

What are the guidelines to follow for writing reducers?

Hooks

What is useReducer hook? Can you describe its usage?

How do you compare useState and useReducer?

How does Context work with the useContext hook?

What are the use cases of the useContext hook?

When should you use client and server components?

What are the differences between the Page Router and App Router in Next.js?

What are the differences between the Static Router and Dynamic Router in Next.js?

```


