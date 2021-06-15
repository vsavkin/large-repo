import { render } from '@testing-library/react';

import App8component64 from './app8component64';

describe('App8component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component64 />);
    expect(baseElement).toBeTruthy();
  });
});
