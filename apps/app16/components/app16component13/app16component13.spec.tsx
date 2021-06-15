import { render } from '@testing-library/react';

import App16component13 from './app16component13';

describe('App16component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component13 />);
    expect(baseElement).toBeTruthy();
  });
});
