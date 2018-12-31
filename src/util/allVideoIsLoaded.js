// @flow
export default function allVideoIsLoaded(currentLoadedVideoNum, totalVideoNum) {
  return parseInt(currentLoadedVideoNum, 10) === parseInt(totalVideoNum, 10) ? true : false;
}