import { render } from '@testing-library/react';

import App9component6 from './app9component6';

describe('App9component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component6 />);
    expect(baseElement).toBeTruthy();
  });
});
