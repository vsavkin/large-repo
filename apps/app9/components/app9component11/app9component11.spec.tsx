import { render } from '@testing-library/react';

import App9component11 from './app9component11';

describe('App9component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component11 />);
    expect(baseElement).toBeTruthy();
  });
});
