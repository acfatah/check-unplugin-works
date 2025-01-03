/**
 * unplugin-vue-components/vite resolver for lucide-vue-next icons
 */
export function lucideIconResolver (componentName) {
  const [, name] = componentName.match(/([a-zA-Z0-9]+)Icon/) || []

  if (name)
    return { name, from: 'lucide-vue-next' }
}
