import { render } from '@testing-library/react';

import App13component50 from './app13component50';

describe('App13component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component50 />);
    expect(baseElement).toBeTruthy();
  });
});
