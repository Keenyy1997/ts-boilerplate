/**
 * @description Array of Object with a home list.
 */
const homeList: readonly object[] = [
  {
    'address': 'Example Street',
    'owner': 'Lorem Ipsum'
  },
  {
    'address': 'Example Street #20',
    'owner': 'Lorem Ipsum #12'
  },
  {
    'address': 'Example Street #19',
    'owner': 'Lorem Ipsum #25'
  },
  {
    'address': 'Example Street #12',
    'owner': 'Lorem Ipsum #22'
  },
  {
    'address': 'Example Street #99',
    'owner': 'Lorem Ipsum #14'
  }
];

/**
 * @description Example query resolver to fetch an object back
 */
export function getRandomHome(): object {

  const randomIndex: number = Math.floor(Math.random() * homeList.length) + 0;

  return homeList[randomIndex];
}