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
    const isChecked = ref(args.isChecked)
    return {
      args,
      isChecked,
    }
  },
  template: `
    <div style="margin: 16px;">
      <CCheckbox
        v-model:isChecked="isChecked"
        v-bind="args"
        @input="args.CCheckboxInput"
        @inputEvent="args.CCheckboxInputEvent"
        @change="args.CCheckboxChange"
      />
    </div>
  `,
})

export const Checked = () => ({
  components: { CCheckbox },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CCheckbox>
          My Checkbox
        </CCheckbox>
      </div>
      <div style="margin-bottom: 16px;">
        <CCheckbox
          :isChecked="true"
        >
          My Checkbox
        </CCheckbox>
      </div>
    </div>
  `,
})

export const Disabled = () => ({
  components: { CCheckbox },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CCheckbox :isDisabled="true">
          My Checkbox
        </CCheckbox>
      </div>
      <div style="margin-bottom: 16px;">
        <CCheckbox
          :isDisabled="true"
          :isChecked="true"
        >
          My Checkbox
        </CCheckbox>
      </div>
    </div>
  `,
})

export const Readonly = () => ({
  components: { CCheckbox },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CCheckbox :isReadonly="true">
          My Checkbox
        </CCheckbox>
      </div>
      <div style="margin-bottom: 16px;">
        <CCheckbox
          :isReadonly="true"
          :isChecked="true"
        >
          My Checkbox
        </CCheckbox>
      </div>
    </div>
  `,
})

export const Playground = PlaygroundTemplate.bind({})
Playground.args = {
  value: 'My Checkbox',
  label: 'My Checkbox',
  isDisabled: false,
  id: 'input',
  name: 'my-data',
  isChecked: false,
  isReadonly: false,
}
