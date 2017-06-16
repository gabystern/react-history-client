import React, {Component} from 'react'
import TopicsContainer from '../Containers/TopicsContainer'
import { Route } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <Route path="/" component={TopicsContainer} />
    </div>
  )
}
