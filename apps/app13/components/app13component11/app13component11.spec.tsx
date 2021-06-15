import { render } from '@testing-library/react';

import App13component11 from './app13component11';

describe('App13component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component11 />);
    expect(baseElement).toBeTruthy();
  });
});
