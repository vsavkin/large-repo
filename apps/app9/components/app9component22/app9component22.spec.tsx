import { render } from '@testing-library/react';

import App9component22 from './app9component22';

describe('App9component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component22 />);
    expect(baseElement).toBeTruthy();
  });
});
