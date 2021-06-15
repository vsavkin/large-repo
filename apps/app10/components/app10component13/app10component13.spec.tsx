import { render } from '@testing-library/react';

import App10component13 from './app10component13';

describe('App10component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component13 />);
    expect(baseElement).toBeTruthy();
  });
});
