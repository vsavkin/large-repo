import { render } from '@testing-library/react';

import App6component18 from './app6component18';

describe('App6component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component18 />);
    expect(baseElement).toBeTruthy();
  });
});
