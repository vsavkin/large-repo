import { render } from '@testing-library/react';

import App5component64 from './app5component64';

describe('App5component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component64 />);
    expect(baseElement).toBeTruthy();
  });
});
