// @flow
export default function allVideoIsLoaded(currentLoadedVideoNum: number, totalVideoNum: number) {
  return parseInt(currentLoadedVideoNum, 10) === parseInt(totalVideoNum, 10) ? true : false;
}