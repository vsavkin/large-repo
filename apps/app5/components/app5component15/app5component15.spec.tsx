import { render } from '@testing-library/react';

import App5component15 from './app5component15';

describe('App5component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component15 />);
    expect(baseElement).toBeTruthy();
  });
});
