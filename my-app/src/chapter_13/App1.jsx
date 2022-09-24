import React from "react";

function SplitPane(props) {
  retrun(
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App1(props) {
  retrun(<SplitPane left={<Contacts />} right={<Chat />} />);
}

export default App1;
