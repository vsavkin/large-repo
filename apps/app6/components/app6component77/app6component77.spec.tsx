import { render } from '@testing-library/react';

import App6component77 from './app6component77';

describe('App6component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component77 />);
    expect(baseElement).toBeTruthy();
  });
});
