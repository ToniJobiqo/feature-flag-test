import Script from "next/script"

export const TestScript = () => {
  const featureFlag = false

  return featureFlag ? (
    <div id='test-id'>
      <Script id='x'>Script feature flag text</Script>
    </div>
  ) : null
}

export default TestScript
