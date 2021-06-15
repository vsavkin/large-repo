import { render } from '@testing-library/react';

import App13component64 from './app13component64';

describe('App13component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component64 />);
    expect(baseElement).toBeTruthy();
  });
});
