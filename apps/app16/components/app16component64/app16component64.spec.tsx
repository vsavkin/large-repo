import { render } from '@testing-library/react';

import App16component64 from './app16component64';

describe('App16component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component64 />);
    expect(baseElement).toBeTruthy();
  });
});
