import { render } from '@testing-library/react';

import App1component97 from './app1component97';

describe('App1component97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component97 />);
    expect(baseElement).toBeTruthy();
  });
});
