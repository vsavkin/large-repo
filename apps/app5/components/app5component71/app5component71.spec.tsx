import { render } from '@testing-library/react';

import App5component71 from './app5component71';

describe('App5component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component71 />);
    expect(baseElement).toBeTruthy();
  });
});
