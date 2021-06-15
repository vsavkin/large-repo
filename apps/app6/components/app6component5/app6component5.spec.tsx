import { render } from '@testing-library/react';

import App6component5 from './app6component5';

describe('App6component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component5 />);
    expect(baseElement).toBeTruthy();
  });
});
