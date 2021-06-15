import { render } from '@testing-library/react';

import App13component16 from './app13component16';

describe('App13component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component16 />);
    expect(baseElement).toBeTruthy();
  });
});
