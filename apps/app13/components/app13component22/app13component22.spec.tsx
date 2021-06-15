import { render } from '@testing-library/react';

import App13component22 from './app13component22';

describe('App13component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component22 />);
    expect(baseElement).toBeTruthy();
  });
});
