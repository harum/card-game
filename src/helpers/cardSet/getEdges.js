import getEdge from '../cards/getEdge';

const getEdges = cardSet =>
  cardSet.reduce((edges, current) => ({
    ...edges,
    [current.type]: getEdge(current.cards)
  }), {});

export default getEdges;
