import React from "react"
import renderer from "react-test-renderer"

import Card from "../card"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Card />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})