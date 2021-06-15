import { render } from '@testing-library/react';

import App9component16 from './app9component16';

describe('App9component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component16 />);
    expect(baseElement).toBeTruthy();
  });
});
