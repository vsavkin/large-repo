import { render } from '@testing-library/react';

import App3component1 from './app3component1';

describe('App3component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component1 />);
    expect(baseElement).toBeTruthy();
  });
});
