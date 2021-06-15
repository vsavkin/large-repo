import { render } from '@testing-library/react';

import App3component41 from './app3component41';

describe('App3component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component41 />);
    expect(baseElement).toBeTruthy();
  });
});
