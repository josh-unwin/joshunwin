import React from "react"
import renderer from "react-test-renderer"

import SecondaryCard from "../secondaryCard"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SecondaryCard />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})