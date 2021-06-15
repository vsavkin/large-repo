import { render } from '@testing-library/react';

import App12component42 from './app12component42';

describe('App12component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component42 />);
    expect(baseElement).toBeTruthy();
  });
});
