import { render } from '@testing-library/react';

import App9component20 from './app9component20';

describe('App9component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component20 />);
    expect(baseElement).toBeTruthy();
  });
});
