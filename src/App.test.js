import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "./App";
import BeforeGameStartedSection from "./components/BeforeGameStarted/BeforeGameStartedSection";
import { handleStartGame } from "./utils/handling.functions";

describe("App Component Rendering Tests", () => {
  it("1. App Component is mounted", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
