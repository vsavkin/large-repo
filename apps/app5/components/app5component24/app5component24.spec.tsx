import { render } from '@testing-library/react';

import App5component24 from './app5component24';

describe('App5component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component24 />);
    expect(baseElement).toBeTruthy();
  });
});
