import { render } from '@testing-library/react';

import App4component31 from './app4component31';

describe('App4component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component31 />);
    expect(baseElement).toBeTruthy();
  });
});
