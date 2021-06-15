import { render } from '@testing-library/react';

import App5component6 from './app5component6';

describe('App5component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component6 />);
    expect(baseElement).toBeTruthy();
  });
});
