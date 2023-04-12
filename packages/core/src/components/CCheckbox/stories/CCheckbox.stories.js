import { CCheckbox } from '../index'
import { ref } from 'vue'

export default {
  title: 'Inputs/Checkbox',
  component: CCheckbox,
  argTypes: {
    CCheckboxInput: { action: '@CCheckbox.input' },
    CCheckboxInputEvent: { action: '@CCheckbox.inputEvent' },
    CCheckboxChange: { action: '@CCheckbox.change' },
  },
}

const PlaygroundTemplate = args => ({
  components: { CCheckbox },
  setup() {
    const checked = ref(args.checked)
    return {
      args,
      checked,
    }
  },
  template: `
    <div style="margin: 16px;">
      <CCheckbox
        v-model:checked="checked"
        v-bind="args"
        @input="args.CCheckboxInput"
        @inputEvent="args.CCheckboxInputEvent"
        @change="args.CCheckboxChange"
      />
    </div>
  `,
})

export const Playground = PlaygroundTemplate.bind({})
Playground.args = {
  value: 'My Checkbox',
  label: 'My Checkbox',
  disabled: false,
  id: 'input',
  name: 'my-data',
  checked: false,
  readonly: false,
}
