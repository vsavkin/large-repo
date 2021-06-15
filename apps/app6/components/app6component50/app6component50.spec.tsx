import { render } from '@testing-library/react';

import App6component50 from './app6component50';

describe('App6component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component50 />);
    expect(baseElement).toBeTruthy();
  });
});
