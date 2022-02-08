import getConfig from "next/config"

export const TestDiv = () => {
  const { publicRuntimeConfig } = getConfig()

  return publicRuntimeConfig.flag ? <div>Div feature flag test</div> : null
}

export default TestDiv
