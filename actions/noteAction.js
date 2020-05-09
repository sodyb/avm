export const UPDATE_ROOT = 'root:updateRoot';
export function updateRoot(newRoot) {
  return {
    type:UPDATE_ROOT,
    payload:{
      root:newRoot
    }
  }
}