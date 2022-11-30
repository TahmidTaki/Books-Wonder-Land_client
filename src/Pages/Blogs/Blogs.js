import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-lime-400">
                <h3 className="text-3xl font-semibold">Blogs</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  By Tahmid Taki Rahman
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-50">
                    Different ways to manage a state in a React application{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Nov 2022
                  </time>
                  <p className="mt-3">
                    There are four main types of state you need to properly manage in your React
                    apps:
                    <br /> Local state : Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook. <br />{" "}
                    Global state:Once you attempt to manage state across multiple components, things
                    get a bit trickier. You will reach a point in your application where patterns
                    like “lifting state up” and passing callbacks down to update your state from
                    components lead to lots and lots of props. What do you do if you want to update
                    a component’s state from basically anywhere in your app? You turn it into global
                    state. To manage it, however, you should opt for a third-party solution. Many
                    developers are inclined to use built-in React features like the Context API to
                    manage their state. <br />
                    Redux is also great <br />
                    Server state: Server state can be deceptively challenging to manage. At first,
                    it seems you just need to fetch data and display it in the page. But then you
                    need to display a loading spinner while you are waiting for the data. Then you
                    need to handle errors and display them to the user as they arise. What happens
                    when there is a network error? Do I really need to hit my server every time my
                    user visits the home page if the data hasn’t changed? Do I need to add useState
                    and useEffect in every component I want to fetch my data? To fix this, there are
                    a couple of great libraries that make data fetching in React a breeze: SWR and
                    React Query. <br />
                    URL state: URL state is quite easy to manage, usually through custom hooks that
                    give us all the information we need about our location, history, and pathname.
                    If you are using React Router, you can get all the information you need using
                    useHistory or useLocation.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-50">
                    How prototypal inheritance works{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Nov 2022
                  </time>
                  <p className="mt-3">
                    Prototypal inheritance is all about objects. Objects inherit properties from
                    other objects. That's all there is to it. There are two ways of creating objects
                    using prototypal inheritance: 1. Create a brand new object. 2. Clone an existing
                    object and extend it.
                    <br />
                    JavaScript offers two ways to clone an object - delegation and concatenation. We
                    take an object, clone it, change whatever we need to, and we get ourselves a
                    brand new object. example: <br />
                    JavaScript is a prototype-based language, meaning object properties and methods
                    can be shared through generalized objects that have the ability to be cloned and
                    extended. <br />
                    Class Approach: Classes are a way to set a blueprint to create objects with
                    predefined properties and methods. By creating a class with specific properties
                    and methods, you can later on instantiate objects from that class, that will
                    inherit all the properties and methods that that class has. Classes are used as
                    a way to make code more modular, organized, and understandable and are heavily
                    used in OOP programming.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-50">
                    Unit testing and its necessities
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Nov 2022
                  </time>
                  <p className="mt-3">
                    Unit testing refers to the testing of modular or functional units of a larger
                    software application, done in isolation from other modules. It tests the
                    resilience, performance, and capacity of individual functional units in
                    real-life conditions. The primary aim of unit testing is to ensure that their
                    actual behavior aligns with their expected behavior. <br />
                    As the digital economy expands, the traditional focus on software testing and
                    quality assurance is no longer an acceptable standard for enabling the best
                    customer experience. Every strategic approach in software testing needs to be
                    given its due share of importance and allocated resources, both manpower, and
                    tools, to facilitate seamless execution. While many leaders may stress giving
                    more priority to areas like acceptance testing, the reality is that every test
                    approach deserves a special focus as any let-downs may impact overall
                    application quality. Since more businesses are opt for cloud-based microservices
                    architecture for their applications, there is an increased focus on the granular
                    stability of the application. Testing cloud-based apps with microservices
                    architecture are important, and unit testing finds a very crucial role in this
                    regard. With unit testing, developers can have more control over their
                    individual code block quality before integrating different components and then
                    sent for regression testing. Also, it is easier to identify and rectify mistakes
                    or defects at the code level. This helps enterprises save costs significantly
                    when compared to discovering defects later in the development cycle.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-400">
                  <h3 className="text-xl font-semibold tracking-wide text-green-50">
                    React vs. Angular vs. Vue
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                    Nov 2022
                  </time>
                  <p className="mt-3">
                    Architecture: Speaking of architecture, Angular.js is a full-fledged MVC
                    framework that provides you with all the possibilities for out-of-the-box
                    programming: Templates based on HTML; Dependency injection; Ajax requests;
                    Routing; Encapsulation of CSS components; Components testing utilities;
                    Opportunities to create forms, etc. React.js, on the other hand, is a library
                    that just offers the view, leaving the developer to decide how to construct the
                    Model and Controller. The following features are provided: As an add-on to
                    JavaScript, the JSX language, which is similar to XML, is used instead of
                    templates; No introduction of dependencies; Ajax requests; Vue.js is a library
                    that allows you to create interactive web interfaces. Vue.js is primarily
                    concerned with the ViewModel layer of the MVVM architecture. It uses two-way
                    data bindings to attach the View and the Model. Directives and Filters abstract
                    away the actual DOM operations and output formatting. <br />
                    <br /> Data Binding: Angular.js uses the two-way binding. The state of the model
                    is changed first, and then the modification of the interface element is
                    reflected. The interface element changes as the model’s state changes, which is
                    why two-way data binding is used. React.js has one-way binding. First, the state
                    of the model is updated, and then it reflects the change of the interface
                    element. If you change the interface element, the state of the model stays the
                    same. As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes
                    the entire model with the DOM mechanically. This implies that all Vue.js
                    templates are fundamentally legal, parsable HTML with a few extra features.
                    Remember this because Vue templates are fundamentally different from
                    string-based templates. <br />
                    <br /> Mobile solutions: Each one of the three compared web development
                    frameworks offers mobile solutions for apps development. When it comes to
                    Angular, this is the Ionic framework, which makes use of Angular’s Cordova
                    container. You download the app, which is a web application running within a web
                    browser. React.js doesn’t have a similar framework. React Native is a platform
                    for creating actual native mobile applications. Vue has announced its support
                    for the Alibaba Group’s Weex project, which is a cross-platform UI framework.
                    Weex allows you to develop browser components as well as iOS and Android apps
                    using the same Vue syntax. <br />
                    <br /> Syntax: Angular is written in TypeScript, which means you need some time
                    to learn it to work with this framework. React uses JSX and native Javascript
                    developers are familiar with it. The training period is easier and does not
                    require that much preparation. Vue.js makes use of an HTML-based template syntax
                    that allows you to link the displayed DOM to the data of the base element
                    instance declaratively. All Vue.js templates are valid HTML that can be read by
                    HTML analyzers and browsers that follow the standard. <br />
                    <br /> Integration: Angular provides a basic framework for building web
                    applications and does not require any additional libraries. It is relatively
                    rigid and inflexible as a complete framework. React.js is usually not enough to
                    build a web app. In most instances, using extra libraries is advised. As a
                    result, it’s more adaptable and simple to integrate into current mobile apps.
                    Vue.js allows distinct features of an app to be implemented without altering the
                    architecture. When it comes to integrating with other libraries, Vue is a
                    perfect solution. Vue.js may be used to create both single-page apps and more
                    complex online interfaces for apps. Performance To capture all changes to the
                    DOM, Angular.js creates a watcher for each binding. Every time the view updates,
                    the new values compare with the old ones. This can end up in poorer performance
                    in large mobile applications. Because React uses a virtual DOM, when the view is
                    modified, the new DOM compares it to the virtual DOM and changes accordingly.
                    Vue.js has better performance thanks to the virtual DOM, which is useful for
                    complicated programs. It may be as little as 20KB while maintaining its speed
                    and versatility, allowing it to achieve considerably better performance than
                    competing frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
