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

  it('should render an Answer component that has an paragraph tag with answer text', () => {
    // console.log(wrapper.debug())

    expect(wrapper.find('p')).toBePresent()
    expect(wrapper.find('p').text()).toEqual('Launch Academy is a 10-week, immersive bootcamp')

    // OR
    let pageText = wrapper.text();
    expect(pageText).toMatch('Launch Academy is a 10-week, immersive bootcamp');
  })
})
