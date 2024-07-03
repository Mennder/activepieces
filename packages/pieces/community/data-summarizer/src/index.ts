import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { calculateAverage } from './lib/actions/calculate-average';
import { calculateSum } from './lib/actions/calculate-sum';
import { countUniques } from './lib/actions/count-uniques';
import { getMinMax } from './lib/actions/get-min-max';

export const dataSummarizer = createPiece({
  displayName: 'Data Summarizer',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/data-summarizer.png',
  authors: ['tahboubali'],
  actions: [calculateAverage, calculateSum, countUniques, getMinMax],
  triggers: []
});
