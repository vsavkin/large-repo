import { render } from '@testing-library/react';

import App13component8 from './app13component8';

describe('App13component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component8 />);
    expect(baseElement).toBeTruthy();
  });
});
