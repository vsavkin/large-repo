import { render } from '@testing-library/react';

import App17component83 from './app17component83';

describe('App17component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component83 />);
    expect(baseElement).toBeTruthy();
  });
});
