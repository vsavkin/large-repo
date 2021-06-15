import { render } from '@testing-library/react';

import App16component6 from './app16component6';

describe('App16component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component6 />);
    expect(baseElement).toBeTruthy();
  });
});
