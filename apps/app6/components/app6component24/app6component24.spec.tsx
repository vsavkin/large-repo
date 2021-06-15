import { render } from '@testing-library/react';

import App6component24 from './app6component24';

describe('App6component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component24 />);
    expect(baseElement).toBeTruthy();
  });
});
