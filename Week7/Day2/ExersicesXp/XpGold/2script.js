/*Exercise 2: Analyzing The Reduce Method

Instructions

Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
 */


[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],)
    // the output will be : [1,2 ,0, 1, 2, 3]

