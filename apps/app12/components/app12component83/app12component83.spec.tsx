import { render } from '@testing-library/react';

import App12component83 from './app12component83';

describe('App12component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component83 />);
    expect(baseElement).toBeTruthy();
  });
});
