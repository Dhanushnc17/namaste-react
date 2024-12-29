
/*
     // For ello world using react
const heading = React.createElement(
  "h1",{id: "heading",lb: "beer",nd: "dan"},
  "Hello World From React...!!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

  console.log(heading);

*/ 

        // For nested elements

  const parent = React.createElement(
    "div",{id: "parent"},
    React.createElement(
    "div",{id: "child"},
    [React.createElement(
      "h1",{},
    "I'am in H1"),React.createElement(
      "h2",{},
    "I'am in H2")]
  ));
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);

  console.log(parent);
