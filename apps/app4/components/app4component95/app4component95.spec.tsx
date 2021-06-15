import { render } from '@testing-library/react';

import App4component95 from './app4component95';

describe('App4component95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component95 />);
    expect(baseElement).toBeTruthy();
  });
});
