import { render } from '@testing-library/react';

import App6component15 from './app6component15';

describe('App6component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component15 />);
    expect(baseElement).toBeTruthy();
  });
});
