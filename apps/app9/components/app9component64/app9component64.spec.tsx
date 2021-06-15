import { render } from '@testing-library/react';

import App9component64 from './app9component64';

describe('App9component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component64 />);
    expect(baseElement).toBeTruthy();
  });
});
