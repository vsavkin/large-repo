import { render } from '@testing-library/react';

import App16component41 from './app16component41';

describe('App16component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component41 />);
    expect(baseElement).toBeTruthy();
  });
});
