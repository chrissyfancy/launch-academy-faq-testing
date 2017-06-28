import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Question
        selected={true}
        question={'What is your camp like?'}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.text()).toMatch('What is your camp')
    expect(wrapper.text()).toEqual('What is your camp like?')

  })

  // it('should not display the selected classname if the selected prop is false', () => {
  //   expect(wrapper.find('.selected-question')).not.toBePresent()
  // })

  it('should display the selected classname if the selected prop is true', () => {
    expect(wrapper.find('.selected-question')).toBePresent()
  })
})
