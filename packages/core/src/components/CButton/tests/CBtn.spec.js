import { mount } from '@vue/test-utils'
import CBtn from '@/components/CButton/components/CBtn/CBtn'

console.warn = jest.fn()

const setup = props => {
  return mount(CBtn, {
    props,
  })
}

describe('Test CButton Component', () => {
  it('test default button', async () => {
    const wrapper = setup({})
    expect(wrapper.find('button').attributes('class')).toBe(
      'c-button c-button--primary c-button--large'
    )
  })

  it('test disabled button', async () => {
    const wrapper = setup({
      isDisabled: true,
    })

    expect(wrapper.find('button').attributes('disabled')).toEqual('')
  })

  it('test default button in small size', async () => {
    const wrapper = setup({
      size: 'small',
    })

    expect(wrapper.find('button').attributes('class')).toBe(
      'c-button c-button--primary c-button--small'
    )
  })

  it('test button in secondary color', async () => {
    const wrapper = setup({
      variant: 'secondary',
    })
    expect(wrapper.find('button').attributes('class')).toBe(
      'c-button c-button--secondary c-button--large'
    )
  })

  it('test button in tertiary color', async () => {
    const wrapper = setup({
      variant: 'tertiary',
    })
    expect(wrapper.find('button').attributes('class')).toBe(
      'c-button c-button--tertiary c-button--large'
    )
  })

  it('test button in destructive color', async () => {
    const wrapper = setup({
      variant: 'destructive',
    })
    expect(wrapper.find('button').attributes('class')).toBe(
      'c-button c-button--destructive c-button--large'
    )
  })

  describe('with fullWidth property', () => {
    const wrapper = setup({
      isFullWidth: true,
    })

    it('should have the properly class', () => {
      expect(wrapper.classes('c-button--full')).toBe(true)
    })
  })

  describe('when the user add a type for the button', () => {
    it('should be a button with a type `button`', () => {
      const wrapper = setup({
        type: 'button',
      })
      expect(wrapper.attributes('type')).toBe('button')
    })

    it('should be a button with a type `submit`', () => {
      const wrapper = setup({
        type: 'submit',
      })
      expect(wrapper.attributes('type')).toBe('submit')
    })

    it('should be a button with a type `reset`', () => {
      const wrapper = setup({
        type: 'reset',
      })
      expect(wrapper.attributes('type')).toBe('reset')
    })

    describe('when use label as a default slot', () => {
      const label = 'From default slot'

      const wrapper = mount(CBtn, {
        slots: {
          default: [label],
        },
      })

      it('should render the correct label', () => {
        expect(wrapper.text()).toBe(label)
      })
    })
  })
})
