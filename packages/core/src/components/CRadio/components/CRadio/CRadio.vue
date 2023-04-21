<template>
  <div :class="radioClass">
    <label
      :for="id"
      class="c-radio__label"
    >
      <input
        :id="id"
        :checked="isChecked"
        :value="value"
        :disabled="isDisabled || isReadonly"
        :readonly="isReadonly"
        :name="name"
        type="radio"
        class="c-radio__input"
        @change="onChange"
      >
      <div class="c-radio__button" />
      <div class="c-radio__text">
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

const radioClass = computed(() => [
  'c-radio',
  props.isDisabled && 'c-radio--disabled',
])

const emits = defineEmits<{
  (eventName: 'update:isChecked', value: boolean): void
  (eventName: 'inputValue', value: string | boolean): void
  (eventName: 'inputEvent', value: Event): void
}>()

const onChange = ($e: Event) => {
  if (props.isReadonly) {
    return
  }
  const $event = $e.target as HTMLInputElement
  emits('update:isChecked', $event.checked)
  emits('inputValue', props.value)
  emits('inputEvent', $e)
}
</script>

<style lang="less" src="./CRadio.css" />
