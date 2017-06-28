import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Question
        selected={false}
        question={'What is your camp like?'}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should not display the selected classname if the selected prop is false', () => {
    console.log(wrapper.debug())
    expect(wrapper.find('.selected-question')).not.toBePresent()
  })

  // it('should display the selected classname if the selected prop is true', () => {
  //   console.log(wrapper.debug())
  //   expect(wrapper.find('.selected-question')).toBePresent()
  // })
})
