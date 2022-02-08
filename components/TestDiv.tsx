export const TestDiv = () => {
  const fakeFlag = true,
    fakeFlag1 = true,
    fakeFlag2 = true

  return fakeFlag && fakeFlag1 && fakeFlag2 ? <div>Div feature flag test</div> : null
}

export default TestDiv
