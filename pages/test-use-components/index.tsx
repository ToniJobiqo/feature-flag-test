import TestUseComponents from "components/TestUseComponents"
import React from "react"

interface Props {
  flagTest: boolean
}
export default class TestUseComponentsPage extends React.Component<Props> {
  render() {
    const { flagTest } = this.props
    console.log("flagTest:", flagTest)
    return <TestUseComponents />
  }
}
