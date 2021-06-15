import { render } from '@testing-library/react';

import App13component3 from './app13component3';

describe('App13component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component3 />);
    expect(baseElement).toBeTruthy();
  });
});
