import { render } from '@testing-library/react';

import App6component81 from './app6component81';

describe('App6component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component81 />);
    expect(baseElement).toBeTruthy();
  });
});
