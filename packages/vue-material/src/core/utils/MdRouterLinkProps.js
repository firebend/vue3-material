export default (context, props) => {
  const routerLink = context.$options.components['RouterLink'] || context.$options.components['router-link']
  const routerLinkProps = routerLink?.options?.props || {}
  return {
    ...props,
    ...routerLinkProps
  }
}
