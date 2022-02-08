import TestUseComponents from "components/TestUseComponents"
import { NextPageContext } from "next"
import React from "react"

interface Props {
  flagTest: boolean
}
export default class TestUseComponentsPage extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    return { flagTest: false }
  }

  render() {
    const { flagTest } = this.props
    console.log("flagTest:", flagTest)
    return <TestUseComponents />
  }
}
