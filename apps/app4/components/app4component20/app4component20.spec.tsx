import { render } from '@testing-library/react';

import App4component20 from './app4component20';

describe('App4component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component20 />);
    expect(baseElement).toBeTruthy();
  });
});
