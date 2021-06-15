import { render } from '@testing-library/react';

import App6component32 from './app6component32';

describe('App6component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component32 />);
    expect(baseElement).toBeTruthy();
  });
});
