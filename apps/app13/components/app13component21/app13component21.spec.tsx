import { render } from '@testing-library/react';

import App13component21 from './app13component21';

describe('App13component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component21 />);
    expect(baseElement).toBeTruthy();
  });
});
