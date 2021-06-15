import { render } from '@testing-library/react';

import App9component23 from './app9component23';

describe('App9component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component23 />);
    expect(baseElement).toBeTruthy();
  });
});
