import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomizedDialogs from "./FAQButton";

describe("CustomizedDialogs", () => {
  test("Deve renderizar o botão de FAQ", async () => {
    const { findByTestId } = render(<CustomizedDialogs />);

    const icon = await findByTestId("HelpOutlineIcon");

    expect(icon).toBeInTheDocument();
  });
});
