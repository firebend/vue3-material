import type {Plugin} from 'vite';

interface ComponentExamplePlugin extends Plugin {
  name: 'vue-example-component';
}

export const componentExamplePlugin: ComponentExamplePlugin = {
  name: 'vue-example-component',
  transform(code, id) {
    // Skip if not a .vue file with <example> block
    if (!/vue&type=example/.test(id)) {
      return;
    }

    // Get filePath under the /src directory
    const srcIndex = id.indexOf('docs/src');
    if (srcIndex === -1) {
      throw new Error(`Invalid example id: ${id}`);
    }

    const filePath = id.slice(srcIndex + 'docs/src'.length);
    const fileParts = filePath.slice(0, filePath.indexOf('?')).split('/');
    const fileName = fileParts.pop();
    if (!fileName) {
      throw new Error(`Invalid example id: ${id}`);
    }

    // Get component name
    const exampleName = fileName.replace('.vue', '');
    const componentName = exampleName + 'Example';

    // Create example component
    const exampleComponent = `
import { defineComponent, defineAsyncComponent } from 'vue';
import CodeLoading from '@/components/CodeLoading.vue';

console.log('${filePath}');

const ${componentName} = defineAsyncComponent({
  loader: () => import('${filePath}'),
  loadingComponent: CodeLoading,
  delay: 0,
  timeout: 3000
});

export default function(component) {
  // Register the async component globally
  if (!component.components) {
    component.components = {};
  }

  component.components['${componentName}'] = ${componentName};

  // Add example to component's examples object
  if (!component.examples) {
    component.examples = {};
  }

  component.examples['${exampleName.toLowerCase()}'] = {
    name: '${componentName}',
    source: ${JSON.stringify(code)}
  };

  return component;
}`;

    return {
      code: exampleComponent,
      map: null // No source map needed for generated code
    };
  },
};

export default componentExamplePlugin;
