// @flow
export default function replaceWords(target) {
  return target.replace(/(\S)/g, '<span class="u-random-word">$1</span>');
}
