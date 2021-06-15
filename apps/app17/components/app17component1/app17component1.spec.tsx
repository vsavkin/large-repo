import { render } from '@testing-library/react';

import App17component1 from './app17component1';

describe('App17component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component1 />);
    expect(baseElement).toBeTruthy();
  });
});
