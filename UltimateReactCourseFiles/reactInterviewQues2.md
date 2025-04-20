1	What is React?
React is a JavaScript library used for building user interfaces, especially single-page applications where you need a fast, interactive experience.

Here’s a quick breakdown:

Created by: Facebook (now Meta)

Main concept: Build UI using components – small, reusable pieces of code that define how a part of the UI should look and behave.

Key features:

Declarative syntax: You describe what the UI should look like, and React takes care of updating the DOM.

Component-based: Everything is a component—easy to reuse and maintain.

Virtual DOM: React creates a virtual representation of the UI in memory, and only updates the real DOM when necessary—making it fast.

JSX: Lets you write HTML-like code within JavaScript.



Example of a simple React component:

function Greeting() {
  return <h1>Hello, world!</h1>;
}


2	What is the history behind React’s evolution?
React has a pretty interesting backstory that traces back to Facebook’s challenges with building fast, maintainable user interfaces. Here's a quick timeline of its evolution:


---

2011: React is Born at Facebook

Problem: Facebook's UI was getting more complex, especially with things like the live news feed updates.

Solution: Jordan Walke, a software engineer at Facebook, created a prototype library called FaxJS that later became React.

First used internally on Facebook’s Ads dashboard, where performance was critical.



---

2013: Open Source Release

React was released as an open-source project at JSConf US.

At first, it faced skepticism—mostly because of JSX (HTML in JavaScript), which was weird for the dev community back then.

Over time, devs started to love its component model and Virtual DOM.



---

2015: React Native

Facebook released React Native, allowing devs to build native mobile apps using React concepts.

Code could now be shared across web and mobile.



---

2016: React Fiber Project

React’s core was being rewritten as React Fiber, aiming for better performance and features like incremental rendering.

It was a huge behind-the-scenes improvement that shipped in React 16 (2017).



---

2018: React Hooks

Introduced in React 16.8, Hooks like useState and useEffect let developers use state and lifecycle methods in functional components.

Marked a big shift from class components to function components.



---

2020–2023: Concurrent Mode, Suspense, Server Components

Focus shifted toward performance, user experience, and server-side rendering:

Concurrent Mode (partial release)

Suspense for data fetching

React Server Components (still experimental)


Huge push to improve SSR (Server Side Rendering) with Next.js becoming the go-to framework.



---

Today

React is maintained by Meta and powers a huge chunk of the web.

It's used by companies like Instagram, Airbnb, Netflix, Uber, etc.

Ecosystem includes tools like Next.js, Vite, React Query, etc.



---

3	What are the major features of React?
React packs a bunch of powerful features that make it a top choice for building modern UIs. Here are the major features of React:


---

1. JSX (JavaScript XML)

Lets you write HTML-like code inside JavaScript.

Improves readability and keeps UI and logic closely tied.


const element = <h1>Hello, world!</h1>;


---

2. Component-Based Architecture

UI is broken into reusable, self-contained components.

Each component manages its own logic and rendering.


function Button() {
  return <button>Click Me</button>;
}


---

3. Virtual DOM

React maintains a lightweight in-memory virtual representation of the DOM.

When the state changes, it calculates the difference (diffing) and updates only what's needed.



---

4. Declarative UI

You describe what you want the UI to look like, and React takes care of the how.

Makes code more predictable and easier to debug.



---

5. Unidirectional Data Flow

Data flows one way (from parent to child via props).

Makes app state easier to trace and manage.



---

6. React Hooks

Introduced in React 16.8.

Hooks like useState, useEffect, useContext allow you to use state and other features in functional components.


const [count, setCount] = useState(0);


---

7. React Developer Tools

Browser extension to inspect React component hierarchy, state, and props.



---

8. Server-Side Rendering (SSR)

React supports SSR using frameworks like Next.js, improving SEO and performance.



---

9. React Native

Write mobile apps using React components that render to native iOS and Android UI elements.



---

10. Ecosystem and Community

Massive ecosystem with libraries for routing (React Router), state management (Redux, Zustand), data fetching (React Query, SWR), testing, and more.



---

4	What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript, making the UI code more readable and declarative.


---

Why JSX?

It blends markup (HTML) and logic (JavaScript) in one place.

Makes it easier to visualize component structure and logic together.



---

Example:

const element = <h1>Hello, world!</h1>;

This JSX code gets transpiled (by Babel) into:

const element = React.createElement('h1', null, 'Hello, world!');


---

Features of JSX:

1. Looks like HTML but is JavaScript:

You can embed any JS expression inside {}.


const name = 'Jane';
const greeting = <h1>Hello, {name}!</h1>;


2. Supports JavaScript expressions:

You can use functions, variables, conditionals, etc.


const isLoggedIn = true;
const message = <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>;


