import { render } from '@testing-library/react';

import App13component20 from './app13component20';

describe('App13component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component20 />);
    expect(baseElement).toBeTruthy();
  });
});
