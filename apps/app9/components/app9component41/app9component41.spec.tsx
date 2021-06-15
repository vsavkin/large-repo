import { render } from '@testing-library/react';

import App9component41 from './app9component41';

describe('App9component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component41 />);
    expect(baseElement).toBeTruthy();
  });
});
