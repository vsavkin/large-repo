import { render } from '@testing-library/react';

import App4component81 from './app4component81';

describe('App4component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component81 />);
    expect(baseElement).toBeTruthy();
  });
});
