import { render } from '@testing-library/react';

import App5component14 from './app5component14';

describe('App5component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component14 />);
    expect(baseElement).toBeTruthy();
  });
});
