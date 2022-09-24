import React from "react";

const ThemeContext = React.createContext("light");

function App(props) {
  return <Toolbar theme="dark" />;
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}

export default Card;
