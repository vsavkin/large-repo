import { render } from '@testing-library/react';

import App9component2 from './app9component2';

describe('App9component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component2 />);
    expect(baseElement).toBeTruthy();
  });
});
