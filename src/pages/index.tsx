import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from '../components/layout'
import { Home } from '../components/sections/home'
import "../styles/global.scss"


const IndexPage = () => {
  return <Layout>
    <Home />
  </Layout>
}
export default IndexPage

export const Head: HeadFC = () => <title>Imanpal Singh</title>
