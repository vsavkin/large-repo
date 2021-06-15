import { render } from '@testing-library/react';

import App12component20 from './app12component20';

describe('App12component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component20 />);
    expect(baseElement).toBeTruthy();
  });
});
