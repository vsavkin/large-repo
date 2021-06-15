import { render } from '@testing-library/react';

import App6component75 from './app6component75';

describe('App6component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component75 />);
    expect(baseElement).toBeTruthy();
  });
});
