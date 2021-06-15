import { render } from '@testing-library/react';

import App16component24 from './app16component24';

describe('App16component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component24 />);
    expect(baseElement).toBeTruthy();
  });
});
