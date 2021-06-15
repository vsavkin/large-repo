import { render } from '@testing-library/react';

import App13component25 from './app13component25';

describe('App13component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component25 />);
    expect(baseElement).toBeTruthy();
  });
});