3. Must return a single root element:

Wrap multiple elements in a parent like a <div> or a React Fragment (<> </>).


return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);


4. Custom components start with capital letters:

function MyButton() {
  return <button>Click Me</button>;
}

const app = <MyButton />;




---

Behind the scenes:

JSX is not required to write React, but it makes code more expressive and concise. Tools like Babel convert JSX into standard JavaScript calls (React.createElement).




5	What is the difference between an Element and a Component?

In React parlance, elements and components are two distinct concepts, each playing its own role in how you build UIs:


---

1. React Element

What it is:
A plain JavaScript object that describes what you want to see on the screen.

Characteristics:

Immutable — once created, you can’t change it.

Cheap to create.

Describes a DOM node (e.g. <div>) or a user‑defined component (e.g. <MyButton />) via its type, props, and children.


Creation:

Automatically created when you write JSX:

const el = <h1 className="title">Hello</h1>;

Under the hood, JSX transpiles to:

const el = React.createElement(
  'h1',
  { className: 'title' },
  'Hello'
);


Usage:

You pass elements to ReactDOM.render() (or return them from components) to tell React what to draw.




---

2. React Component

What it is:
A blueprint (function or class) that—when invoked—returns React elements (or other components).

Characteristics:

Can be stateful or stateless; can use lifecycle (class) or hooks (function).

May accept inputs called props.

Encapsulates its own rendering logic and (optionally) internal state.


Types:

1. Function Component (modern, with hooks)

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}


2. Class Component (older style)

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





---

Key Differences


---

Putting it all together

1. You write a component (e.g. function App() { … }).


2. Inside that component, you return React elements (<div>…</div>).


3. React takes those elements, diffs them against the previous render, and updates the real DOM accordingly.




---

6	How do you create components in React?

Creating components in React is super straightforward. There are two main ways to create them: function components (the modern and preferred way) and class components (older, still used in legacy code).


---

1. Function Components (Modern Way)

Basic Syntax:

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Usage:

<Welcome name="Alice" />

With Hooks:

You can add state and side effects using React Hooks.

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


---

2. Class Components (Legacy Way)

Basic Syntax:

import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

With State:

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


---

Tips:

Component names must start with a capital letter.

Always return a single root element (use a <div> or React Fragment if needed).

Use props to pass data to components.



---

7	When should you use a Class Component over a Function Component?

In modern React, function components are preferred almost all the time—especially since the introduction of Hooks in React 16.8, which gave function components full access to features like state, side effects, context, refs, etc.

However, here’s a breakdown of when you might still use a class component (though rare):


---

Use Function Components When:

You’re writing new code (best practice).

You want to use Hooks (useState, useEffect, etc.).

You care about simpler syntax, better readability, and less boilerplate.

You’re following modern best practices and community standards.



---

Use Class Components When:

You're working in a legacy codebase that already uses class components.

You’re using third-party libraries or patterns that are tightly coupled to class components (though this is becoming rare).

You need to understand or maintain old projects that rely on componentDidMount, shouldComponentUpdate, etc.



---

Feature Comparison


---

In short:

> Use function components by default.
Only use class components if you're dealing with older code or special edge cases.



8	What are Pure Components?
9	What is state in React?
10	What are props in React?
11	What is the difference between state and props?
12	What is the difference between HTML and React event handling?
13	What are synthetic events in React?
14	What are inline conditional expressions?
15	What is the "key" prop and what is its benefit when used in arrays of elements?
16	What is the Virtual DOM?
17	How does the Virtual DOM work?
18	What is the difference between Shadow DOM and Virtual DOM?
19	What is React Fiber?
20	What is the main goal of React Fiber?
21	What are controlled components?
22	What are uncontrolled components?
23	What is the difference between createElement and cloneElement?
24	What is Lifting State Up in React?
25	What are Higher-Order Components?
26	What is the children prop?
27	How do you write comments in React?
28	What is reconciliation?
29	Does the lazy function support named exports?
30	Why does React use className instead of the class attribute?
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
React Internationalization
90	What is React Intl?
91	What are the main features of React Intl?
92	What are the two ways of formatting in React Intl?
93	How do you use FormattedMessage as a placeholder with React Intl?
94	How do you access the current locale with React Intl?
95	How do you format a date using React Intl?
React Testing
96	What is the Shallow Renderer in React testing?
97	What is the TestRenderer package in React?
98	What is the purpose of the ReactTestUtils package?
99	What is Jest?
100	What are the advantages of Jest over Jasmine?
101	Can you give a simple example of a Jest test case?
React Redux
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
React Native
136	What is the difference between React Native and React?
137	How do you test React Native apps?
138	How do you log in React Native?
139	How do you debug React Native apps?
React Supported Libraries and Integration
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
Miscellaneous
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
