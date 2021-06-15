import { render } from '@testing-library/react';

import App3component64 from './app3component64';

describe('App3component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component64 />);
    expect(baseElement).toBeTruthy();
  });
});
