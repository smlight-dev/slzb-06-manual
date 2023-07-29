export const domain = 'https://smlight.tech';
export const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
  let base = '/manual/slzb-06/';
  if (isDevelop) base += 'develop/';
  return base as '/' | `/${string}/`;
}