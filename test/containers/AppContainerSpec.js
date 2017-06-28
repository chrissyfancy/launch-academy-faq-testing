import App from '../../src/containers/App'
import Answer from '../../src/components/Answer'
import Question from '../../src/components/Question'

describe('App', () => {
  let wrapper;

  const data = [
    {
      id: 1,
      question: 'What is Launch Academy?',
      answer: 'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team'
    },
    {
      id: 2,
      question: 'What kind of people are you looking for?',
      answer: "You are highly motivated to learn and naturally curious. You don't give up easily, ever. You maintain an inner force that drives you to build something beautiful someday which will make an impact on the world. You play well with others and are kind. You often want to help those around you. You're super excited about learning to code."
    },
    {
      id: 3,
      question: 'Will I have a chance at succeeding?',
      answer: "If you are motivated and enthusiastic about learning technology, then yes, you will. You don't need a special cape or a magic wand to be a programmer. You don't need advanced math or calculus. Programming is a language and a way of thinking. Anybody who wants to learn to program proficiently can do so. If you are accepted, that means we see something special in you. We won't settle for anything less."
    }
  ];

  beforeEach(() => {
    wrapper = mount(<App data={data} />);
  });

  it('should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ selectedQuestion: null })
  });

  it('should render an App Component', () => {
    expect(wrapper.find(App)).toBePresent();
  });

  it('should render the text of the Answer component when selectedQuestion is set to a question', () => {
    wrapper.setState({ selectedQuestion: 1 })
    expect(wrapper.text()).toMatch('Launch Academy is a 10-week, immersive bootcamp taking eager learners')
  });

  it('should change the selectedQuestion when a question is clicked', () => {
    wrapper.find(Question).last().find('h5').simulate("click")
    expect(wrapper.state()).toEqual({ selectedQuestion: 3 })
  })

  it('should render the Question component with the correct props', () => {
    expect(wrapper.find(Question).first().props()).toEqual({
      question: 'What is Launch Academy?',
      answer: 'Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team',
      selected: undefined,
      handleClick: jasmine.any(Function)
    })
  })
});
