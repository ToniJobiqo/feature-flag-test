import getConfig from "next/config"

export const TestDiv = () => {
  const { publicRuntimeConfig } = getConfig()
  const fakeFlag = false

  return fakeFlag ? <div>Div feature flag test</div> : null
}

export default TestDiv
