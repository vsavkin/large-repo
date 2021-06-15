import { render } from '@testing-library/react';

import App4component1 from './app4component1';

describe('App4component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component1 />);
    expect(baseElement).toBeTruthy();
  });
});
