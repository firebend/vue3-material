<template>
  <div class="code-example">
    <md-toolbar
      v-if="title"
      class="md-primary md-dense"
      md-theme="dark"
      md-elevation="0"
    >
      <span class="md-title">{{ title }}</span>
      <md-button
        v-if="component.name"
        class="md-icon-button md-dense"
        @click="toggleCode"
      >
        <md-icon>code</md-icon>
        <md-tooltip md-theme="default">
          {{ t('components.code.code') }}
        </md-tooltip>
      </md-button>
      <codesandbox-edit
        v-if="component.name"
        :component="component"
        :title="title"
      />
    </md-toolbar>

    <transition name="block">
      <code-block
        v-if="!component.name || $slots.default || showCode"
        :label="label"
        :lang="lang"
      >
        {{ component.source }}
      </code-block>

      <md-content
        v-else
        class="demo"
        :md-theme="theme"
      >
        <div class="demo-content">
          <component :is="component.name" />
        </div>

        <md-button
          v-if="component.name"
          class="button-theme md-icon-button md-dense md-raised md-accent"
          @click="toggleTheme"
        >
          <md-icon>invert_colors</md-icon>
          <md-tooltip md-direction="top">
            {{ t('components.code.invertColors') }}
          </md-tooltip>
        </md-button>
      </md-content>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import CodeBlock from "./CodeBlock.vue";
import CodesandboxEdit from "./CodesandboxEdit.vue";

const props = defineProps({
  component: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: 'Vue'
  },
  lang: {
    type: String,
    default: 'vue'
  }
});

const { t } = useI18n();
const store = useStore();
const showCode = ref(false);
const isThemeDark = ref(false);

// Computed
const currentTheme = computed(() => store.state.theme);

const theme = computed(() => {
  const baseName = isThemeDark.value ? 'dark' : 'light';
  return `demo-${baseName}`;
});

// Watchers
watch(currentTheme, (newTheme) => {
  isThemeDark.value = newTheme.includes('dark');
}, { immediate: true });

// Methods
const toggleCode = () => {
  showCode.value = !showCode.value;
  console.log(props.component?.source);
};

const toggleTheme = () => {
  isThemeDark.value = !isThemeDark.value;
};
</script>

<style lang="scss" scoped>
  @use "vue-material/components/MdAnimation/variables";
  @use "vue-material/theme/palette";

  $color: palette.md-get-palette-color(grey, 700);

  .code-example {
    margin: 36px 0;
  }

  .md-toolbar.md-primary {
    position: relative;
    z-index: 1;
    background-color: $color;
    color: #fff;

    .md-icon {
      color: #fff;
    }
  }

  .md-title {
    flex: 1;
    color: #fff !important;
  }

  .md-button {
    margin: 8px;
  }

  .demo {
    min-height: 86px;
    padding: 16px;
    position: relative;
    border: 1px solid $color;
    border-top: 0;

    &.md-theme-demo-light {
      background-color: palette.md-get-palette-color(grey, 50);
    }

    &.md-theme-demo-dark {
      background-color: palette.md-get-palette-color(grey, 900);
    }
  }

  .demo-content {
    font-family: 'Roboto', sans-serif;
  }

  .button-theme {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 40;
  }

  .block-leave-active {
    display: none;
  }

  .block-enter-active {
    opacity: 0;
    transition: opacity .4s variables.$md-transition-default-timing;
    will-change: opacity;
  }

  .block-enter-to {
    opacity: 1;
  }
</style>
