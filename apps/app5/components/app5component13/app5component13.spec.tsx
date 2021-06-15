import { render } from '@testing-library/react';

import App5component13 from './app5component13';

describe('App5component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component13 />);
    expect(baseElement).toBeTruthy();
  });
});
