<template>
  <button
    :class="activeClasses"
    :disabled="isDisabled"
    :type="type"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import {
  CButtonVariantTypes,
  CButtonSizeTypes,
  CButtonTypes,
} from '../../lib'

const props = defineProps({
  size: {
    type: String as PropType<`${CButtonSizeTypes}`>,
    default: CButtonSizeTypes.LARGE,
  },
  variant: {
    type: String as PropType<`${CButtonVariantTypes}`>,
    default: CButtonVariantTypes.PRIMARY,
  },
  type: {
    type: String as PropType<`${CButtonTypes}`>,
    default: CButtonTypes.BUTTON,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isFullWidth: {
    type: Boolean,
    default: false,
  },
})

const activeClasses = computed(() => [
  'c-button',
  `c-button--${props.variant}`,
  `c-button--${props.size}`,
  {
    'c-button--full': props.isFullWidth,
  },
])
</script>

<style lang="less" src="./CBtn.css" />
