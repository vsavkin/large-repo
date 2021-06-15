import { render } from '@testing-library/react';

import App13component15 from './app13component15';

describe('App13component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component15 />);
    expect(baseElement).toBeTruthy();
  });
});
