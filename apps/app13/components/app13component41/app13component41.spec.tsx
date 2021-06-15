import { render } from '@testing-library/react';

import App13component41 from './app13component41';

describe('App13component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component41 />);
    expect(baseElement).toBeTruthy();
  });
});
