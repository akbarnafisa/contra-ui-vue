import { CBtn } from '../index'
import { CButtonVariant, CButtonSize, CButtonType } from '../lib'

export default {
  title: 'Buttons/Button',
  component: CBtn,
  argTypes: {
    CBtnClick: { action: '@CBtn.click' },
    variant: {
      control: { type: 'radio' },
      options: CButtonVariant,
    },
    size: {
      control: { type: 'radio' },
      options: CButtonSize,
    },
    type: {
      control: { type: 'radio' },
      options: CButtonType,
    },
  },
}

export const Variants = () => ({
  components: { CBtn },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CBtn
          variant="primary"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="secondary"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="tertiary"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="destructive"
        >
          Button Text
        </CBtn>
      </div>
    </div>
  `,
})

export const Sizes = () => ({
  components: { CBtn },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CBtn
          variant="primary"
          size="small"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="secondary"
          size="small"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="tertiary"
          size="small"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="destructive"
          size="small"
        >
          Button Text
        </CBtn>
      </div>
    </div>
  `,
})

export const Disabled = () => ({
  components: { CBtn },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CBtn
          variant="primary"
          :isDisabled="true"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="secondary"
          :isDisabled="true"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="tertiary"
          :isDisabled="true"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="destructive"
          :isDisabled="true"
        >
          Button Text
        </CBtn>
      </div>
    </div>
  `,
})

export const FullWidth = () => ({
  components: { CBtn },
  template: `
    <div style="margin: 16px;">
      <div style="margin-bottom: 16px;">
        <CBtn
          variant="primary"
          :isFullWidth="true"
        >
          Button Text
        </CBtn>
      </div>

      <div style="margin-bottom: 16px;">
        <CBtn
          variant="primary"
          size="small"
          :isFullWidth="true"
        >
          Button Text
        </CBtn>
      </div>
    </div>
  `,
})

const PlaygroundTemplate = args => ({
  setup() {
    return {
      args,
    }
  },
  components: { CBtn },
  template: `
    <div style="margin: 16px;">
      <CBtn  v-bind="args" @click="args.CBtnClick">
        Text Button
      </CBtn>
    </div>
  `,
})

export const Playground = PlaygroundTemplate.bind({})
Playground.args = {
  size: 'large',
  variant: 'primary',
  type: 'button',
  isDisabled: false,
  isFullWidth: false,
}
