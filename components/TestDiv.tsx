import getConfig from "next/config"

export const TestDiv = () => {
  const { publicRuntimeConfig } = getConfig()
  const fakeFlag = false,
    fakeFlag1 = true,
    fakeFlag2 = true

  return fakeFlag1 && fakeFlag2 && fakeFlag ? <div>Div feature flag test</div> : null
}

export default TestDiv
