import React from "react"
import renderer from "react-test-renderer"
import Footer from "../main/footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
