import { render } from '@testing-library/react';

import App13component2 from './app13component2';

describe('App13component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component2 />);
    expect(baseElement).toBeTruthy();
  });
});
