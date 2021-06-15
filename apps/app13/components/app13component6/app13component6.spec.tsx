import { render } from '@testing-library/react';

import App13component6 from './app13component6';

describe('App13component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component6 />);
    expect(baseElement).toBeTruthy();
  });
});
