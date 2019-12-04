export default (state: any = {}, action: any) => {
  switch (action.type) {
    case 'SAMPLE':
      state.sample = action.payload
      break
    case 'SAMPLE2':
      state.sample2 = action.payload
      break
  }
  return state
}
