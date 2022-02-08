import TestDiv from "components/TestDiv"
import TestScript from "components/TestScript"

interface Props {
  flagTest: boolean
}

export const TestUseComponents = ({ flagTest }: Props) => {
  return (
    <div>
      Flag test = {flagTest}
      <TestDiv />
      Use components feature flag test
      <TestScript />
    </div>
  )
}

export default TestUseComponents
