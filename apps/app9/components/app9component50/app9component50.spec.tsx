import { render } from '@testing-library/react';

import App9component50 from './app9component50';

describe('App9component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component50 />);
    expect(baseElement).toBeTruthy();
  });
});
