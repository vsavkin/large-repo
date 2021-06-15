import { render } from '@testing-library/react';

import App5component41 from './app5component41';

describe('App5component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component41 />);
    expect(baseElement).toBeTruthy();
  });
});
