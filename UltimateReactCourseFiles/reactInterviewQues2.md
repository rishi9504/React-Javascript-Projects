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
Why does React use className instead of the class attribute?
31	What are Fragments?
32	Why are Fragments better than container divs?
33	What are portals in React?
34	What are stateless components?
35	What are stateful components?
36	How do you apply validation to props in React?
37	What are the advantages of React?
38	What are the limitations of React?
39	What are the recommended ways for static type checking?
40	What is the use of the react-dom package?
41	What is ReactDOMServer?
42	How do you use innerHTML in React?
43	How do you apply styles in React?
44	How are events different in React?
45	What is the impact of using indexes as keys?
46	How do you conditionally render components?
47	Why do we need to be careful when spreading props on DOM elements?
48	How do you memoize a component?
49	How do you implement Server-Side Rendering (SSR)?
50	How do you enable production mode in React?
51	Do Hooks replace render props and higher-order components?
52	What is a switching component?
53	What are React Mixins?
54	What are the pointer events supported in React?
55	Why should component names start with a capital letter?
56	Are custom DOM attributes supported in React v16?
57	How do you loop inside JSX?
58	How do you access props within attribute quotes?
59	What is a React PropType array with shape?
60	How do you conditionally apply class attributes?
61	What is the difference between React and ReactDOM?
62	Why is ReactDOM separated from React?
63	How do you use the React label element?
64	How do you combine multiple inline style objects?
65	How do you re-render the view when the browser is resized?
66	How do you pretty-print JSON with React?
67	Why can’t you update props in React?
68	How do you focus an input element on page load?
69	How can you find the version of React at runtime in the browser?
70	How do you add Google Analytics for React Router?
71	How do you apply vendor prefixes to inline styles in React?
72	How do you import and export components using React and ES6?
73	What are the exceptions to React component naming?
74	Is it possible to use async/await in plain React?
75	What are common folder structures for React?
76	What are popular packages for animation?
77	What are the benefits of style modules?
78	What are popular React-specific linters?
React Router
79	What is React Router?
80	How is React Router different from the history library?
81	What are the components of React Router v6?
82	What is the purpose of the push and replace methods of history?
83	How do you programmatically navigate using React Router v4?
84	How do you get query parameters in React Router v4?
85	Why do you get a "Router may have only one child element" warning?
86	How do you pass params to the history.push method in React Router v4?
87	How do you implement a default or NotFound page?
88	How do you get history in React Router v4?
89	How do you perform an automatic redirect after login?
## React Internationalization
90	What is React Intl?
91	What are the main features of React Intl?
92	What are the two ways of formatting in React Intl?
93	How do you use FormattedMessage as a placeholder with React Intl?
94	How do you access the current locale with React Intl?
95	How do you format a date using React Intl?
## React Testing
96	What is the Shallow Renderer in React testing?
97	What is the TestRenderer package in React?
98	What is the purpose of the ReactTestUtils package?
99	What is Jest?
100	What are the advantages of Jest over Jasmine?
101	Can you give a simple example of a Jest test case?
## React Redux
102	What is Flux?
103	What is Redux?
104	What are the core principles of Redux?
105	What are the downsides of Redux compared to Flux?
106	What is the difference between mapStateToProps() and mapDispatchToProps()?
107	Can you dispatch an action in a reducer?
108	How do you access the Redux store outside a component?
109	What are the drawbacks of the MVW pattern?
110	Are there any similarities between Redux and RxJS?
111	How do you reset state in Redux?
112	What is the difference between React Context and React Redux?
113	Why are Redux state functions called reducers?
114	How do you make an AJAX request in Redux?
115	Should you keep all component states in the Redux store?
116	What is the proper way to access the Redux store?
117	What is the difference between a component and a container in React Redux?
118	What is the purpose of constants in Redux?
119	What are the different ways to write mapDispatchToProps()?
120	What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?
121	How do you structure Redux top-level directories?
122	What is Redux Saga?
123	What is the mental model of Redux Saga?
124	What are the differences between call and put in Redux Saga?
125	What is Redux Thunk?
126	What are the differences between Redux Saga and Redux Thunk?
127	What is Redux DevTools?
128	What are the features of Redux DevTools?
129	What are Redux selectors and why should you use them?
130	What is Redux Form?
131	What are the main features of Redux Form?
132	How do you add multiple middlewares to Redux?
133	How do you set the initial state in Redux?
134	How is Relay different from Redux?
135	What is an action in Redux?
## React Native
136	What is the difference between React Native and React?
137	How do you test React Native apps?
138	How do you log in React Native?
139	How do you debug React Native apps?
## React Supported Libraries and Integration
140	What is Reselect and how does it work?
141	What is Flow?
142	What is the difference between Flow and PropTypes?
143	How do you use Font Awesome icons in React?
144	What is React DevTools?
145	Why does DevTools not load in Chrome for local files?
146	How do you use Polymer in React?
147	What are the advantages of React over Vue.js?
148	What is the difference between React and Angular?
149	Why is the React tab not showing up in DevTools?
150	What are styled-components?
151	Can you give an example of styled-components?
152	What is Relay?
## Miscellaneous
153	What are the main features of the Reselect library?
154	Can you give an example of Reselect usage?
155	Can Redux only be used with React?
156	Do you need a specific build tool to use Redux?
157	How do Redux Form initial values get updated from state?
158	How do React PropTypes allow different types for one prop?
159	Can you import an SVG file as a React component?
160	What is render hijacking in React?
161	How do you pass numbers to a React component?
162	Do you need to keep all state in Redux? Should you ever use React’s internal state?
163	What is the purpose of registerServiceWorker in React?
164	What is the React.memo function?
165	What is the React.lazy function?
166	How do you prevent unnecessary updates using setState?
167	How do you render arrays, strings, and numbers in React v16?
168	What are Hooks?
169	What rules must be followed for Hooks?
170	How do you ensure Hooks follow the rules in your project?
171	What are the differences between Flux and Redux?
172	What are the benefits of React Router v4?
173	Can you describe the componentDidCatch lifecycle method signature?
174	In which scenarios do error boundaries not catch errors?
175	What is the behavior of uncaught errors in React v16?
176	What is the proper placement for error boundaries?
177	What is the benefit of a component stack trace from an error boundary?
178	What are default props?
179	What is the purpose of the displayName class property?
180	What is the browser support for React applications?
181	What is code-splitting?
182	What are keyed Fragments?
183	Does React support all HTML attributes?
184	When do component props default to true?
185	What is Next.js and what are its major features?
186	How do you pass an event handler to a component?
187	How do you prevent a function from being called multiple times?
188	How does JSX prevent injection attacks?
189	How do you update rendered elements?
190	How do you indicate that props are read-only?
191	What are the conditions for safely using an index as a key?
192	Do keys need to be globally unique?
193	What is the popular choice for form handling?
194	What are the advantages of Formik over the Redux Form library?
195	Why are you not required to use inheritance?
196	Can you use web components in a React application?
197	What is a dynamic import?
198	What are loadable components?
199	What is a Suspense component?
200	What is route-based code splitting?
201	What is the purpose of the default value in Context?
202	What is the diffing algorithm?
203	What rules are covered by the diffing algorithm?
204	When do you need to use refs?
205	Must a prop be named "render" for render props?
206	What are the problems with using render props with Pure Components?
207	What is the windowing technique?
208	How do you print falsy values in JSX?
209	What is the typical use case for portals?
210	How do you set a default value for an uncontrolled component?
211	What is your favorite React stack?
212	What is the difference between the real DOM and the Virtual DOM?
213	How do you add Bootstrap to a React application?
214	Can you list the top websites or applications using React as a front-end framework?
215	Is it recommended to use the CSS-in-JS technique in React?
216	Do you need to rewrite all class components with Hooks?
217	How do you fetch data with React Hooks?
218	Do Hooks cover all use cases for classes?
219	What is the stable release for Hooks support?
220	Why do we use array destructuring (square bracket notation) in useState?
221	What sources were used for introducing Hooks?
222	How do you access the imperative API of web components?
223	What is Formik?
224	What are typical middleware choices for handling asynchronous calls in Redux?
225	Do browsers understand JSX code?
226	Can you describe data flow in React?
227	What is MobX?
228	What are the differences between Redux and MobX?
229	Should you learn ES6 before learning ReactJS?
230	What is concurrent rendering?
231	What is the difference between async mode and concurrent mode?
232	Can you use JavaScript URLs in React v16.9?
233	What is the purpose of the ESLint plugin for Hooks?
234	What is the difference between imperative and declarative programming in React?
235	What are the benefits of using TypeScript with ReactJS?
236	How do you ensure a user remains authenticated on page refresh while using Context API state management?
237	What are the benefits of the new JSX transform?
238	How is the new JSX transform different from the old transform?
239	What are React Server Components?
240	What is prop drilling?
241	What is the difference between the useState and useRef Hooks?
242	What is a wrapper component?
243	What are the differences between the useEffect and useLayoutEffect Hooks?
244	What are the differences between functional and class components?
245	What is Strict Mode in React?
246	What is the benefit of Strict Mode?
247	Why does Strict Mode render twice in React?
248	What are the rules of JSX?
249	What is the reason multiple JSX tags must be wrapped?
250	How do you prevent mutating array variables?
251	What are capture phase events?
252	How does React update the screen in an application?
253	How does React batch multiple state updates?
254	Is it possible to prevent automatic batching?
255	What is React hydration?
256	How do you update objects inside state?
257	How do you update nested objects inside state?
258	How do you update arrays inside state?
259	How do you use the Immer library for state updates?
260	What are the benefits of preventing direct state mutations?
261	What are the preferred and non-preferred array operations for updating state?
262	What will happen when defining nested function components?
263	Can I use keys for non-list items?
264	What are the guidelines to follow for writing reducers?
Hooks
265	What is useReducer hook? Can you describe its usage?
266	How do you compare useState and useReducer?
267	How does Context work with the useContext hook?
268	What are the use cases of the useContext hook?
269	When should you use client and server components?
270	What are the differences between the Page Router and App Router in Next.js?
271	What are the differences between the Static Router and Dynamic Router in Next.js?
272	What are the differences between the Static Router and 
