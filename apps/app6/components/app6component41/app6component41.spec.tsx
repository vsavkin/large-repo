import { render } from '@testing-library/react';

import App6component41 from './app6component41';

describe('App6component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component41 />);
    expect(baseElement).toBeTruthy();
  });
});
