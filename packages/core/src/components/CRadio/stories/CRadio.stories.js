import { CRadio } from '../index'
import { ref } from 'vue'

export default {
  title: 'Inputs/Radio',
  component: CRadio,
  argTypes: {
    CRadioInput: { action: '@CRadio.input' },
    CRadioInputEvent: { action: '@CRadio.inputEvent' },
    CRadioChange: { action: '@CRadio.change' },
  },
}

const PlaygroundTemplate = args => ({
  components: { CRadio },
  setup() {
    const checked = ref(args.checked)
    return {
      args,
      checked,
    }
  },
  template: `
    <div style="margin: 16px;">
      <CRadio
        v-model:checked="checked"
        v-bind="args"
        @input="args.CRadioInput"
        @inputEvent="args.CRadioInputEvent"
        @change="args.CRadioChange"
      />
    </div>
  `,
})

export const Checked = () => ({
  components: { CRadio },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CRadio>
          My Checkbox
        </CRadio>
      </div>
      <div style="margin-bottom: 16px;">
        <CRadio
          :isChecked="true"
        >
          My Checkbox
        </CRadio>
      </div>
    </div>
  `,
})

export const Disabled = () => ({
  components: { CRadio },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CRadio :isDisabled="true">
          My Checkbox
        </CRadio>
      </div>
      <div style="margin-bottom: 16px;">
        <CRadio
          :isDisabled="true"
          :isChecked="true"
        >
          My Checkbox
        </CRadio>
      </div>
    </div>
  `,
})

export const Readonly = () => ({
  components: { CRadio },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CRadio :isReadonly="true">
          My Checkbox
        </CRadio>
      </div>
      <div style="margin-bottom: 16px;">
        <CRadio
          :isReadonly="true"
          :isChecked="true"
        >
          My Checkbox
        </CRadio>
      </div>
    </div>
  `,
})

export const Playground = PlaygroundTemplate.bind({})
Playground.args = {
  value: 'My Radio',
  label: 'My Radio',
  disabled: false,
  id: 'input',
  name: 'my-data',
  checked: false,
  readonly: false,
}
