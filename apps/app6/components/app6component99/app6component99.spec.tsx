import { render } from '@testing-library/react';

import App6component99 from './app6component99';

describe('App6component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component99 />);
    expect(baseElement).toBeTruthy();
  });
});
