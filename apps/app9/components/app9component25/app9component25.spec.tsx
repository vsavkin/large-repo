import { render } from '@testing-library/react';

import App9component25 from './app9component25';

describe('App9component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component25 />);
    expect(baseElement).toBeTruthy();
  });
});
