// If you don't want to use TypeScript you can delete this file!
import { graphql } from "gatsby"
import React from "react"

type DataProps = {
  site: {
    buildTime: string
  }
}

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

// const HomePage: React.FC<PageProps<DataProps>> = () => (
const HomePage: React.FC = () => (
  <>
    <h1>Gatsby Flamelink starter!</h1>
    <p>
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
  </>
)

export default HomePage
