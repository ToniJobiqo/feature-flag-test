import TestNestedComponents from "components/TestNestedComponents"
import { NextPageContext } from "next"
import React from "react"

interface Props {
  flagTest: boolean
}
export default class TestNestedComponentsPage extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    return { flagTest: false }
  }

  render() {
    const { flagTest } = this.props

    return <TestNestedComponents flagTest={flagTest} />
  }
}
