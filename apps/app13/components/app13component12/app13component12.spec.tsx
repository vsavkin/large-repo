import { render } from '@testing-library/react';

import App13component12 from './app13component12';

describe('App13component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component12 />);
    expect(baseElement).toBeTruthy();
  });
});
