import { render } from '@testing-library/react';

import App13component1 from './app13component1';

describe('App13component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component1 />);
    expect(baseElement).toBeTruthy();
  });
});
