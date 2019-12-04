export const sampleAction = (test: string) => (dispatch: any) => {
  dispatch({
    type: 'SAMPLE',
    payload: test
  })
}

export const sampleAction2 = (test: string) => (dispatch: any) => {
  dispatch({
    type: 'SAMPLE2',
    payload: test
  })
}
