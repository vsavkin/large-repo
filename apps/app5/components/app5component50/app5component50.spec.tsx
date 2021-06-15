import { render } from '@testing-library/react';

import App5component50 from './app5component50';

describe('App5component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component50 />);
    expect(baseElement).toBeTruthy();
  });
});
