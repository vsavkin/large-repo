import { render } from '@testing-library/react';

import App18component24 from './app18component24';

describe('App18component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component24 />);
    expect(baseElement).toBeTruthy();
  });
});
