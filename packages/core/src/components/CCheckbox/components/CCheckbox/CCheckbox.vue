<template>
  <div :class="checkboxClass">
    <label
      :for="id"
      class="c-checkbox__label"
    >
      <input
        :id="id"
        :checked="isChecked"
        :value="value"
        :disabled="isDisabled || isReadonly"
        :readonly="isReadonly"
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
  isDisabled: {
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
  isChecked: {
    type: Boolean,
    default: null,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
})

const checkboxClass = computed(() => [
  'c-checkbox',
  props.isDisabled && 'c-checkbox--disabled',
])

const emits =
  defineEmits<{
    (eventName: 'update:isChecked', value: boolean): void
    (
      eventName: 'inputValue',
      checked: boolean,
      value: string | boolean
    ): void
    (eventName: 'inputEvent', value: Event): void
  }>()

const onChange = ($e: Event) => {
  if (props.isReadonly) {
    return
  }
  const $event = $e.target as HTMLInputElement
  emits('update:isChecked', $event.checked)
  emits('inputValue', $event.checked, props.value)
  emits('inputEvent', $e)
}
</script>

<style lang="less" src="./CCheckbox.css" />
