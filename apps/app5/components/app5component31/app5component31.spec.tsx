import { render } from '@testing-library/react';

import App5component31 from './app5component31';

describe('App5component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component31 />);
    expect(baseElement).toBeTruthy();
  });
});
