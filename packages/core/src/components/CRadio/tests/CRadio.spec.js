import { mount } from '@vue/test-utils'
import CRadio from '@/components/CRadio/components/CRadio/CRadio'

console.warn = jest.fn()

const setup = props => {
  return mount(CRadio, {
    props,
  })
}

describe('Test CRadio Component', () => {
  it('should have a input with type radio and not checked', () => {
    const wrapper = setup({
      label: 'Default',
      value: false,
    })
    const inputElement = wrapper.find('input')

    expect(inputElement.attributes('type')).toBe('radio')
    expect(inputElement.attributes('checked')).toBeUndefined()
    expect(inputElement.attributes('value')).toBe('false')
    expect(inputElement.attributes('disabled')).toBeUndefined()
    expect(wrapper.text()).toBe('Default')
  })

  it('should have a disabled attribute', () => {
    const wrapper = setup({
      label: 'Default - Disabled',
      isDisabled: true,
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toBe('Default - Disabled')
  })


  it('should have a readonly attribute', () => {
    const wrapper = setup({
      label: 'Default - Read only',
      isReadonly: true,
    })

    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
    expect(wrapper.text()).toBe('Default - Read only')
  })

  it('should change the internal value to true or false when clicks on input', async () => {
    const wrapper = setup({
      label: 'Default',
      value: 'test',
    })

    const input = wrapper.get('input[type="radio"]')
    await input.setValue(true)

    expect(wrapper.emitted('update:isChecked')[0][0]).toBe(true)
    expect(wrapper.emitted('inputValue')[0][0]).toBe('test')
  })
})
