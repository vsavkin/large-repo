import { render } from '@testing-library/react';

import App20component24 from './app20component24';

describe('App20component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component24 />);
    expect(baseElement).toBeTruthy();
  });
});
