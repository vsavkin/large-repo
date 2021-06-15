import { render } from '@testing-library/react';

import App6component1 from './app6component1';

describe('App6component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component1 />);
    expect(baseElement).toBeTruthy();
  });
});
