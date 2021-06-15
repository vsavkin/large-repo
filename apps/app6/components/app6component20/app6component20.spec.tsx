import { render } from '@testing-library/react';

import App6component20 from './app6component20';

describe('App6component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component20 />);
    expect(baseElement).toBeTruthy();
  });
});
