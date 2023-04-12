<template>
  <div :class="checkboxClass">
    <label
      :for="id"
      class="c-checkbox__label"
    >
      <input
        :id="id"
        :checked="checked"
        :value="value"
        :disabled="disabled || readonly"
        :readonly="readonly"
        :name="name"
        type="checkbox"
        class="c-checkbox__input"
        @change="onChange"
      >
      <div class="c-checkbox__button" />
      <div class="c-checkbox__text">
        <slot v-if="$slots.default" />
        <template v-else>
          {{ label }}
        </template>
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: [String, Boolean],
    default: false,
  },
  label: {
    type: String,
    default: '',
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  checked: {
    type: Boolean,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})

const checkboxClass = computed(() => [
  'c-checkbox',
  props.disabled && 'c-checkbox--disabled',
])

const emits =
  defineEmits<{
    (eventName: 'update:checked', value: boolean): void
    (
      eventName: 'inputValue',
      checked: boolean,
      value: string | boolean
    ): void
    (eventName: 'inputEvent', value: Event): void
  }>()

const onChange = ($e: Event) => {
  if (props.readonly) {
    return
  }
  const $event = $e.target as HTMLInputElement
  emits('update:checked', $event.checked)
  emits('inputValue', $event.checked, props.value)
  emits('inputEvent', $e)
}
</script>

<style lang="less" src="./CCheckbox.css" />
