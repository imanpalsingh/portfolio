import { Link, HeadFC } from "gatsby"
import React from 'react'
const NotFoundPage = () => {
  return <h2>You are lost</h2>
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
