import { render } from '@testing-library/react';

import App13component23 from './app13component23';

describe('App13component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component23 />);
    expect(baseElement).toBeTruthy();
  });
});
