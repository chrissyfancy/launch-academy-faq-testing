import Answer from '../../src/components/Answer'

describe('Answer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Answer
        answer={'Launch Academy is a 10-week, immersive bootcamp'}
      />
    )
  })

  it('should render an Answer component that has a paragraph tag with the answer text', () => {
    expect(wrapper.find("p")).toBePresent()
    expect(wrapper.find("p").text()).toMatch('Launch Academy is a 10-week, immersive bootcamp')
  })
})
