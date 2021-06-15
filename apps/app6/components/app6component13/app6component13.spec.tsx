import { render } from '@testing-library/react';

import App6component13 from './app6component13';

describe('App6component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component13 />);
    expect(baseElement).toBeTruthy();
  });
});
