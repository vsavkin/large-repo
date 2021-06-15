import { render } from '@testing-library/react';

import App13component43 from './app13component43';

describe('App13component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component43 />);
    expect(baseElement).toBeTruthy();
  });
});
