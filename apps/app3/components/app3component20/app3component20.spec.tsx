import { render } from '@testing-library/react';

import App3component20 from './app3component20';

describe('App3component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component20 />);
    expect(baseElement).toBeTruthy();
  });
});
